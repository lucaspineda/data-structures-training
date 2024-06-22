

const toggleMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const isMobileMenuHidden = mobileMenu.classList.contains('hidden')
    isMobileMenuHidden ? mobileMenu.classList.remove('hidden') : mobileMenu.classList.add('hidden')   
}