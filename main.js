const slide = document.getElementById('slide');
const slideItens = document.getElementsByClassName('slide-item');

function goTo(direction) {
  if (slideItens.length > 0) {
    let position;

    if (direction === 'left')
      position = slide.scrollLeft - slideItens[0].clientWidth
    else if (direction === 'right')
      position = slide.scrollLeft + slideItens[0].clientWidth

    slide.scrollTo({ top: 0, left: position, behavior: 'smooth' });
  }
}