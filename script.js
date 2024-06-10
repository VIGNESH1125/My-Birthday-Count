const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const birthday = document.getElementById("birthday");
const loading = document.getElementById("loading");

// Get next birthday
const today = new Date();
const nextBirthdayYear = today.getFullYear();
const birthdayDate = new Date(`${nextBirthdayYear}-11-11 00:00:00`);
if (today > birthdayDate) {
  // If birthday has already passed this year, set next year's birthday
  birthdayDate.setFullYear(nextBirthdayYear + 1);
}

// Update countdown
function updateCountdown() {
  const currentTime = new Date();
  const difference = birthdayDate - currentTime;
  const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const currentHours = Math.floor((difference / 1000 / 60 / 60) % 24);
  const currentMinutes = Math.floor((difference / 1000 / 60) % 60);
  const currentSeconds = Math.floor((difference / 1000) % 60);
  days.innerText = currentDays < 10 ? "0" + currentDays : currentDays;
  hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
  minutes.innerText =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  seconds.innerText =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}

// Show countdown after 1 second
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Update countdown every second
setInterval(updateCountdown, 1000);

// Display the next birthday year
birthday.innerText = nextBirthdayYear;
