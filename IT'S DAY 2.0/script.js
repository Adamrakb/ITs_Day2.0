
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: "#FFFFFF",
              secondary: "#2563eb",
              third: "#1e3371",
            },
            dropShadow: {
              glow: "0 0 12px rgba(37,99,235,0.7)",
            },
            animation: {
              fadeIn: "fadeIn 1.5s ease-in-out",
              slideUp: "slideUp 1s ease-out",
            },
            keyframes: {
              fadeIn: {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
              slideUp: {
                "0%": { transform: "translateY(50px)", opacity: 0 },
                "100%": { transform: "translateY(0)", opacity: 1 },
              },
            },
          },
        },
      };
    


      const countdownDate = new Date("July 5, 2025 00:00:00").getTime();
      function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown-timer").innerHTML =
            "Acara telah dimulai!";
        }
      }
      const countdownInterval = setInterval(updateCountdown, 1000);
      updateCountdown();
    


      const carousel = document.getElementById("carousel").firstElementChild;
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");

      let index = 0;
      const totalCards = 3;
      const cardWidth = 400 + 24; // card + gap

      function updateCarousel() {
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
      }

      prevButton.addEventListener("click", () => {
        index = (index - 1 + totalCards) % totalCards;
        updateCarousel();
      });

      nextButton.addEventListener("click", () => {
        index = (index + 1) % totalCards;
        updateCarousel();
      });
    


      AOS.init({ duration: 1000, once: true });
    


      const scrollToTopButton = document.getElementById("scrollToTop");
      window.onscroll = function () {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          scrollToTopButton.classList.remove("hidden");
        } else {
          scrollToTopButton.classList.add("hidden");
        }
      };
      scrollToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    


      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    


      window.addEventListener("scroll", function () {
        const header = document.getElementById("main-header");
        if (window.scrollY > 10) {
          header.classList.add("bg-white/75", "shadow-md");
          header.classList.remove("text-secondary");
          header.classList.add("text-blue-600"); // Ganti dengan warna sesuai palet Tailwind kamu
        } else {
          header.classList.remove("bg-white/75", "shadow-md");
          header.classList.remove("text-blue-600");
          header.classList.add("text-secondary");
        }
      });
    