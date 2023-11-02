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