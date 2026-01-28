// scroll to top function
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

scrollToTopBtn.classList.remove("showBtn")

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.1) { // Show button
    scrollToTopBtn.classList.add("showBtn")
    } 
    
    else { // Hide button
    scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({top: 0, behavior: "smooth"})
}

scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


// play audio file
const gekkoArray = ["audio/GekkoCommend1.mp3", "audio/GekkoCommend2.mp3", "audio/GekkoCommend3.mp3"];

function playGekko() {
    const audioIndex = Math.floor(Math.random() * gekkoArray.length);
    const audio = new Audio(gekkoArray[audioIndex]);
    audio.play();
}