const slide = document.getElementById('slide');
const slideItens = document.getElementsByClassName('slide-item');

function goTo(direction) {
  let position;

  if (direction === 'left')
    position = slide.scrollLeft - slideItens[0].clientHeight
  else if (direction === 'right')
    position = slide.scrollLeft + slideItens[0].clientHeight

  slide.scrollTo({ top: 0, left: position, behavior: 'smooth' });
}