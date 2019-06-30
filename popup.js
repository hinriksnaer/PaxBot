import { startBot } from './login.js';

console = chrome.extension.getBackgroundPage().console;
let botOn = false;

document.querySelector('.switch').addEventListener('change', toggleOn);

function toggleOn() {

    botOn = !botOn;
    if (botOn) {
        startBot();
    }

}


