setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hRotation = 30*h + m/2 + s/120;
    mRotation = 6*m + s/10;
    sRotation = 6*s;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    if (h%2 == 0) {
        document.getElementById("clockContainer").style.background = "url('/img/clock3.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
    }
    else {
        document.getElementById("clockContainer").style.background = "url('/img/clock1.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
    }
}, 1000);
