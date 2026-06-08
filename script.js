const surpriseButton = document.getElementById('surpriseButton');
const messageSection = document.getElementById('messageSection');

surpriseButton.addEventListener('click', () => {
  messageSection.innerHTML = `
    <h2>Untuk Nessa</h2>
    <p>Aku berharap setiap senyumanmu terus menjadi alasan aku berusaha lebih baik. Terima kasih sudah jadi alasan hati ini damai.</p>
    <p>Bersamamu, hal-hal sederhana terasa begitu berarti.</p>
  `;
  surpriseButton.textContent = 'Terima Kasih, Nessa';
  surpriseButton.disabled = true;
  surpriseButton.style.opacity = '0.75';
});
