const container = document.querySelector('.container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upBotton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// top value has to be negavite. To take the last slide we need to subtract one form slideLenght. Then multiply by 100vh for it to be at the right position
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBotton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight;
  // when the up button is pressed
  if (direction === 'up') {
    // change the picture slide by one
    activeSlideIndex++;
    // if the slide is at the bottom (the last slide) and the up button is pressed we want the slide to go to the first slide
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
    // when the down button is pressed
  } else if (direction === 'down') {
    // change the text slide by one
    activeSlideIndex--;
    // if the slide is at the bottom (the last slide) and the up button is pressed we want the slide to go to the first slide
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // transforms the picture slide up by clientHeith
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  // transforms the text slide down by clientHeith
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
