document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question-container");

  questions.forEach((question) => {
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");
    const answer = question.querySelector("p");

    plusIcon.addEventListener("click", () => {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
      answer.style.display = "block";
    });

    minusIcon.addEventListener("click", () => {
      minusIcon.style.display = "none";
      plusIcon.style.display = "block";
      answer.style.display = "none";
    });
  });
});