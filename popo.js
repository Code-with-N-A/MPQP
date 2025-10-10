 const popupOverlay = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('close-popup');

  // Show popup on page load
  window.addEventListener('load', () => {
    popupOverlay.style.display = 'flex';
  });

  // Close popup on X click
  closeBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
  });