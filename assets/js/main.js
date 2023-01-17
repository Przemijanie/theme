/*global drupalSettings:true*/
// declare var drupalSettings: any;
window.addEventListener('DOMContentLoaded', (event) => {
  //console.log('DOM fully loaded');
  //------------------------------------------------------------

  // Hamburger Menu
  function HamburgerMenu() {
    let menuOpenBtn = document.querySelector('[data-menu-open-button]')
    let menuCloseBtn = document.querySelector('[data-menu-close-button]')
    let menuList = document.querySelector('[data-menu-list]')

    menuOpenBtn.addEventListener('click', () => {
      menuOpenBtn.classList.add('invisible')
      menuCloseBtn.classList.replace('invisible', 'visible')

      menuList.classList.add('is-active')
      menuList.classList.remove('translate-y-[0]')
    })

    menuCloseBtn.addEventListener('click', () => {
      menuCloseBtn.classList.replace('visible', 'invisible')
      menuOpenBtn.classList.replace('invisible', 'visible')

      menuList.classList.remove('is-active')
      menuList.classList.add('transition-on')
    })
  }

  // Back to top scroll button
  function BackToTop() {
    let backToTopButton = document.querySelector('[data-back-to-top-button]')
    let backToTopButtonHover = document.querySelector(
      '[data-back-to-top-button-hover]',
    )

    // scroll on click
    backToTopButton.addEventListener('click', () => {
      document.body.scrollIntoView({
        behavior: 'smooth',
      })
    })
    // hiding btn
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 300 && document.documentElement.scrollHeight - 50 >= window.scrollY + window.innerHeight) {
        backToTopButton.classList.add("btn-move");
        backToTopButtonHover.classList.add("btn-move");
      } else {
        backToTopButton.classList.replace("btn-move", "bottom-0");
        backToTopButtonHover.classList.replace("btn-move", "bottom-0");
      }
    })
    // transparent border around button active
    backToTopButton.addEventListener('mouseover', () => {
      backToTopButtonHover.classList.toggle('scale-[1.3]')
    })
    backToTopButton.addEventListener('mouseout', () => {
      backToTopButtonHover.classList.toggle('scale-[1.3]')
    })
  }

  // Nasza oferta section - show img description on hover
  function ShowOfferDescriptionOnHover() {
    let hoverElem = document.querySelectorAll('.drupal-wiersz-twig')
    let ShowElem = document.querySelectorAll('.offer-body')

    for (let i = 0; i < 5; i++) {
      hoverElem[i].addEventListener('mouseover', () => {
        ShowElem[i].classList.add('z-[0]')
      })
      hoverElem[i].addEventListener('mouseout', () => {
        ShowElem[i].classList.remove('z-[0]')
      })
    }
  }

  //Drop menu widget change to fixed under navbar after scroll
  function DynamicDropMenu() {
    //on scroll content
    let swiperContainer = document.querySelector('#swiper-banner-block-1')
    let dropMenu = document.querySelector('[data-drop-menu]')
    let closeMenuBtn = document.querySelector('[data-close-button]')
    let openMenuBtn = document.querySelector('[data-btn-open-drop-menu]')
    let hoverTitleBtn = document.querySelector('[data-hover-btn-title]')
    let isCloseClicked = true

    //on hover content
    let mapContent = document.querySelector('[data-map-content]')
    let bossContent = document.querySelector('[data-boss-content]')
    let contactContent = document.querySelector('[data-contact-content]')

    function DropMenuReturnToHomePos() {
      //Drop menu widget + close button (return to swiper)
      dropMenu.classList.remove(
        'fixed',
        'top-[-4px]',
        'xl:mx-auto',
        'xl:left-0',
        'xl:right-0',
        'xl:w-[1165px]',
        'lg:mx-auto',
        'lg:left-0',
        'lg:right-0',
        'lg:w-[920px]',
        'grid-cols-4',
        'grid-cols-[380px_380px_380px_40px]',
        'slide-down-drop-menu',
        'xl:grid-cols-[380px_380px_380px_40px]',
        'lg:grid-cols-[300px_300px_300px_40px]',
      )
      dropMenu.classList.add(
        'absolute',
        'top-[50%]',
        'translate-y-[-40%]',
        'right-0',
        'grid-cols-1',
        'grid-cols-[100px]',
        'w-[100px]',
      )
      closeMenuBtn.classList.add('invisible')

      //Map content display after hover
      mapContent.classList.remove(
        'xl:right-[785px]',
        'lg:right-[620px]',
        'top-[120px]',
      )
      mapContent.classList.add('right-[100px]', 'top-[20px]')

      //Boss content display after hover
      bossContent.classList.remove(
        'xl:right-[405px]',
        'lg:right-[320px]',
        'top-[80px]',
      )
      bossContent.classList.add('right-[100px]', 'top-[-70px]')

      //Contact content display after hover
      contactContent.classList.remove(
        'xl:right-[25px]',
        'lg:right-[20px]',
        'top-[80px]',
      )
      contactContent.classList.add('right-[100px]', 'top-[-20px]')

      //back to visible menu widget on swiper
      dropMenu.classList.remove('invisible')

      //button title hide when drop menu is on the right side
      hoverTitleBtn.classList.remove('absolute')

      //status marker
      // isCloseClicked = false
    }

    function ShowDropMenuFixedHidden() {
      // Drop menu widget + close button
      dropMenu.classList.remove(
        'absolute',
        'top-[50%]',
        'translate-y-[-40%]',
        'right-0',
        'grid-cols-3',
        'grid-cols-[100px]',
        'w-[100px]',
      )
      dropMenu.classList.add(
        'fixed',
        'top-[-4px]',
        'xl:mx-auto',
        'xl:left-0',
        'xl:right-0',
        'xl:w-[1165px]',
        'lg:mx-auto',
        'lg:left-0',
        'lg:right-0',
        'lg:w-[920px]',
        'grid-cols-4',
        'grid-cols-[380px_380px_380px_40px]',
        'xl:grid-cols-[380px_380px_380px_40px]',
        'lg:grid-cols-[300px_300px_300px_40px]',
      )
      closeMenuBtn.classList.remove('invisible')

      //Map content display after hover
      mapContent.classList.remove('right-[100px]', 'top-[20px]')
      mapContent.classList.add(
        'xl:right-[785px]',
        'lg:right-[620px]',
        'top-[120px]',
      )

      //Boss content display after hover
      bossContent.classList.remove('right-[100px]', 'top-[-70px]')
      bossContent.classList.add(
        'xl:right-[405px]',
        'lg:right-[320px]',
        'top-[80px]',
      )

      //Contact content display after hover
      contactContent.classList.remove('right-[100px]', 'top-[-20px]')
      contactContent.classList.add(
        'xl:right-[25px]',
        'lg:right-[20px]',
        'top-[80px]',
      )

      //button title hide when drop menu is on the right side
      hoverTitleBtn.classList.add('absolute')
    }

    function ShowDropMenuFixedSlideDown() {
      setTimeout(() => {
        dropMenu.classList.add('slide-down-drop-menu')
      }, 100)
    }

    function CloseDropMenu() {
      closeMenuBtn.addEventListener('click', () => {
        dropMenu.classList.remove('slide-down-drop-menu')
        openMenuBtn.classList.remove('invisible')
        isCloseClicked = true
      })
    }

    function OpenDropMenu() {
      openMenuBtn.classList.add('visible')

      openMenuBtn.addEventListener('click', () => {
        dropMenu.classList.add('slide-down-drop-menu')
        dropMenu.classList.add('visible')
        openMenuBtn.classList.add('invisible')

        isCloseClicked = false
      })
    }

    function showOpenMenuButton(){
      openMenuBtn.classList.remove('invisible');
      openMenuBtn.classList.add('visible');
    };

    function hideOpenMenuButton() {
      openMenuBtn.classList.remove('visible')
      openMenuBtn.classList.add('invisible')
    }

    document.addEventListener('scroll', () => {
      //1st scroll: moved from right side -> hidden under navbar
      if (window.scrollY > swiperContainer.offsetTop + swiperContainer.clientHeight - 16) {
        showOpenMenuButton()
        ShowDropMenuFixedHidden()
        //secured from continuously sliding down after scrolling
        if (isCloseClicked === false) {
          ShowDropMenuFixedHidden()
          ShowDropMenuFixedSlideDown()
          CloseDropMenu()
          OpenDropMenu()
          // console.log('if closeclicked false');

          //display menu when closed/hidden
        } else if (isCloseClicked === true) {
          ShowDropMenuFixedHidden()
          CloseDropMenu()
          OpenDropMenu()
          // console.log('if closeclicked true');
        }

        //Back to right side position
      } else {
        hideOpenMenuButton()
        DropMenuReturnToHomePos()
        // console.log('rth');
      }

      //hiding drop menu widget when scrolled on footer
      if (window.scrollY >= document.querySelector('.layout-container').offsetHeight - 96) {
        DropMenuReturnToHomePos()
        if (isCloseClicked === false) {
          hideOpenMenuButton()
          // openMenuBtn.click()
        }
      }else{
        ShowDropMenuFixedHidden()
        showOpenMenuButton()
      }
    })
  }

  // Mobile header menu
  function HeaderOnMobile() {
    //header views.icons
    let headerMapIcon = document.querySelector('[data-header-map]')
    let headerBossIcon = document.querySelector('[data-header-boss]')
    let headerContactIcon = document.querySelector('[data-header-contact]')

    //hidden content
    let onClickMapContent = document.querySelector('[data-map-mobile-content]')
    let onClickBossContent = document.querySelector(
      '[data-boss-mobile-content]',
    )
    let onClickContactContent = document.querySelector(
      '[data-contact-mobile-content]',
    )

    headerMapIcon.addEventListener('click', () => {
      //cleaning other content
      onClickBossContent.classList.add('hidden')
      onClickContactContent.classList.add('hidden')
      onClickContactContent.classList.remove('flex')
      onClickBossContent.classList.remove('flex')
      //display selected content
      onClickMapContent.classList.toggle('hidden')
    })

    // another method is to use "toggle" for hidden class (as above),
    // but then we have an issue/warrning in twig file with hidden and flex used simultaneously:
    // 'hidden' applies the same CSS properties as 'flex'
    headerBossIcon.addEventListener('click', () => {
      onClickMapContent.classList.add('hidden')
      onClickContactContent.classList.add('hidden')
      onClickContactContent.classList.remove('flex')

      if (onClickBossContent.classList.contains('flex')) {
        onClickBossContent.classList.replace('flex', 'hidden')
      } else {
        onClickBossContent.classList.replace('hidden', 'flex')
      }
    })

    headerContactIcon.addEventListener('click', () => {
      onClickMapContent.classList.add('hidden')
      onClickBossContent.classList.add('hidden')
      onClickBossContent.classList.remove('flex')

      if (onClickContactContent.classList.contains('flex')) {
        onClickContactContent.classList.replace('flex', 'hidden')
      } else {
        onClickContactContent.classList.replace('hidden', 'flex')
      }
    })
  }

  // functions run
  HamburgerMenu()
  BackToTop()
  HeaderOnMobile()

  /*eslint no-undef: "error"*/

  if (drupalSettings.path.isFront) {
    DynamicDropMenu()
    // ShowOfferDescriptionOnHover();
  }

  //------------------------------------------------------------
})
