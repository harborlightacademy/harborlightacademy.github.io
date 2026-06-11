// ── Bio toggles ───────────────────────────────────────────────
function toggleBioById(bioId, btnId) {
  const bio = document.getElementById(bioId);
  const btn = document.getElementById(btnId);
  const open = bio.hidden;
  bio.hidden = !open;
  btn.textContent = open ? 'Hide Bio ▴' : 'Read Bio ▾';
}

function toggleKatieBio()  { toggleBioById('katie-bio',   'katie-toggle');   }
function toggleHaileyBio() { toggleBioById('hailey-bio',  'hailey-toggle');  }
function toggleMaggieBio() { toggleBioById('maggie-bio',  'maggie-toggle');  }
function toggleMarthaBio() { toggleBioById('martha-bio',  'martha-toggle');  }
function toggleEmilyBio()  { toggleBioById('emily-bio',   'emily-toggle');   }
function toggleLesleyBio() { toggleBioById('lesley-bio',  'lesley-toggle');  }
function toggleBio()       { toggleBioById('lina-bio',    'lina-toggle');    }

// ── Desktop nav dropdowns ─────────────────────────────────────
function toggleMenu(btn) {
  const li = btn.parentElement;
  const isOpen = li.classList.contains('open');
  document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) li.classList.add('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('#navLinks'))
    document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
    closeMobileNav();
  }
});

// ── Mobile nav ────────────────────────────────────────────────
function openMobileNav()  {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}
