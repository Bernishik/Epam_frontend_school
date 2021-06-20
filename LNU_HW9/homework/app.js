/* eslint-disable no-magic-numbers */
const data = [
  {
    'folder': true,
    'title': 'Grow',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'English',
        'children': [
          {
            'title': 'Present_Perfect.txt'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Soft',
    'children': [
      {
        'folder': true,
        'title': 'NVIDIA',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'folder': true,
    'title': 'Doc',
    'children': [
      {
        'title': 'project_info.txt'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');
// let menu = createContext()
// rootNode.appendChild(menu)
// let menuState = 0;
// let active = 'context-menu--active';
function closeFolder(event){
  event.stopPropagation();
  let folder_content =this.parentNode.children[1];
  let folder_icon =this.children[0];
folder_content.style.display = 'block';
folder_icon.textContent = 'folder';
folder_content.style.display = 'none';
this.removeEventListener('click',closeFolder);
this.addEventListener('click',openFolder);
}

function openFolder(event){
  event.stopPropagation();
  
let folder_content =this.parentNode.children[1];
let folder_icon =this.children[0];
folder_content.style.display = 'block';
folder_icon.textContent = 'folder_open';
this.removeEventListener('click',openFolder);
this.addEventListener('click',closeFolder);
}

function hoverElementOver(event){
  event.stopPropagation();


  this.style.backgroundColor ='rgba(200,255,252,0.527)';
  this.style.cursor = 'pointer';
  this.style.borderRadius = '6px';
}
function hoverElementLeave(event){
event.stopPropagation();
this.style = '';
}

function contextMenu(event){
  event.preventDefault();
  // toggleMenuOn();
}

// function toggleMenuOn() {
//   if ( menuState !== 1 ) {
//     menuState = 1;
//     menu.classList.add(active);
//   }
// }

function createContext(){
  let content = document.createElement('nav');
  content.classList.add('context-menu');
  let list = document.createElement('ul');
  list.classList.add('context-menu__items');
  content.appendChild(list);
  let item1 = document.createElement('ul');
  item1.classList.add('context-menu__item');
  item1.classList.add('context-menu__rename');
  item1.textContent = 'Rename';
  list.appendChild(item1);
  let item2 = document.createElement('ul');
  item2.classList.add('context-menu__item');
  item2.classList.add('context-menu__delete');
  item2.textContent = 'Delete item';
  list.appendChild(item2);
  return content
}
function createExplorer(data,parentNode){
  let content = document.createElement('div');
  content.className = 'content';
  parentNode.appendChild(content);
  for (let data_element of data){
    let element = document.createElement('div');
    element.className='main_margin';
    let title_text = document.createElement('span');
    title_text.textContent = data_element['title'];
    title_text.className = 'vcententering title';
    if(data_element['folder'] === true){
    let folder_content = document.createElement('div');
    folder_content.classList.add('folder');

    let folderIcon = document.createElement('i');
    folderIcon.className = 'material-icons vcententering';
    
    folderIcon.textContent = 'folder';
    element.appendChild(folder_content);
    folder_content.appendChild(folderIcon);
    folder_content.appendChild(title_text);
    folder_content.addEventListener('click',openFolder)
    if (data_element['children'] !== null){
      let child_content = createExplorer(data_element['children'],element);
      child_content.style.display = 'none';
    }else{
      let empty_folder= document.createElement('i');
      empty_folder.textContent = 'Folder is empty';
      empty_folder.className = 'main_margin empty_folder';
      element.appendChild(empty_folder)
      empty_folder.style.display = 'none';
    }
    
    }else{
      let fileIcon = document.createElement('i');
      fileIcon.className = 'material-icons vcententering';
      fileIcon.textContent = 'insert_drive_file';
      element.appendChild(fileIcon);
      element.appendChild(title_text);
    }
    
    content.appendChild(element);
    element.addEventListener('mouseover',hoverElementOver);
    element.addEventListener('mouseout',hoverElementLeave);
    element.addEventListener('contextmenu',contextMenu)
  }
  return content;
}
createExplorer(data,rootNode)
// let data_element = data[0];


