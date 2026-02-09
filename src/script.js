function displayQuote(response) {
  new Typewriter("#quote-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "o3d03f027be48ad05b5ec0c715cadt7d";
  let prompt = `Please generate a motivational quote relating to ${userPrompt.value}`;
  let context =
    "You are a knowledeable AI that generates inspirational and uplifting motivational quotes. The quote should be short, impactful, and suitable for sharing on social media. Please include emojis to make the quote fun. The quote should be in English and should not exceed 20 words. The quote should encourage people to stay motivated, be prepared to overcome challenges and endure hardships.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let unhideQuoteContainer = document.querySelector(".quote-container");
  unhideQuoteContainer.style.display = "block";

  let quoteGenerating = document.querySelector("#quote-text");
  quoteGenerating.innerHTML = `<div class="generating"><small>⏳ Generating a motivational quote about ${userPrompt.value}...</small></div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);

function formReset(event) {
  let afterSubmission = document.querySelector("#quote-form");
  afterSubmission.reset();
}

let quoteFormReset = document.querySelector("#quote-form");
quoteFormReset.addEventListener("submit", formReset);
