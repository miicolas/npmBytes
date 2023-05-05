//Scroll Back
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    const scrollToTop = () => {
        const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    };
    scrollToTop();
}