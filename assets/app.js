if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js') // `sw.js` faylining joylashgan manzilini ko'rsating
      .then((reg) => console.log('Service Worker muvaffaqiyatli ro‘yxatdan o‘tkazildi!',reg))
      .catch((err) => console.error('Service Worker ro‘yxatdan o‘tkazishda xatolik:', err));
  }
  