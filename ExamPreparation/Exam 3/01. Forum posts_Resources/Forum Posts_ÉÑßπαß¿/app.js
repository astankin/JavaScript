window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getInputData();
  });

  const titleElement = document.getElementById('post-title');
  const categoryElement = document.getElementById('post-category');
  const contentElement = document.getElementById('post-content');

  const ulReview = document.getElementById('review-list');
  const ulPublished = document.getElementById('published-list');

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clearAllPosts);
   
  function getInputData(){

    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;

    if (!title || !category || !content){
      return;
    }

    let li = createElement('li', '', ulReview, 'rpost');
    let article = createElement('article', '', li);
    let h4 = createElement('h4', title, article);
    createElement('p', `Category: ${category}`, article);
    createElement('p', `Content: ${content}`, article);

    let approveBtn = createElement('button', 'Approve', li, 'action-btn approve');
    approveBtn.addEventListener('click', approvePost)

    let editBtn = createElement('button', 'Edit', li, 'action-btn edit');
    editBtn.addEventListener('click', editPost);

   

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

  }
  
  function approvePost(e){
    let parentLi = e.currentTarget.parentElement;
    let editBtn = parentLi.querySelectorAll('button')[0];
    let approveBtn = parentLi.querySelectorAll('button')[1];
    editBtn.remove();
    approveBtn.remove();
    parentLi.remove();
    ulPublished.appendChild(parentLi);

  }

  function editPost(e){
    let parentLi = e.currentTarget.parentElement;
    let title = parentLi.querySelector('h4').textContent;
    let indx1 = parentLi.querySelectorAll('p')[0].textContent.indexOf(': ');
    let category = parentLi.querySelectorAll('p')[0].textContent.split(': ')[1];
    let indx2 = parentLi.querySelectorAll('p')[1].textContent.indexOf(': ');
    let content = parentLi.querySelectorAll('p')[1].textContent.split(': ')[1];

    titleElement.value = title;
    categoryElement.value = category;
    contentElement.value = content;
    parentLi.remove();
  }

  function clearAllPosts(){
    ulPublished.innerHTML = '';
  }

  function createElement(type, content, parent, className){
    let newElement = document.createElement(type);

    if (content && type === 'input'){
        newElement.value = content;
    } else if (content) {
        newElement.textContent = content;
    }
    if (parent){
        parent.appendChild(newElement);
    }
    
    if (className){
        newElement.className = className;
    }
    
    return newElement;
}

}
