$(document).ready(function () {
    $('.slider_slide').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.counter').counterUp();



});
$(document).ready(function () {

    $('.tg1').click(function () {
        $('.tgHide').fadeToggle(1000);
    });

    $('.tg2').click(function () {
        $('.tg2P').fadeToggle(1000);
    });


})


const ul = getSingleClass('.menu .ul');
const mainArea = getSingleClass('.main_area');
// const ulLi = getSingleClass('ul li');
const goTop = getSingleId('goTop');
goTop.style.display = 'flex';
goTop.style.justifyContent = 'center';
goTop.style.alignItems = 'center';
goTop.style.backgroundColor = '#323232';
goTop.style.color = '#ffffff';
goTop.style.cursor = 'pointer';
goTop.style.width = '40px';
goTop.style.height = '40px';
goTop.style.borderRadius = '50%';
goTop.style.textTransform = 'capitalize';
goTop.style.position = 'fixed';
goTop.style.bottom = '80px';
goTop.style.right = '5px';

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        goTop.classList.add('activeTop');
    } else {
        goTop.classList.remove('activeTop');
    }
})



if (window.innerWidth <= 768) {
    const headerBottom = document.querySelector('.header_area .header_bottom');
    headerBottom.classList.add('fixdHBtm');

    const headerBottomContainer = headerBottom.firstElementChild;
    headerBottomContainer.classList.add('fixdHBtmContainer');

    const headerBottomContainerRow = headerBottomContainer.firstElementChild;
    headerBottomContainerRow.classList.add('fixdHBtmContainerRow');

    const headerBottomContainerRowCol1 = headerBottomContainerRow.firstElementChild;
    headerBottomContainerRowCol1.classList.add('fixdHBtmContainerRowCol1');

    const headerBottomContainerRowCol2 = headerBottomContainerRow.lastElementChild;
    headerBottomContainerRowCol2.classList.add('fixdHBtmContainerRowCol2');
    headerBottomContainerRowCol2.style.paddingLeft = '0px';
    headerBottomContainerRowCol2.style.paddingRight = '0px';


}

if (window.innerWidth >= 0) {

    // Create a new element
    var createLi = document.createElement('li');
    var createSpan = document.createElement('span');
    var createI = document.createElement('i');
    // set id cls
    createSpan.id = 'mode';
    createSpan.className = 'mode';
    createI.className = 'fas fa-sun sun';
    createI.id = 'liSun';
    // append
    createSpan.appendChild(createI);
    createLi.appendChild(createSpan);
    // Append the new element to an existing element in the DOM
    ul.appendChild(createLi);

    // event
    const liMode = getSingleClass('.ul li .mode');
    liMode.addEventListener('click', () => {

        const liSun = getSingleId('liSun');

        if (liMode.classList.toggle('mode')) {
            liSun.setAttribute('class', 'fas fa-sun');
            mainArea.classList.remove('dark');
        } else {
            mainArea.classList.add('dark');
            liSun.setAttribute('class', 'fas fa-moon');
        }

    });
}