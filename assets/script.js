document.addEventListener("DOMContentLoaded", () => {
  

  // Update Timer
  function updateTimeLeft() {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(12, 0, 0, 0);

    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    const diff = targetTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeLeft = `${hours} soat, ${minutes} daqiqa, ${seconds} soniya`;
    document.getElementById("time-left").innerText = timeLeft;
  }

  setInterval(updateTimeLeft, 1000);
  updateTimeLeft();

  // Story Modal Functions
  const storyModal = document.getElementById("story-modal");
  const storyVideo = document.getElementById("story-video");
  
  window.openStory = function () {
    storyModal.classList.add("active");
  
    // Video autoplay uchun URLga query qo'shish
    const autoplaySrc = storyVideo.src.includes("autoplay=1")
      ? storyVideo.src
      : storyVideo.src + "&autoplay=1";
  
    storyVideo.src = autoplaySrc; // Video autoplay bo'ladi
  };
  
  window.closeStory = function () {
    storyModal.classList.remove("active");
  
    // Videoni to'xtatish uchun srcni qayta o'rnatamiz
    const originalSrc = storyVideo.src.replace("&autoplay=1", "");
    storyVideo.src = originalSrc;
  };
  
  // Modal tashqarisiga bosilganda yopish
  storyModal.addEventListener("click", (event) => {
    if (event.target === storyModal) {
      closeStory();
    }
  });    
// ------------------------marque----------------------------------------
  const marqueeContainer = document.querySelector('.marquee-container');
  const marquee = marqueeContainer.querySelector('.marquee');

  // Marquee uchun matnlar massivi
  const marqueeTexts = [
    '"Kuafda" oquv - bu faqat\nmalumot olish emas,\nbu kelajakni loyihalash!',
    'Mazali ovqat - kuchli talaba demak!',
    '"Kuafdagi" har bir kun sizning kelajakdagi\nmuvaffaqiyatlaringizning poydevori!',
    'Universitetning eng mazali nuqtasi - bu "KeYe" pitsa va burger!',
    'Har bir qiyinchilik sizni yanada kuchli qiladi. Vaziyatlardan dars oling!'
  ];

  // Marquee elementlarini dinamik yaratish
  function createMarqueeElements() {
    // Avvalgi elementlarni tozalash
    marquee.innerHTML = '';

    // Matnlar bo'yicha elementlar yaratish
    marqueeTexts.forEach(text => {
      const boxText = document.createElement('div');
      boxText.classList.add('box-text');
      
      const h3 = document.createElement('h3');
      h3.textContent = text;
      
      boxText.appendChild(h3);
      marquee.appendChild(boxText);
    });

    // Animatsiya uchun qo'shimcha nusxalar yaratish
    const clonedElements = Array.from(marquee.children).map(el => el.cloneNode(true));
    clonedElements.forEach(el => marquee.appendChild(el));
  }

  // Animatsiyani boshqarish
  function setupMarqueeAnimation() {
    const marqueeWidth = marquee.scrollWidth / 2;
    
    const animation = marquee.animate([
      { transform: 'translateX(0)' },
      { transform: `translateX(-${marqueeWidth}px)` }
    ], {
      duration: 15000, // 15 soniya
      iterations: Infinity,
      easing: 'linear'
    });
  }

  // Funksiyalarni ishga tushirish
  createMarqueeElements();
  setupMarqueeAnimation();

  // Sichqoncha ustida to'xtash
  marqueeContainer.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });

  // Sichqoncha ketganda davom ettirish
  marqueeContainer.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });
  // --------------------------------------------
  
  const tabButtons = document.querySelectorAll(".link-icons");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Barcha panellarni yashirish
      tabPanels.forEach(panel => {
        panel.classList.remove("active");
      });

      // Tanlangan panelni ko'rsatish
      const targetPanelId = this.getAttribute("data-target");
      const targetPanel = document.getElementById(targetPanelId);

      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  
  
}); 
