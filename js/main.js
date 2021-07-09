const messageContent = document.querySelector('.message-content');
const messageHead = document.querySelector('.message-head');
const messageIn = document.querySelector('.message-in');
const messageBtn = document.querySelector('.message-btn');
const messageTail = document.querySelector('.message-tail');
const showMessage = document.querySelector('.show-message');

let addSign = ()=>{
    showMessage.textContent = messageIn.value;
    messageIn.value = '';
    
}




messageBtn.addEventListener('click',addSign)













