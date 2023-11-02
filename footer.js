
const footer = document.getElementById('myFooter');
const iframe = document.getElementById('myIframe');

footer.addEventListener('mouseover', () => {
    iframe.style.height = '150px';
    iframe.style.transition = 'height 1s';
});

footer.addEventListener('mouseout', () => {
    iframe.style.height = ''; // Revert to the default height
});
