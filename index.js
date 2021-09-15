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
    if (millisecondCounts < 59) {
        millisecondCounts++;
        if (millisecondCounts < 10) {
            millisecondCounts = "0" + millisecondCounts;
        }
        millisecond.innerText = millisecondCounts;
    } else {
        millisecondCounts = 0;
    }
    if (millisecondCounts == 59) {

        secondCounts++;
        if (secondCounts < 10) {
            secondCounts = "0" + secondCounts;
        }
        second.innerText = secondCounts;
    }
    // minute-------------------------------------------
    if (secondCounts == 59) {
        secondCounts = 0;
        minuteCounts++;
        if (minuteCounts < 10) {
            minuteCounts = "0" + minuteCounts;
        }
        minute.innerText = minuteCounts;
    }
    // hour-------------------------------------------------
    if (minuteCounts == 59) {
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
        rukon = setInterval(secondChange, 20);
    }
    else if (r === off) {

        clearInterval(rukon)
    }
}

const on = () => {
    myFunc(on)
    document.getElementById('on').setAttribute("disabled", false);
    document.getElementById('off').removeAttribute("disabled", true);
};


const off = () => {
    myFunc(off)
    document.getElementById('on').removeAttribute("disabled", true);

    document.getElementById('off').setAttribute("disabled", false);
}
const reset = () => {

    // location.reload();
    myFunc(off)
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';
    millisecond.innerText = '00';


}