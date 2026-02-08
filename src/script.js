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

  let userPrompt = document.querySelector("#user-prompt").value;
  let apiKey = "o3d03f027be48ad05b5ec0c715cadt7d";
  let prompt = `Please generate a motivational quote relating to ${userPrompt}`;
  let context =
    "You are a knowledeable AI that generates inspirational and uplifting motivational quotes. The quote should be short, impactful, and suitable for sharing on social media. Please include emojis to make the quote fun. The quote should be in English and should not exceed 20 words. The quote should encourage people to stay motivated, be prepared to overcome challenges and endure hardships.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
