function addItem() {
    let textElement = document.getElementById('newItemText');
    let liItems = document.getElementById('items');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = textElement.value;

    liItems.appendChild(newLiElement);
    textElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newLiElement.appendChild(deleteElement);
}