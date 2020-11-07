function showDropdown () {    
    var dropdown = document.getElementById('dropdown-menu')
    
    dropdown.classList.toggle('active')
}

function showSlide () {
    var slide = document.getElementById('slide-menu')
    var slideitem = document.querySelectorAll('.sidelink')

    slide.classList.toggle('active')

    slideitem.forEach(element => {
        element.classList.toggle('active')
    });    
    
}

