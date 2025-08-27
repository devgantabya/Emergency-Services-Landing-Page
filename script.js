const copyButtons = document.getElementsByClassName('copy-button');
const totalCopied = document.getElementById('total-copied');

Array.from(copyButtons).forEach(button => {
    button.addEventListener("click", function(e) {
        totalCopied.innerText = parseInt(totalCopied.innerText) + 1;
        const contactNumber = button.closest('.service-card').querySelector('.contact-number').innerText;
        navigator.clipboard.writeText(contactNumber);
    });
});


const heartIcons = document.getElementsByClassName('heart-icon');
const totalHearts = document.getElementById('total-heart');

Array.from(heartIcons).forEach(icon => {
    icon.addEventListener("click", function(e) {
        totalHearts.innerText = parseInt(totalHearts.innerText) + 1;
    });
});

const callButtons = document.getElementsByClassName('call-button');
const totalCall = document.getElementById('available-coin');

Array.from(callButtons).forEach(button => {
    button.addEventListener("click", function(e) {
        if(parseInt(totalCall.innerText) < 20) {
            alert("Not enough coins");
            return;
        }
        totalCall.innerText = parseInt(totalCall.innerText) - 20;
    });
});



