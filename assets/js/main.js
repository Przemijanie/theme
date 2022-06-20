window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM fully loaded');
//------------------------------------------------------------


// Hamburger Menu 
function HamburgerMenu(){
    let menuBtn = document.querySelector('.menu-button');
    let menuCloseBtn = document.querySelector('.menu-close-button');
    let menuList = document.querySelector('.menu-list');

    menuBtn.addEventListener('click', () => {
        //clear
        menuList.classList.remove("display-none");
        //show menu list
        menuList.classList.add("display-flex");
        //show close btn
        menuCloseBtn.classList.add("display-inline-block");
        //hide hamburger btn
        menuBtn.classList.remove("display-flex")
        menuBtn.classList.add("display-none")
    });

    menuCloseBtn.addEventListener('click', () => {
        //clear
        menuList.classList.remove("display-flex");
        //hide menu list
        menuList.classList.add("display-none");
        //hide close btn
        menuCloseBtn.classList.remove("display-inline-block");
        menuCloseBtn.classList.add("display-none")
        menuBtn.classList.add("display-flex")
    });
};

// Back to top scroll button
function BackToTop(){
    let backToTopButton = document.querySelector("#back-to-top-button");
    let backToTopButtonHover = document.querySelector("#back-to-top-button-hover");


    // scroll on click
    backToTopButton.addEventListener("click", () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    });

    // hiding btn
    document.addEventListener('scroll', () => {
        if ((window.scrollY) >= 300){
            backToTopButton.classList.add('btn-move');
            backToTopButtonHover.classList.add('btn-move');
        }else{
            backToTopButton.classList.remove('btn-move');
            backToTopButton.classList.add('btn-return');
            backToTopButtonHover.classList.remove('btn-move');
            backToTopButtonHover.classList.add('btn-return');
        };
    });

    // transparent border button active
    backToTopButton.addEventListener('mouseover', () => {
        backToTopButtonHover.classList.toggle("scale");
    });
    backToTopButton.addEventListener('mouseout', () => {
        backToTopButtonHover.classList.toggle("scale");
    });
};

// Nasza oferta section - show img description on hover
function ShowOfferDescriptionOnHover(){
    let hoverElem = document.querySelectorAll('.drupal-wiersz');
    let ShowElem = document.querySelectorAll('.offer-img-description');

    for (let i = 0; i<5 ; i++){
        hoverElem[i].addEventListener('mouseover', () => {
            ShowElem[i].classList.add('z-index-zero');
        });
        hoverElem[i].addEventListener('mouseout', () => {
            ShowElem[i].classList.remove('z-index-zero');
        });
    };
};

//Drop menu change to fixed under navbar after scroll
function dynamicDropMenu(){
    //on scroll content
    let dropMenu = document.querySelector('[data-drop-menu]');
    let closeButton = document.querySelector('[data-close-button]');

    //on hover content
    let mapContent = document.querySelector('[data-map-content]');
    let bossContent = document.querySelector('[data-boss-content]');
    let contactContent = document.querySelector('[data-contact-content]')

    document.addEventListener('scroll', () => {
        if ((window.scrollY) >= 560){
            // Drop menu + close button
            dropMenu.classList.remove('absolute', 'top-[25%]', 'right-[0]', 'grid-cols-3', 'grid-cols-[100px]', 'w-[100px]');
            dropMenu.classList.add('fixed', 'top-[96px]', 'right-[7%]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]');
            closeButton.classList.remove('invisible');

            //Map content display after hover
            mapContent.classList.remove('right-[100px]', 'top-[20px]');
            mapContent.classList.add('right-[790px]', 'top-[120px]');

            //Boss content display after hover
            bossContent.classList.remove('right-[100px]', 'top-[-70px]');
            bossContent.classList.add('right-[410px]', 'top-[80px]');

            //Contact content display after hover
            contactContent.classList.remove('right-[100px]', 'top-[-20px]');
            contactContent.classList.add('right-[40px]', 'top-[80px]');

            
        }else{
            // Drop menu + close button
            dropMenu.classList.remove('fixed', 'top-[96px]', 'right-[7%]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]');
            dropMenu.classList.add('absolute', 'top-[25%]', 'right-[0]', 'grid-cols-3', 'grid-cols-[100px]', 'w-[100px]');
            closeButton.classList.add('invisible');

            //Map content display after hover
            mapContent.classList.remove('right-[790px]', 'top-[120px]');
            mapContent.classList.add('right-[100px]', 'top-[20px]');

            //Boss content display after hover
            bossContent.classList.remove('right-[410px]', 'top-[80px]');
            bossContent.classList.add('right-[100px]', 'top-[-70px]');

            //Contact content display after hover
            contactContent.classList.remove('right-[40px]', 'top-[80px]');
            contactContent.classList.add('right-[100px]', 'top-[-20px]');
            
            
        };
    });
};


// functions run
HamburgerMenu();
BackToTop();
ShowOfferDescriptionOnHover();
dynamicDropMenu();


//------------------------------------------------------------
});




