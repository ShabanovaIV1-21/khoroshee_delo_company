document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll("li");
    for (var i = 0; dropdowns.length; i++) {
        dropdowns[i].addEventListener("mouseover", function() {
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.cssText += `
                    display: block;
                    position: absolute;
                    top: ${this.offsetTop}px;
                    right: ${this.offsetWidth}px;
                `;
            }
        });
    
        dropdowns[i].addEventListener("mouseleave", function() {
        let submenu = this.querySelector("ul");
        if (submenu) {
            submenu.style.display = "none";
        }
        });
    }
});

function nav (){
    if (document.documentElement.clientWidth <= 768) {
        let nav = document.querySelector('.nav');
        let items = document.querySelectorAll('.el__desc');
    
        nav.addEventListener("mouseover", function() {
            items.forEach(function(item) {
                item.style.display = "block";
            })
        })
    
        nav.addEventListener("mouseleave", function() {
            items.forEach(function(item) {
                item.style.display = "none";
            })
        })
    }
}

nav();
window.addEventListener('resize', nav);

