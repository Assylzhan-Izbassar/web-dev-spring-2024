function add() {
    let value = document.querySelector('.form__item input').value;
    console.log(value);

    let ul = document.getElementsByClassName('to-do__list')[0];

    let li = document.createElement('li');
    li.classList.add('to-do__item');
    li.textContent = value;

    ul.appendChild(li);
}