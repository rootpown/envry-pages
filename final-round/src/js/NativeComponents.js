let rootFolder = './imports';
let JSModules = '[./index.js]';
const componentPromises = [];

async function loadComponents(node) {
  for (const item of iterateDOMTree(node)) {
    const componentName = item.dataset.component;
    if (componentName) {
      componentPromises.push(await getComponent(componentName, item));
    }
  }
}

function* iterateDOMTree(node) {
  const stack = [node];
  while (stack.length > 0) {
    const current = stack.pop();
    yield current;
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
}

function parseNode(html) {
  const node = document.createElement('div');
  node.innerHTML = html;
  return node.children[0];
}

async function getComponent(nameComponent, containerNode) {
  return await fetch(`/${rootFolder}/${nameComponent}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}: ${response.statusText}`
        );
      }
      return response.text();
    })
    .then(async (html) => {
      let nodeHtml = await parseNode(html);
      const isIntoSlot = nodeHtml.querySelector('slot');
      const isIntoChildren = containerNode.innerHTML.trim().length > 0;

      if (isIntoChildren && isIntoSlot) {
        html = html.replace('<slot/>', containerNode.innerHTML);
      } else if (!isIntoChildren && isIntoSlot) {
        throw new Error(
          'You added <slot/> to the component, but you’re not injected child elements.'
        );
      } else if (isIntoChildren && !isIntoSlot) {
        throw new Error(
          'You injected child elements, but you didn’t add <slot/> to the component.'
        );
      }

      nodeHtml = await parseNode(html);
      await loadComponents(nodeHtml);
      return [containerNode, nodeHtml];
    })
    .catch((error) => {
      console.error('Error loading component:', nameComponent, error);
      return Promise.reject(error);
    });
}

window.addEventListener('load', async () => {
  const rootOrigin = document.getElementById('root');
  const rootCopy = root.cloneNode(true);
  const paths = root.dataset.modules || JSModules;
  rootFolder = root.dataset.folder || rootFolder;
  rootFolder = rootFolder.substring(2, rootFolder.length);
  JSModules = paths.substring(1, paths.length - 1).split(',');

  if (root) {
    rootOrigin.innerHTML = '';
    rootOrigin.removeAttribute('data-modules');
    rootOrigin.removeAttribute('data-folder');

    await loadComponents(rootCopy);
    for (const [containerNode, nodeHtml] of componentPromises) {
      await containerNode.parentElement.appendChild(nodeHtml);
      await containerNode.remove();
    }

    rootOrigin.innerHTML = rootCopy.innerHTML;
    for (const JSModule of JSModules) {
      const script = document.createElement('script');
      script.src = JSModule.trim();
      document.body.appendChild(script);
    }
  } else {
    console.error("Element with ID 'root' not found.");
  }
});
