const millisecond = document.getElementById("millisecond");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

let millisecondCounts = 0;
let secondCounts = 0;
let minuteCounts = 0;
let hourCounts = 0;

function secondChange() {
    // millisecond-------------------------------------------
    if (millisecondCounts < 60) {
        if (millisecondCounts === 60) {
            millisecond.innerText = "00";
        }
        millisecondCounts++;
        if (millisecondCounts < 10) {
            millisecondCounts = "0" + millisecondCounts;
        }
        millisecond.innerText = millisecondCounts;
    } else {
        millisecondCounts = 0;
    }
    // second-------------------------------------------
    if (millisecondCounts === 60) {
        secondCounts++;
        if (secondCounts < 10) {
            secondCounts = "0" + secondCounts;
        }
        if (secondCounts === 60) {
            second.innerText = "00";
        } else {
            second.innerText = secondCounts;
        }
    }
    // minute-------------------------------------------
    if (secondCounts === 60) {
        secondCounts = 0;
        minuteCounts++;
        if (minuteCounts < 10) {
            minuteCounts = "0" + minuteCounts;
        }
        if (minuteCounts === 60) {
            minute.innerText = "00";
        } else {
            minute.innerText = minuteCounts;
        }
    }
    // hour-------------------------------------------------
    if (minuteCounts === 60) {
        minuteCounts = 0;
        hourCounts++;
        if (hourCounts < 10) {
            hourCounts = "0" + hourCounts;
        }
        hour.innerText = hourCounts;
    }
}
let rukon;
const myFunc = (r) => {
    if (r === on) {
        rukon = setInterval(secondChange, 16.666666666666668);
    }
    else if (r === off) {
        clearInterval(rukon)
    }
}
const on = () => {
    myFunc(on)
    animation();
    document.getElementById('on').setAttribute("disabled", false);
    document.getElementById('off').removeAttribute("disabled", true);
};
const off = () => {
    myFunc(off);
    document.getElementById('on').removeAttribute("disabled", true);
    document.getElementById('off').setAttribute("disabled", false);
}
const reset = () => {
    location.reload();
}

const animation = () => {
    setInterval(() => {
        if (parseInt(second.innerText) % 2 === 0) {
            const colors = document.getElementsByClassName('colon');
            for (const color of colors) {
                color.style.color = 'red';
            }
        } else {
            const colors = document.getElementsByClassName('colon');
            for (const color of colors) {
                color.style.color = 'yellow';
            }
        }
    })
}