const toggleBtn = document.getElementById('dark');

toggleBtn.addEventListener('click', () => {
  
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '&#9728;&#65039'; 
  } else {
    toggleBtn.innerHTML = '&#127769'; 
  }
});