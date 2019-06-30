
console.log('all new fun')
window.addEventListener("load", init);

function checkPrices(offers) {
    for (let offer of offers) {
        //console.log(offer);
    }
    console.log(offers)
    selectOffer(offers[0]);
}

function selectOffer(offer) {
    offer.click()
}

function init() {
    let checkExist = setInterval(function() {
        let offers = document.querySelectorAll('.offers-table tbody tr');
        if (offers.length > 0) {
            console.log("Exists!");
            clearInterval(checkExist);
            window.removeEventListener("load", init);
            checkPrices(offers);
        } else {
            console.log('does not exist')
        }
     }, 100);
    //let offerContainer = document.querySelector('#offers-list');
    //checkPrices(offerContainer)
}

