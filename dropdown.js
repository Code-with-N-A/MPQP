    // Dropdown toggle
    document.querySelectorAll('.dropbtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        document.querySelectorAll('.dropdown-content').forEach(c => {
          if (c !== content) c.style.display = 'none';
        });
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });

    // Close dropdown on outside click
    window.addEventListener('click', e => {
      if (!e.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(c => c.style.display = 'none');
      }
    });

    // Update dropbtn text on selection
    document.querySelectorAll('.dropdown-content button').forEach(option => {
      option.addEventListener('click', () => {
        const btn = option.closest('.dropdown').querySelector('.dropbtn');
        btn.textContent = btn.textContent.split(':')[0] + ': ' + option.textContent + ' ▼';
        option.closest('.dropdown-content').style.display = 'none';
        // Trigger existing filter JS here if needed
        option.click(); // Keeps existing functionality
      });
    });
