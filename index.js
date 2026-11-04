const themeBtn = document.getElementById('themeBtn');
    const themeIcon = themeBtn.querySelector('i');
    
    
    const savedTheme = localStorage.getItem('profile-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('profile-theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }

    
    const shareBtn = document.getElementById('shareBtn');
    const toast = document.getElementById('toast');

    shareBtn.addEventListener('click', () => {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl).then(() => {
        showToast();
      }).catch(() => {
        
        showToast('Gagal menyalin tautan');
      });
    });

    function showToast() {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach(card => {
      const linkId = card.getAttribute('data-link-id');
      const counterSpan = document.getElementById(`count-${linkId}`);
      
      
      let storedClicks = parseInt(localStorage.getItem(`clicks_${linkId}`)) || 0;
      if (counterSpan) {
        counterSpan.innerText = `${storedClicks} klik`;
      }

      
      card.addEventListener('click', () => {
        storedClicks++;
        localStorage.setItem(`clicks_${linkId}`, storedClicks);
        if (counterSpan) {
          counterSpan.innerText = `${storedClicks} klik`;
        }
      });
    });