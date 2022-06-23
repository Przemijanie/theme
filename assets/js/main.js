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
function DynamicDropMenu(){
    //on scroll content
    let dropMenu = document.querySelector('[data-drop-menu]');
    let closeMenuBtn = document.querySelector('[data-close-button]');
    let openMenuBtn = document.querySelector('[data-btn-open-drop-menu]');

    //on hover content
    let mapContent = document.querySelector('[data-map-content]');
    let bossContent = document.querySelector('[data-boss-content]');
    let contactContent = document.querySelector('[data-contact-content]');


    function DropMenuReturnToHomePos(){
        //Drop menu + close button (return to swiper)
        dropMenu.classList.remove('fixed', 'top-[-4px]', 'xl:mx-auto', 'xl:left-0', 'xl:right-0', 'xl:w-[1165px]', 'lg:mx-auto', 'lg:left-0', 'lg:right-0', 'lg:w-[920px]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]', 'transition-drop-menu', 'slide-down-drop-menu', 'xl:grid-cols-[380px_380px_380px_40px]', 'lg:grid-cols-[300px_300px_300px_40px]');
        dropMenu.classList.add('absolute', 'top-[25%]', 'right-0', 'grid-cols-1', 'grid-cols-[100px]', 'w-[100px]');
        closeMenuBtn.classList.add('invisible');

        //Map content display after hover
        mapContent.classList.remove('xl:right-[785px]', 'lg:right-[530px]', 'top-[120px]');
        mapContent.classList.add('right-[100px]', 'top-[20px]');

        //Boss content display after hover
        bossContent.classList.remove('xl:right-[405px]', 'lg:right-[230px]', 'top-[80px]');
        bossContent.classList.add('right-[100px]', 'top-[-70px]');

        //Contact content display after hover
        contactContent.classList.remove('xl:right-[25px]', 'lg:right-[20px]', 'top-[80px]');
        contactContent.classList.add('right-[100px]', 'top-[-20px]');

        //back to visible menu on swiper
        dropMenu.classList.remove('invisible');

        closeClicked = false;
        console.log('closeclicked false from rth');
    };

    function ShowDropMenuFixedHidden(){
        // Drop menu + close button
        dropMenu.classList.remove('absolute', 'top-[25%]', 'right-0', 'grid-cols-3', 'grid-cols-[100px]', 'w-[100px]');
        dropMenu.classList.add('fixed', 'top-[-4px]', 'xl:mx-auto', 'xl:left-0', 'xl:right-0', 'xl:w-[1165px]', 'lg:mx-auto', 'lg:left-0', 'lg:right-0', 'lg:w-[920px]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]', 'xl:grid-cols-[380px_380px_380px_40px]', 'lg:grid-cols-[300px_300px_300px_40px]');
        // setTimeout(() => {
        //     dropMenu.classList.add('animation', 'transition-drop-menu');
        // },1000);
        closeMenuBtn.classList.remove('invisible');

        //Map content display after hover
        mapContent.classList.remove('right-[100px]', 'top-[20px]');
        mapContent.classList.add('xl:right-[785px]', 'lg:right-[530px]', 'top-[120px]');

        //Boss content display after hover
        bossContent.classList.remove('right-[100px]', 'top-[-70px]');
        bossContent.classList.add('xl:right-[405px]', 'lg:right-[230px]', 'top-[80px]');

        //Contact content display after hover
        contactContent.classList.remove('right-[100px]', 'top-[-20px]');
        contactContent.classList.add('xl:right-[25px]', 'lg:right-[20px]', 'top-[80px]');

        // dropMenu.classList.add('hidden');
    };

    let closeClicked = false;

    function ShowDropMenuFixedSlideDown(){
        setTimeout(() =>{
            // dropMenu.classList.remove('hidden');
            dropMenu.classList.add('transition-drop-menu');
            dropMenu.classList.add('slide-down-drop-menu');
        },100);
    };

    function CloseDropMenu(){
        //Close menu
        closeMenuBtn.addEventListener('click', () => {
            dropMenu.classList.remove('slide-down-drop-menu');
            //show open menu button
            openMenuBtn.classList.remove('invisible');
            closeClicked = true;  
        });
    };

    function OpenDropMenu(){
        openMenuBtn.classList.add('visible');

        //Open menu button - show menu
        openMenuBtn.addEventListener('click', () => {
            dropMenu.classList.add('slide-down-drop-menu');
            dropMenu.classList.add('visible');
            openMenuBtn.classList.add('invisible');

            closeClicked = false;
            console.log('closeclicked false from close btn');
        });



        //Open menu button - hide itself, teraz zrobione warunkami w wywołaniu addEventListener scroll
        // if (dropMenu.classList.contains('fixed') && !dropMenu.classList.contains('invisible')){
        //     openMenuBtn.classList.remove('visible');
        //     openMenuBtn.classList.add('invisible');
        // };
    };

    function showOpenMenuButton(){
        openMenuBtn.classList.remove('invisible');
        openMenuBtn.classList.add('visible');
    };
    function hideOpenMenuButton(){
        openMenuBtn.classList.remove('visible');
        openMenuBtn.classList.add('invisible');
    };

    document.addEventListener('scroll', () => {
        //1st scroll: moved from right side -> hidden under navbar
        if ((window.scrollY > 550) && (window.scrollY < 750)) {
            hideOpenMenuButton();
            ShowDropMenuFixedHidden();
            console.log('1st scroll');
            
        //1st slide down drop-menu
        }else if ((window.scrollY > 750)){
            //secured from continuously sliding down after scrolling
            if (closeClicked === false){
                ShowDropMenuFixedHidden();
                ShowDropMenuFixedSlideDown();
                CloseDropMenu();
                OpenDropMenu();
                console.log('if closeclicked false');

            //display menu when closed/hidden
            }else if (closeClicked === true){
                ShowDropMenuFixedHidden();
                OpenDropMenu();
                console.log('if closeclicked true');
            };

        //Back to right side position
        }else{
            DropMenuReturnToHomePos();
            console.log('rth');
        };
    });
};


