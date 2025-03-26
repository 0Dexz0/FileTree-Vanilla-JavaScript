import { DEFAULT_PATH, dataFromPath } from './data.js'
const TREE_CONTAINER = document.getElementById('file-tree')

const fileTypes = {
    ".txt": "file",
    ".png": "image",
}

TREE_CONTAINER.addEventListener('click', (e) => {

    if (e.target.className === 'file') {
        // Do what you want with the file address
        console.log(`${e.target.parentElement.path}/${e.target.textContent}`)
        return
    }

    toggleFolder(e)
});

function toggleFolder(e) {
    const FOLDER = e.target.closest('li.folder');
    const NESTED = FOLDER.querySelector('ul')
    const isOpen = FOLDER.classList.toggle('open')

    const folderParentElement = FOLDER.parentElement
    
    if (!NESTED.path) loadDataFromPath(FOLDER, NESTED, folderParentElement)

    folderParentElement.openFolders = isOpen
        ? (folderParentElement.openFolders || 0) + 1
        : (folderParentElement.openFolders - 1) || null;

    if (!isOpen) {

        folderParentElement.childOpenFolders = !NESTED.openFolders ? false : true

        if (!NESTED.openFolders && !NESTED.childOpenFolders) {
            NESTED.path = null
            NESTED.remove()
            FOLDER.insertAdjacentHTML("beforeend", `<ul class="nested"></ul>`);
        }
    }
}

function loadTreeData(container, path) {
    container.path = path

    const files = dataFromPath[path];

    if (!files || files.length === 0) return;

    let html = ''

    for (const data of files) {
        const name = data.name
        html += data.isDirectory
        ? `<li class="folder">${name}<ul class="nested"></ul></li>` 
        : `<li class="${fileTypes[name.slice(name.lastIndexOf("."))] ?? "file"}">${name}</li>`
    }

    container.insertAdjacentHTML("beforeend", html);
}

function loadDataFromPath(FOLDER, NESTED, folderParentElement) {
    loadTreeData(NESTED, `${folderParentElement.path}/${FOLDER.firstChild.nodeValue.trim()}`);
}

// It is the first load of the tree, for example when the user chooses the folder they want to add to the tree, you have to put the default path
loadTreeData(TREE_CONTAINER, DEFAULT_PATH);