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
            // backToTopButtonHover.classList.remove('hidden');
            backToTopButtonHover.classList.add('btn-move');
        }else{
            backToTopButton.classList.remove('btn-move');
            backToTopButton.classList.add('btn-return');
            // backToTopButtonHover.classList.add('hidden');
            backToTopButtonHover.classList.remove('btn-move');
            backToTopButtonHover.classList.add('btn-return');
        };
    });

    // transparent border button active
    backToTopButton.addEventListener('mouseover', () => {
        backToTopButtonHover.classList.toggle("scale");
        console.log('test mouseover');
    });
    backToTopButton.addEventListener('mouseout', () => {
        backToTopButtonHover.classList.toggle("scale");
        console.log('test mouseout');
    });
};

// Nasza oferta section - show img description on hover
function ShowOfferDescriptionOnHover(){
    let hoverElem = document.querySelector('.offer-title');
    let hoverShowElem = document.querySelector('.testFormat');

    hoverElem.addEventListener('mouseover', () => {
        hoverShowElem.classList.add('show');
        hoverElem.classList.add('hide');
    });

    hoverElem.addEventListener('mouseout', () => {
        hoverShowElem.classList.remove('show');
        hoverElem.classList.remove('hide');
    });
};


// functions run
HamburgerMenu();
BackToTop()
// ShowOfferDescriptionOnHover();



//------------------------------------------------------------
});




