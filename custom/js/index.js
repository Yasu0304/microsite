let readBtn = document.querySelector(`.readBtn`)
let cardDetail = document.querySelector(`.cardDetail`);

readBtn.addEventListener("click", e => {
    cardDetail.classList.toggle(`open`);
    let text = document.createElement('p');
    cardDetail.appendChild(text)
    text.textContent = '替換文字節點';
})