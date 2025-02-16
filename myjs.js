// NAV BAR

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Play Music
document.addEventListener('DOMContentLoaded', () => {
  const musicCheckbox = document.getElementById('musicCheckbox');
  const audio = document.getElementById('bg-music');

  if (musicCheckbox) {
      musicCheckbox.addEventListener('change', () => {
          if (musicCheckbox.checked) {
              audio.play().catch(error => console.log("Autoplay blocked:", error));
          } else {
              audio.pause();
          }
      });
  }
});


//   BCAKGROUND EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const createWaveEffect = () => {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            background: radial-gradient(circle, rgba(218, 255, 7, 0.1), rgba(234, 255, 2, 0.1));
            transform: scale(1);
            animation: waveEffect 8s ease-in-out infinite;
        `;
        document.body.appendChild(wave);
    };

    createWaveEffect();
});



// SKILLLL SECTION
document.addEventListener("DOMContentLoaded", function () {
    const skills = [
      { name: "Python", img: "https://cdn.iconscout.com/icon/free/png-512/free-python-3521655-2945099.png" },
      { name: "JavaScript", img: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-3629449-3031512.png" },
      { name: "HTML", img: "https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png" },
      { name: "CSS", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"},
      { name: "Power Automate", img: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-automate-logo.png"},
      { name: "Excel VBA", img: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
      { name: "VBScript", img: "https://cdn.neowin.com/news/images/uploaded/2023/10/1697037415_vbscript-logo_story.jpg" },
      { name: "Golang", img: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" },
      { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
      { name: "Power BI", img: "https://www.pngmart.com/files/23/Power-Bi-Logo-PNG-Photos.png" },
      { name: "Tableau", img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "SQL", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
      { name: "AI Tools", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75KzhiKWoLXuucqBJkHQBxq1LLpTmIYQpiA&s"}
    ];

    const container = document.getElementById("skills-container");

    function createSkillElements() {
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

      // Duplicate elements for seamless scrolling
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

    createSkillElements();

    function startScrolling() {
      let scrollAmount = 0;
      const speed = 1;

      function scroll() {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.style.transform = `translateX(${-scrollAmount}px)`;
        requestAnimationFrame(scroll);
      }

      scroll();
    }

    startScrolling();
  });



// HOBBY SECTION
document.addEventListener('DOMContentLoaded', () => {
    const hobbyPhotosMap = {
        "Sports": [
            "images/Sports/bultang_1.jpg",
            "images/Sports/bultang_2.jpg",
            "images/Sports/bultang_3.jpg",
            "images/Sports/bultang_4.jpg",
            "images/Sports/bultang_5.jpg",
            "images/Sports/bultang_6.jpg",
            "images/Sports/bultang_7.jpg",
        ],

        "Film": [

            "https://m.media-amazon.com/images/I/61CRB56XE4L._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg",
            "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys",

            "https://cdn0-production-images-kly.akamaized.net/lznYVV8UoUYALk9HaGeja1C4g4Y=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/774059/original/049242500_1417529899-the-heirs-the-inheritors-2013_44701381460349.jpg",
            "https://m.media-amazon.com/images/M/MV5BNWMxMjgyNTktOTBjYy00M2RhLTk5YTgtZjg5NGFiZTg0MzgyXkEyXkFqcGc@._V1_.jpg",
            "https://asianwiki.com/images/c/c8/Itaewon_Class-mp1.jpg",

            "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/01/2023/07/06/Poster-C-Drama-Fireworks-of-My-Heart-Twitter-Viu-SG-4008876267.jpeg",
            "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAzMzQ3OTEzNDAwMzk0OTM0/hidden-love-2023-chinese-drama-review.jpg",
            "https://www.spoinc.jp/files/event4/images/hwma_keyart.jpg",
            
            "https://cdn.oneesports.id/cdn-data/sites/2/2023/06/Anime_Hunter-x-Hunter.jpg",
            "https://www.bubbleblabber.com/wp-content/uploads/2014/05/Naruto-Shippuden-Konoha-Wallpapers-HD.jpg",
            "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/243/2024/08/09/uiktyu-1182121447.jpg",
        ],

        "Games": [
            "https://www.blibli.com/friends-backend/wp-content/uploads/2024/03/B111519-Cover-hero-ml-scaled.jpg",
            "https://i.redd.it/jjc4lq53vw911.jpg",
            "https://fastcdn.hoyoverse.com/content-v2/plat/123439/c39dd0699f78411122c6c9797d57a592_8017120099261456551.jpeg",
        ]
    };

    const hobbyCards = document.querySelectorAll('.hobby-card');
    const modal = document.getElementById('hobby-photos-modal');
    const grid = modal.querySelector('.hobby-photos-grid');
    const closeButton = modal.querySelector('.hobby-photos-close');
    const titleElement = modal.querySelector('.hobby-title');

    hobbyCards.forEach(card => {
        card.addEventListener('click', () => {
            const hobbyTitle = card.querySelector('h3').textContent;
            const photos = hobbyPhotosMap[hobbyTitle];

            titleElement.textContent = hobbyTitle;
            titleElement.style.color = 'rgba(231, 221, 34, 0.95)';
            grid.innerHTML = '';

            if (photos && photos.length > 0) {
                photos.forEach((photoUrl, index) => {
                    const img = document.createElement('img');
                    img.src = photoUrl;
                    img.alt = `${hobbyTitle} photo ${index + 1}`;
                    img.style.opacity = '0';
                    img.style.transform = 'translateY(20px)';
                    grid.appendChild(img);

                    setTimeout(() => {
                        img.style.transition = 'all 0.3s ease';
                        img.style.opacity = '1';
                        img.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            } else {
                grid.innerHTML = '<p>No photos available for this hobby.</p>';
            }

            modal.classList.add('active');
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});

