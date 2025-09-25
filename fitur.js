// Smooth scroll untuk link navbar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Popup sederhana untuk proyek
document.querySelectorAll('.btn-small').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const projectName = this.parentElement.querySelector('h3').innerText;
    const projectDesc = this.parentElement.querySelector('p').innerText;
    showPopup(projectName, projectDesc);
  });
});

// Fungsi popup
function showPopup(title, desc) {
  // Buat elemen overlay
  const overlay = document.createElement('div');
  overlay.classList.add('popup-overlay');
  
  // Buat isi popup
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <button id="closePopup">Tutup</button>
  `;
  
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Tutup popup
  document.getElementById('closePopup').addEventListener('click', () => {
    overlay.remove();
  });
}
