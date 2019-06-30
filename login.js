
function init() {
    chrome.tabs.create({
        url: 'https://paxful.com/buy-bitcoin/amazon-gift-card'
    }, saleTabOpened);

}

function saleTabOpened(newTab){
    workingTabId = newTab.id;
    console.log('new tab opened');
    console.log('done');
}

function pageLoaded() {
    alert('listener removed');
    chrome.tabs.onUpdated.removeListener(listener);
    let container = document.querySelectorAll('body');
    console.log(container);
}

function listener(tabId, changeInfo, tab) {
    // make sure the status is 'complete' and it's the right tab
    if (changeInfo.status == 'complete') {
        //chrome.tabs.executeScript({code: pageLoaded});
    }
}

chrome.tabs.onUpdated.addListener(listener);

export function startBot() {
    init();
};