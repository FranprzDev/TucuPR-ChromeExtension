const labels = Array.from(new Set(Array.from(document.querySelectorAll('a[id^="label-"]')).map(label => label.textContent.trim())));
console.log(labels.includes('WIP'))
console.log(labels)

function findMergeButton() {
    const mergeButton = Array.from(document.querySelectorAll('button'))
        .find(button => button.textContent.includes('Merge pull request'));
    if (mergeButton && labels.includes('WIP')) {
        console.log(mergeButton);
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(findMergeButton, 1000);


function showModal() {
    const modal = document.createElement('div');

    
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = 'black';
    modal.style.color = 'red';
    modal.style.fontSize = '20px';
    modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';
    modal.style.textAlign = 'center';

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    modal.appendChild(closeButton);

    const alert  = document.createElement('h1');
    alert.textContent = '¡Atención!';
    modal.appendChild(alert);

    const tucuMessage = document.createElement('h2');
    tucuMessage.textContent = 'Este PR aún se encuentra en estado WIP';
    modal.appendChild(tucuMessage);


    const image = document.createElement('img');
    image.src = 'https://i.imgur.com/hhCxTZ2.png'; 
    image.alt = 'Warning';
    image.style.width = '300px';
    image.style.height = '300px';
    modal.appendChild(image);



    document.body.appendChild(modal);
}

document.addEventListener('click', function(event) {
    if (event.target && event.target.textContent.includes('Merge pull request')) {
        if (labels.includes('WIP')) {
            showModal();
            event.preventDefault();
        }
    }
});