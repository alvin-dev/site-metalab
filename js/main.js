// glider ----------------
window.addEventListener('load', function () {
  window._ = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    dots: '#dots',
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          scrollLock: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: true,
          scrollLock: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          scrollLock: true
        }
      }
    ]
  })
})

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  colorNavOnScroll()
  showButtonToTop()
  fixedMenuOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha alvo

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base passou da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function colorNavOnScroll() {
  if (scrollY > 0) {
    navigationn.classList.add('scroll')
  } else {
    navigationn.classList.remove('scroll')
  }
}

function showButtonToTop() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/*========= Scroll Reveal =========*/
function fixedMenuOnScroll() {
  if (scrollY > 75) {
    navigationn.classList.add('fixed-menu')
  } else navigationn.classList.remove('fixed-menu')
}

/*========= Scroll Reveal =========*/

ScrollReveal({
  reset: true,
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content
  `)

// function submit form

function submitFormMensage() {
  const txtMensagem = document.querySelector('#txtSend')
  txtMensagem.classList.add('show')
}

submitFormMensage()
