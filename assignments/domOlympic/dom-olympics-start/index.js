// Get the header element
const header = document.querySelector('#header');

// Create the header content
const headerContent = `
    <div class="header-container">
        <h1 class="header">DOM Olympics</h1>
        <h2 class="name"></h2>
    </div>
`;

// Insert the header content into the header element
header.innerHTML = headerContent;

// Style the header container
const headerContainer = document.querySelector('.header-container');
headerContainer.style.backgroundColor = '#25274D';
headerContainer.style.display = 'flex';
headerContainer.style.justifyContent = 'space-between';
headerContainer.style.padding = '10px';

// Style the header text
const headerText = document.querySelectorAll('.header, .name');
headerText.forEach(element => {
    element.style.color = '#F5CB5C';
    element.style.margin = '0';
});

// Get all the message elements
const messages = document.querySelectorAll('.message');

// Define an object with words to replace and their replacements
const replacements = {
  'serious': 'silly',
  'talk': 'sing',
  'police': 'pirate',
  'simple': 'super',
  'farmer': 'wizard',
  'something': 'something amazing'
};

// Loop through each message element and replace the words
messages.forEach(message => {
  const text = message.textContent;
  let newText = text;

  for (const word in replacements) {
    const regex = new RegExp(word, 'gi');
    newText = newText.replace(regex, replacements[word]);
  }

  message.textContent = newText;
});

// Get the clear button element
const clearButton = document.getElementById('clear-button');

// Add a click event listener to the clear button
clearButton.addEventListener('click', () => {
  // Get the messages container element
  const messagesContainer = document.querySelector('.messages');

  // Remove all the message elements from the container
  while (messagesContainer.firstChild) {
    messagesContainer.removeChild(messagesContainer.firstChild);
  }
});
