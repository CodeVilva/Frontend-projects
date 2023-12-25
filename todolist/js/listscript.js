const taskInput = document.querySelector('.inputfield textarea');
    listItems = document.querySelector('.lists');
    pendingNum = document.querySelector('.pending-num');
    clearButton = document.querySelector('#clearButton');


function manageTasks() {

	let tasks = document.querySelectorAll('.pending');

	pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

	let allLists = document.querySelectorAll('.list');

	if(allLists.length > 0){

		allLists.style.marginTop="20px";
		clearButton.style.pointerEvents="auto";
		return;
	}
	allLists.style.marginTop="0px";
	clearButton.style.pointerEvents="none";
}

taskInput.addEventListener('keyup', (e) => {

	let inputValue = taskInput.value.trim();

	if(e.key === "Enter" && inputValue.length > 0){

		let liTag = `<li class="list pending" onclick="handlestatus(this)"><div>
		             <input type="checkbox"></input><span class="task"> ${inputValue} </span></div>
		             <p class="delete" onclick="deleteTask(this)"><img src="./img/closeicon.png" height="16px" width="16px"></p></li>`;

		             listItems.insertAdjacentHTML("beforeend", liTag);
		             taskInput.value = "";
		             manageTasks();
	}
});


function handlestatus(e){

	const checkbox = e.querySelector("input");
	checkbox.checked = checkbox.checked ? false : true;
	e.classList.toggle("pending");
	manageTasks();
}

function deleteTask(e){

	e.parentElement.remove();
	manageTasks();
}

clearButton.addEventListener('click', () => {
  listItems.innerHTML = "";
  manageTasks();
});
