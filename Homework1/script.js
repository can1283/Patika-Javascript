let kullaniciAdi = document.querySelector('#myName');
let clock = document.querySelector('#myClock');

const kullaniciAdiGiris = prompt("Lütfen kullanıcı adınızı girin:");

kullaniciAdi.innerHTML = kullaniciAdiGiris;

function showTime() {
    const clockElement = document.getElementById("myClock");

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const now = new Date();

    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}, ${day}`;
    clockElement.textContent = timeString;
}

showTime();
setInterval(showTime, 1000);
