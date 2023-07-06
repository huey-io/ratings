const stars = document.querySelectorAll('.rating-button');
const selectedRating = document.querySelector('#selected-rating');
const topSection = document.getElementById('top');
const thankYouSection = document.getElementById('thank-you');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');

    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });

    selectedRating.textContent = rating;
  });
});

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  topSection.classList.add('hidden');
  thankYouSection.classList.remove('hidden');
});
