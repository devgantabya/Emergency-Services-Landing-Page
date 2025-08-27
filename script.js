const copyButtons = document.getElementsByClassName('copy-button');
const totalCopied = document.getElementById('total-copied');

for (const button of copyButtons) {
    button.addEventListener("click", function (e) {
        const contactNumber = button.closest('.service-card').querySelector('.contact-number').innerText;
        alert("Copied " + contactNumber);
        totalCopied.innerText = parseInt(totalCopied.innerText) + 1;
        navigator.clipboard.writeText(contactNumber);
    });
}


const heartIcons = document.getElementsByClassName('heart-icon');
const totalHearts = document.getElementById('total-heart');

for (const icon of heartIcons) {
    icon.addEventListener("click", function (e) {
        totalHearts.innerText = parseInt(totalHearts.innerText) + 1;
    });
}

const callButtons = document.getElementsByClassName('call-button');
const totalCall = document.getElementById('available-coin');

for (const button of callButtons) {
    button.addEventListener("click", function () {
        if (parseInt(totalCall.innerText) < 20) {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
            return;
        }
        const serviceName = button.closest('.service-card').querySelector('.service-title').innerText;
        const serviceNumber = button.closest('.service-card').querySelector('.contact-number').innerText;

        alert("📞 Calling " + serviceName + " : " + serviceNumber);
        totalCall.innerText = parseInt(totalCall.innerText) - 20;

        document.getElementById('call-history-list').innerHTML += `<div class="bg-gray-100 overflow-y-auto rounded-lg p-3 space-y-3 flex justify-between items-center my-2">
        <div>
        <h2 class="font-semibold text-gray-800">${serviceName}</h2>
        <p>${serviceNumber}</p>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>
        </div>`;
    });
}

document.getElementById('clear-call-history').addEventListener("click", function () {
    document.getElementById('call-history-list').innerHTML = '';
    document.getElementById('call-history-list').style = '0';
});
