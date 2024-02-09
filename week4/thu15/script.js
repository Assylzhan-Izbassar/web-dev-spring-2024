function addTask() {
    let value = document.getElementsByClassName('content__input');
    let listContainer = document.getElementsByClassName('content__list')[0];

    let li = document.createElement('li');
    li.classList.add('content__item');
    li.textContent = value[0].value;

    li.addEventListener('click', (event) => {
        const li = event.target;
        const list = Array.from(li.parentNode.children);

        // console.log(list.indexOf(li));

        list[list.indexOf(li)].remove();
        
    });

    listContainer.appendChild(li);

    value[0].value = ""
}