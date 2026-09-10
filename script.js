document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  reveals.forEach((x) => io.observe(x));
  const menu = document.querySelector(".menu"),
    nav = document.querySelector(".nav nav");
  menu?.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "25px";
    nav.style.background = "#090909";
    nav.style.flexDirection = "column";
  });
  const phone = "94770000000";
  const text =
    "Hi Black Blade! I would like to book a haircut. Service: ___ | Preferred date/time: ___";
  document.querySelector("#whatsapp").href =
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", () => {
      if (window.innerWidth <= 850 && nav) nav.style.display = "none";
    }),
  );
});


const whatsappBtn = document.getElementById("whatsapp");

whatsappBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Check service
  if (!service) {
    alert("Please select a service.");
    return;
  }

  // Check date
  if (!date) {
    alert("Please select your preferred date.");
    return;
  }

  // Check time
  if (!time) {
    alert("Please select your preferred time.");
    return;
  }

  // Format date
  const selectedDate = new Date(date + "T00:00:00");

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  // Format time
  const [hours, minutes] = time.split(":");
  const timeDate = new Date();

  timeDate.setHours(hours, minutes);

  const formattedTime = timeDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  // WhatsApp message
  const message =
    `Hello Salon Kavya! 👋\n\n` +
    `I would like to book an appointment.\n\n` +
    `💇 Service: ${service}\n` +
    `📅 Date: ${formattedDate}\n` +
    `⏰ Time: ${formattedTime}\n\n` +
    `Please confirm my appointment.\n\n` +
    `Thank you!`;

  // WhatsApp number
  const whatsappNumber = "94716346709";

  // Create WhatsApp URL
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");
});