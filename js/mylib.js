export function sleep (time) {
    //source: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep        user : gsamaras
    return new Promise((resolve) => setTimeout(resolve, time));
};

export function fadein(element){
    //source: https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css    user: Bradley William Elko
    var op = 0.01;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.4;
    }, 20);
}
