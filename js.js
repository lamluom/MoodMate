const emojiButtons = document.querySelectorAll(".emoji-btn");
const selectedEmoji = document.getElementById("selected-emoji");
const motivationalMessage = document.getElementById("motivational-message");

const messages = {
  "😊": "Keep smiling! Life is beautiful.",
  "😢": "It's okay to feel sad. Better days are coming.",
  "😡": "Take a deep breath. You got this.",
  "😌": "Enjoy the peace and calm.",
  "😜": "Stay playful and keep the fun alive!",
};

emojiButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    selectedEmoji.textContent = mood;
    motivationalMessage.textContent = messages[mood];
  });
});
