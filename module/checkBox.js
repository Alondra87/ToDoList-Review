const CheckBoxesChecked = (event) => {
  if (event.target.classList.contains('checkbox')) {
    const listTasks = JSON.parse(localStorage.getItem('mytodoList'));

    listTasks[event.target.id - 1].done = !listTasks[event.target.id - 1].done;
    event.target.parentNode.classList.toggle('newbackg');
    event.target.nextElementSibling.classList.toggle('input-done');
    event.target.nextElementSibling.classList.toggle('done-task');
    event.target.parentNode.lastElementChild.classList.toggle('trash');
    localStorage.setItem('mytodoList', JSON.stringify(listTasks));
  }
};

export default CheckBoxesChecked;
