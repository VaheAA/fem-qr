window.addEventListener('DOMContentLoaded', () => {
  const cardComponent = document.querySelector('.card-wrapper');
  function generateCard() {
    return `        <div class="card">
          <div class="card__head">
            <img
              class="card__qr"
              src="assets/image-qr-code.png"
              alt="QR code image"
            />
          </div>
          <div class="card__body">
            <h1 class="card__title">
              Improve your front-end skills by building projects
            </h1>
            <p class="card__text">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>`;
  }
  cardComponent.innerHTML = generateCard();
});
