let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav .nav-child a');
console.log(navLinks,sections);

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if(top >= offset && top < offset + height && id) {

            navLinks.forEach(links => {
                let linkActive = document.querySelector(`header nav a[href*='${id}']`)
                if(linkActive) {
                    links.classList.remove('active')
                    linkActive.classList.add('active')
                }
                    
            })
        }
    })
}