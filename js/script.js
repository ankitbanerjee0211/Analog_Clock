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
    if (h%4 == 0) {
        document.getElementById("clockContainer").style.background = "url('img/clock5.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
        document.getElementById("hour").style.left = "50.40%";
        document.getElementById("hour").style.top = "31%";
        document.getElementById("hour").style.height = "18%";
        document.getElementById("hour").style.backgroundColor = "#A1A1A1";


        document.getElementById("minute").style.left = "50.80%";
        document.getElementById("minute").style.top = "26%";
        document.getElementById("minute").style.height = "23%";
        document.getElementById("minute").style.backgroundColor = "#696960";



        document.getElementById("second").style.left = "51.15%";
        document.getElementById("second").style.top = "17%";
        document.getElementById("second").style.height = "32%";
        document.getElementById("second").style.backgroundColor = "#10110D";

    }
    else if (h%4 == 1) {
        document.getElementById("clockContainer").style.background = "url('img/clock1.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
        document.getElementById("clockContainer").style.filter = "invert(0)";
    }
    else if (h%4 == 2) {
        document.getElementById("clockContainer").style.background = "url('img/clock4.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
    }
    else {
        document.getElementById("clockContainer").style.background = "url('img/clock3.png') no-repeat";
        document.getElementById("clockContainer").style.backgroundSize = "100%";
    }
}, 1000);
