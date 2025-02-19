function toggleMenu() {
  const navContent = document.querySelector('.nav-content');
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  navContent.classList.toggle('active');
  hamburger.classList.toggle('active');
  navbar.classList.toggle('menu-active'); // Toggle the new menu-active class
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = navContent.classList.contains('active') ? 'hidden' : '';
}

// Update click outside handler to also remove menu-active class
document.addEventListener('click', (e) => {
  const navContent = document.querySelector('.nav-content');
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  if (navContent.classList.contains('active') && 
      !e.target.closest('.nav-content') && 
      !e.target.closest('.hamburger')) {
    navContent.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove('menu-active'); // Remove menu-active class
    document.body.style.overflow = '';
  }
});

// Update nav links click handler
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navContent = document.querySelector('.nav-content');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    if (navContent.classList.contains('active')) {
      navContent.classList.remove('active');
      hamburger.classList.remove('active');
      navbar.classList.remove('menu-active'); // Remove menu-active class
      document.body.style.overflow = '';
    }
  });
});

/* MUSIC PLAYBACK */
document.addEventListener('DOMContentLoaded', () => {
  const musicCheckbox = document.getElementById('musicCheckbox');
  const audio = document.getElementById('bg-music');

  if (musicCheckbox && audio) {
      musicCheckbox.addEventListener('change', () => {
          if (musicCheckbox.checked) {
              audio.play().catch(error => {
                  console.log("Autoplay blocked:", error);
                  musicCheckbox.checked = false;
              });
          } else {
              audio.pause();
          }
      });

      // // Handle page visibility changes
      // document.addEventListener('visibilitychange', () => {
      //     if (document.hidden) {
      //         if (audio && !audio.paused) {
      //             audio.pause();
      //             sessionStorage.setItem('wasPlaying', 'true');
      //         }
      //     } else {
      //         if (sessionStorage.getItem('wasPlaying') === 'true' && musicCheckbox.checked) {
      //             audio.play().catch(error => console.log("Autoplay blocked:", error));
      //             sessionStorage.removeItem('wasPlaying');
      //         }
      //     }
      // });
  }
});

