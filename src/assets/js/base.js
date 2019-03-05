export const isTel = function() {
    if (window.innerWidth) {
        var winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)){
        var winWidth = document.body.clientWidth;
    }
    return (winWidth < 1025 ? true :false)


}