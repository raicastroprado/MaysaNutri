/* codigo para abrir e fechar o menu quando clicar nos icones : hamburguer e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    }) //adiciona um evento, no caso um click
}

/* quando clicar me um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

/*mudar o header da pagina ao usar o scroll*/
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(this.window.scrollY >= navHeight){
        header.classList.add('scroll')

    } else {
        header.classList.remove('scroll')

    }
})