// all html and css will use this one js file to use responsive bar 

// the event is clicked then change the css property
function showSideBar () {
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'flex'
}
// the event is clicked then change the css property
function hideSideBar() {
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'none'
}

// the payment popup
document.addEventListener('DOMContentLoaded', function () {
    const buySellSelect = document.getElementById('buy_sell');
    const buyBox = document.getElementById('buy_box');
    const sellBox = document.getElementById('sell_box');

    buySellSelect.addEventListener('change', function () {
        const selectedOption = buySellSelect.value;

         // Hide both boxes by default
         buyBox.style.display = 'none';
         sellBox.style.display = 'none';
 
         // Show the selected box
         if (selectedOption === 'buy') {
             buyBox.style.display = 'flex';
         } else if (selectedOption === 'sell') {
             sellBox.style.display = 'flex';
             document.getElementById('bn1').style.display = 'flex';
         }
    });
});