// functions run
HamburgerMenu();
BackToTop();
ShowOfferDescriptionOnHover();
DynamicDropMenu();


//------------------------------------------------------------
});

//backup
// //Drop menu change to fixed under navbar after scroll
// function DynamicDropMenu(){
//     //on scroll content
//     let dropMenu = document.querySelector('[data-drop-menu]');
//     let closeMenuBtn = document.querySelector('[data-close-button]');
//     let openMenuBtn = document.querySelector('[data-btn-open-drop-menu]');

//     //on hover content
//     let mapContent = document.querySelector('[data-map-content]');
//     let bossContent = document.querySelector('[data-boss-content]');
//     let contactContent = document.querySelector('[data-contact-content]');


//     function DropMenuBackToHomePos(){
//         //Drop menu + close button (return to swiper)
//         dropMenu.classList.remove('fixed', 'top-[96px]', 'right-[7%]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]');
//         dropMenu.classList.add('absolute', 'top-[25%]', 'right-[0]', 'grid-cols-3', 'grid-cols-[100px]', 'w-[100px]');
//         closeMenuBtn.classList.add('invisible');

//         //Map content display after hover
//         mapContent.classList.remove('right-[790px]', 'top-[120px]');
//         mapContent.classList.add('right-[100px]', 'top-[20px]');

//         //Boss content display after hover
//         bossContent.classList.remove('right-[410px]', 'top-[80px]');
//         bossContent.classList.add('right-[100px]', 'top-[-70px]');

//         //Contact content display after hover
//         contactContent.classList.remove('right-[40px]', 'top-[80px]');
//         contactContent.classList.add('right-[100px]', 'top-[-20px]');

//         //back to visible menu on swiper
//         dropMenu.classList.remove('invisible');
//     };

//     function ShowDropMenuFixed(){
//         // Drop menu + close button
//         dropMenu.classList.remove('absolute', 'top-[25%]', 'right-[0]', 'grid-cols-3', 'grid-cols-[100px]', 'w-[100px]');
//         dropMenu.classList.add('invisible', 'fixed', 'top-[-100px]', 'right-[7%]', 'grid-cols-4', 'grid-cols-[380px_380px_380px_40px]');
//         setTimeout(() => {
//             dropMenu.classList.add('animation');
//         },1000);
//         closeMenuBtn.classList.remove('invisible');

//         //Map content display after hover
//         mapContent.classList.remove('right-[100px]', 'top-[20px]');
//         mapContent.classList.add('right-[790px]', 'top-[120px]');

//         //Boss content display after hover
//         bossContent.classList.remove('right-[100px]', 'top-[-70px]');
//         bossContent.classList.add('right-[410px]', 'top-[80px]');

//         //Contact content display after hover
//         contactContent.classList.remove('right-[100px]', 'top-[-20px]');
//         contactContent.classList.add('right-[40px]', 'top-[80px]');
//     };

//     function OpenCloseDropMenu(){
//         //Close menu button - close menu
//         closeMenuBtn.addEventListener('click', () => {
//             dropMenu.classList.add('invisible');
//             //show open menu button
//             openMenuBtn.classList.remove('invisible');
//         });

//         //Open menu button - show menu
//         openMenuBtn.addEventListener('click', () => {
//             dropMenu.classList.remove('invisible');
//             dropMenu.classList.add('visible');
//             openMenuBtn.classList.add('invisible');
//         });

//         //Open menu button - hide itself
//         if (dropMenu.classList.contains('fixed') && !dropMenu.classList.contains('invisible')){
//             openMenuBtn.classList.remove('visible');
//             openMenuBtn.classList.add('invisible');
//         };
//     };

//     document.addEventListener('scroll', () => {
//         if ((window.scrollY) > 560){
//             ShowDropMenuFixed();
//             OpenCloseDropMenu();

//         }else if ((window.scrollY > 700)){
            
//         }else{
//             DropMenuBackToHomePos();
//         };
//     });
// };


