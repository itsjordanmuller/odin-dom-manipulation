const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue h3!";

const blackBorder = document.createElement("div");
blackBorder.style.borderColor = "black";
blackBorder.style.borderStyle = 'solid';
blackBorder.style.backgroundColor = "Pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeader);

blackBorder.appendChild(h1);
blackBorder.appendChild(p1);

container.appendChild(blackBorder)