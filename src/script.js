function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote-text", {
    strings:
      "The only way to do great work is to love what you do. - Steve Jobs",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
