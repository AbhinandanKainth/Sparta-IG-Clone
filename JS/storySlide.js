//story photo slides function
const container = document.querySelector(".story-1");
const prevBtn = document.querySelector(".slide_prev_button"); 
const nextBtn = document.querySelector(".slide_next_button");

(function addEvent(){
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction){
  const selectedBtn = (direction === 1) ? 'slide_prev_button' : 'slide_next_button';
  container.style.transitionDuration = '90ms';
  container.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  (selectedBtn === 'slide_prev_button') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
}