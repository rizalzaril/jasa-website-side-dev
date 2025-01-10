// Pastikan GSAP dan ScrollTrigger sudah dimuat

// Mengaktifkan ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi fly-in dari kiri untuk setiap service card
gsap.utils.toArray(".animation-ease-in-left-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    x: -100, // Mulai dari kiri dengan pergeseran -100px
    duration: 1.5, // Durasi animasi lebih lama untuk efek yang lebih smooth
    ease: "power3.out", // Efek easing yang lebih halus
    delay: index * 0.2, // Delay sedikit untuk setiap card agar muncul bertahap
    scrollTrigger: {
      trigger: card, // Elemen yang memicu animasi adalah .service-card
      start: "top 80%", // Mulai animasi saat bagian atas card mencapai 80% viewport
      end: "top 20%", // Berhenti animasi saat card mencapai 20% viewport
      scrub: false, // Sinkronisasi animasi dengan scroll
      markers: false, // Menghilangkan marker untuk debugging
    },
  });
});

gsap.utils.toArray(".animation-ease-in-top-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: -100, // Mulai dari atas dengan pergeseran -100px
    duration: 1.5, // Durasi animasi lebih lama untuk efek yang lebih smooth
    ease: "power3.out", // Efek easing yang lebih halus
    delay: index * 0.2, // Delay sedikit untuk setiap card agar muncul bertahap
    scrollTrigger: {
      trigger: card, // Elemen yang memicu animasi adalah .animation-ease-in-top-card
      start: "top 80%", // Mulai animasi saat bagian atas card mencapai 80% viewport
      end: "top 20%", // Berhenti animasi saat card mencapai 20% viewport
      scrub: false, // Sinkronisasi animasi dengan scroll (nilai 1 atau lebih mengindikasikan kecepatan scrub)
      markers: false, // Menghilangkan marker untuk debugging
    },
  });
});

gsap.utils.toArray(".animation-ease-in-left-text").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    x: -100, // Mulai dari kiri dengan pergeseran -100px
    duration: 1.5, // Durasi animasi lebih lama untuk efek yang lebih smooth
    ease: "power3.out", // Efek easing yang lebih halus
    delay: index * 0.2, // Delay sedikit untuk setiap card agar muncul bertahap
    scrollTrigger: {
      trigger: card, // Elemen yang memicu animasi adalah .service-card
      start: "top 80%", // Mulai animasi saat bagian atas card mencapai 80% viewport
      end: "top 20%", // Berhenti animasi saat card mencapai 20% viewport
      scrub: false, // Sinkronisasi animasi dengan scroll
      markers: false, // Menghilangkan marker untuk debugging
    },
  });
});

// Animasi untuk About Section
gsap.from("#about", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: "#about", // Elemen yang memicu animasi
    start: "top 80%", // Animasi dimulai ketika bagian atas elemen mencapai 80% dari viewport
    end: "top 20%", // Animasi berhenti ketika bagian atas elemen mencapai 20% dari viewport
    scrub: true, // Animasi mengikuti scroll
    markers: false, // Menampilkan marker untuk debugging
  },
});

// Animasi untuk Services Section
gsap.from("#services", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    markers: false,
  },
});

// Animasi untuk Testimonials Section
gsap.from("#testimonials", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    markers: false,
  },
});
