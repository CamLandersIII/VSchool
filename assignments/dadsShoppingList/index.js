const form = document.querySelector('#form');
const input = document.querySelector('#item');
const list = document.querySelector('#list');

form.addEventListener('submit', addItem);
list.addEventListener('click', removeItem);

function addItem(event) {
	event.preventDefault();
	const item = input.value;
	if (item !== '') {
		const listItem = document.createElement('li');
		listItem.innerHTML = `${item} <button>x</button>`;
		list.appendChild(listItem);
		input.value = '';
	}
}

function removeItem(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentNode.remove();
	}
}