/* SKILLS SECTION */
document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { name: "Python", img: "https://cdn.iconscout.com/icon/free/png-512/free-python-3521655-2945099.png" },
    { name: "JavaScript", img: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-3629449-3031512.png" },
    { name: "HTML", img: "https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png" },
    { name: "CSS", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" },
    { name: "Power Automate", img: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-automate-logo.png" },
    { name: "Excel VBA", img: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
    { name: "VBScript", img: "https://cdn.neowin.com/news/images/uploaded/2023/10/1697037415_vbscript-logo_story.jpg" },
    { name: "Golang", img: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" },
    { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "Power BI", img: "https://www.pngmart.com/files/23/Power-Bi-Logo-PNG-Photos.png" },
    { name: "Tableau", img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
    { name: "SQL", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "AI Tools", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75KzhiKWoLXuucqBJkHQBxq1LLpTmIYQpiA&s" }
  ];

  const container = document.getElementById("skills-container");

  function createSkillElements() {
    // Create three sets of skills for smooth infinite scroll
    for (let i = 0; i < 3; i++) {
      skills.forEach(skill => {
        const item = document.createElement("div");
        item.className = "skill-item";
        item.innerHTML = `
          <div class="skill-icon">
            <img src="${skill.img}" alt="${skill.name}">
          </div>
          <div class="skill-name">${skill.name}</div>
        `;
        container.appendChild(item);
      });
    }
  }

  createSkillElements();

  // Calculate the scroll width and implement infinite scroll
  function setupInfiniteScroll() {
    const scrollWidth = container.scrollWidth / 3;
    let currentScroll = 0;

    function scroll() {
      currentScroll += 1;
      if (currentScroll >= scrollWidth) {
        currentScroll = 0;
        container.style.transform = 'translateX(0)';
      }
      container.style.transform = `translateX(-${currentScroll}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();
  }

  setupInfiniteScroll();
});

/* HOBBY MODAL FUNCTIONALITY */
document.addEventListener('DOMContentLoaded', () => {
  const hobbyPhotosMap = {
      "Sports": [
          "images/Sports/bultang_1.jpg",
          "images/Sports/bultang_2.jpg",
          "images/Sports/bultang_3.jpg",
          "images/Sports/bultang_4.jpg",
          "images/Sports/bultang_5.jpg",
          "images/Sports/bultang_6.jpg",
          "images/Sports/bultang_7.jpg"
      ],
      "Film": [
          "https://boredanddangerousblog.wordpress.com/wp-content/uploads/2015/09/beautiful-mind.jpg",
          "https://thumbor.prod.vidiocdn.com/_E3qsDq5_pi8I6yKh4mOOBMyySc=/1280x720/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8341905/sinopsis-the-chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe-2005-rekomendasi-film-fantasi-petualangan-amerika-b17bbe.jpg",
          "https://bisnismuda.id/assets/content/2023040304414200000020230331125940000000Godfather.jpg",
          "https://thecrazyandlazy.wordpress.com/wp-content/uploads/2017/03/goblin.png",
          "https://cdn.k-ennews.com/news/photo/202501/6881_18399_3812.jpg",
          "https://asianwiki.com/images/c/c8/Itaewon_Class-mp1.jpg",
          "https://www.viu.com/ott/id/articles/wp-content/uploads/2023/07/nonton-streaming-download-fireworks-of-my-heart-sub-indo-viu-slide-banner.jpg",
          "https://miro.medium.com/v2/resize:fit:1024/1*XSPebIkn0Z_QGrHsUldB-Q.jpeg",
          "https://i.ebayimg.com/images/g/jxYAAOSwbgxmTB6Y/s-l1200.jpg",
          "https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4-1024x683.png",
          "https://www.bubbleblabber.com/wp-content/uploads/2014/05/Naruto-Shippuden-Konoha-Wallpapers-HD.jpg",
          "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/243/2024/08/09/uiktyu-1182121447.jpg"
      ],
      "Games": [
          "https://www.blibli.com/friends-backend/wp-content/uploads/2024/03/B111519-Cover-hero-ml-scaled.jpg",
          "https://i.redd.it/jjc4lq53vw911.jpg",
          "https://fastcdn.hoyoverse.com/content-v2/plat/123439/c39dd0699f78411122c6c9797d57a592_8017120099261456551.jpeg",
          "https://i.ytimg.com/vi/An6x1i3rS04/maxresdefault.jpg",
          "https://thesun.my/binrepository/efootball2024-mainvisual-messi_3459361_20230912213309.jpg",
          "https://4kwallpapers.com/images/wallpapers/dinosaur-game-3840x2160-11309.png"
      ]
  };

  const hobbyCards = document.querySelectorAll('.hobby-card');
  const modal = document.getElementById('hobby-photos-modal');
  const grid = modal.querySelector('.hobby-photos-grid');
  const closeButton = modal.querySelector('.hobby-photos-close');
  const titleElement = modal.querySelector('.hobby-title');

  // Enable body scroll lock
  function lockScroll() {
      document.body.style.overflow = 'hidden';
  }

  // Disable body scroll lock
  function unlockScroll() {
      document.body.style.overflow = '';
  }

  hobbyCards.forEach(card => {
      card.addEventListener('click', () => {
          const hobbyTitle = card.querySelector('h3').textContent.trim();
          titleElement.textContent = hobbyTitle;
          grid.innerHTML = '';

          const photos = hobbyPhotosMap[hobbyTitle];
          if (photos && photos.length > 0) {
              photos.forEach((photoUrl, index) => {
                  const img = document.createElement('img');
                  img.src = photoUrl;
                  img.alt = `${hobbyTitle} photo ${index + 1}`;
                  img.loading = "lazy";
                  img.style.opacity = '0';
                  img.style.transform = 'translateY(20px)';
                  grid.appendChild(img);

                  // Stagger the animation of images
                  setTimeout(() => {
                      img.style.transition = 'all 0.3s ease';
                      img.style.opacity = '1';
                      img.style.transform = 'translateY(0)';
                  }, index * 100);
              });
          } else {
              grid.innerHTML = '<p style="color: #fff;">No photos available for this hobby.</p>';
          }
          
          modal.classList.add('active');
          lockScroll();
      });
  });

  // Close modal events
  closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
      unlockScroll();
  });

  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.classList.remove('active');
          unlockScroll();
      }
  });

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
          unlockScroll();
      }
  });
});