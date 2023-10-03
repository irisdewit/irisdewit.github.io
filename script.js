function toggleMenu(){
    /*in the next line we are targeting the part of code in index html with the name menu-links*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /*open class open, so that when we click the menu or hamburger, it opens the class that we made in the styling */
    menu.classList.toggle("open")
    icon.classList.toggle("open")    
}