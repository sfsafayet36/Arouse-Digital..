function menuBar() {
    let ullist = document.getElementById("ullist");

    let menubar = document.getElementById("menubar");

    let crossbar = document.getElementById("crossbar");
    menubar.addEventListener("click", function () {
        ullist.classList.add("navtoggle");
    });
    crossbar.addEventListener("click", function () {
        ullist.classList.remove("navtoggle");
    });
}
menuBar()
function servicesHover() {
    let clicker = document.getElementById("service-click");
    let lists = document.getElementById("services-list");
    clicker.addEventListener("mouseover", function () {
        lists.style.opacity = "1";
        lists.style.visibility = "visible";
    });

    clicker.addEventListener("mouseout", function () {
        lists.style.opacity = "0";
        lists.style.visibility = "hidden";
    });
}
servicesHover();

var typed = new Typed("#typed", {
    strings: ["We Love Arouse.", "We are 24/7 for you."],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100
});
