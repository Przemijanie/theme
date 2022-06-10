window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM fully loaded and parsed');
//------------------------------------------------------------



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
ShowOfferDescriptionOnHover();



//------------------------------------------------------------
});




