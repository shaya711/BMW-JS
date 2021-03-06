import blockScroll from './blockScroll.js';
const {disableScroll, enableScroll} = blockScroll;

export default function modal() {
   const designBlockElem = document.querySelector('.design-block');
   const modalElem = document.querySelector('.modal');

   const openModal = () => {
		modalElem.classList.remove('hidden');
		disableScroll();
	};

	const closeModal = () => {
		modalElem.classList.add('hidden');
		enableScroll();
	};

   designBlockElem.addEventListener('click', (event) => {
      if (event.target.matches('.more')) {
         openModal();
      }
   });

   modalElem.addEventListener('click', (event) => {
      if (event.target.matches('.overlay, .modal__close')) {
         closeModal();
      }
   });   
}