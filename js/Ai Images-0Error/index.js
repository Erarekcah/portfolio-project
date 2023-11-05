const apiKey = "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";

const numberButton1 = document.querySelector(".number-1");
const numberButton2 = document.querySelector(".number-2");
const numberButton3 = document.querySelector(".number-3");
const numberButton4 = document.querySelector(".number-4");
const numberButton8 = document.querySelector(".number-8");

numberButton1.addEventListener("click", () => {
  numberButton1.classList.add("active-number");
  numberButton2.classList.remove("active-number");
  numberButton3.classList.remove("active-number");
  numberButton4.classList.remove("active-number");
  numberButton8.classList.remove("active-number");
  maxImages = 1;
});
numberButton2.addEventListener("click", () => {
  numberButton1.classList.remove("active-number");
  numberButton2.classList.add("active-number");
  numberButton3.classList.remove("active-number");
  numberButton4.classList.remove("active-number");
  numberButton8.classList.remove("active-number");
  maxImages = 2;
});
numberButton3.addEventListener("click", () => {
  numberButton1.classList.remove("active-number");
  numberButton2.classList.remove("active-number");
  numberButton3.classList.add("active-number");
  numberButton4.classList.remove("active-number");
  numberButton8.classList.remove("active-number");
  maxImages = 3;
});
numberButton4.addEventListener("click", () => {
  numberButton1.classList.remove("active-number");
  numberButton2.classList.remove("active-number");
  numberButton3.classList.remove("active-number");
  numberButton4.classList.add("active-number");
  numberButton8.classList.remove("active-number");
  maxImages = 4;
});
numberButton8.addEventListener("click", () => {
  numberButton1.classList.remove("active-number");
  numberButton2.classList.remove("active-number");
  numberButton3.classList.remove("active-number");
  numberButton4.classList.remove("active-number");
  numberButton8.classList.add("active-number");
  maxImages = 8;
});

let maxImages = 2;
let selectedImageNumber = null;

// Function to  generation a random  number  between min  and max(inclusive)
function getRanomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to disable the generate button during processing
function disableGenerateButton() {
  document.getElementById("generate").disabled = true;
}

// Function to enabled the generate button after process
function enabledGenerateButton() {
  document.getElementById("generate").disabled = false;
}

// Function to  clear image  grid
function clearImageGrid() {
  const imageGrid = document.getElementById("image-grid");
  imageGrid.innerHTML = "";
}

// Function to generate images

async function generateImages(input) {
  disableGenerateButton();
  clearImageGrid();

  const loading = document.getElementById("loading");
  loading.style.display = "block";

  const imageUrls = [];

  for (let i = 0; i < maxImages; i++) {
    // Generate random number between 1 and 1000 and append it to the prompt
    const randomNumber = getRanomNumber(1, 100);
    const prompt = `${input} ${randomNumber}`;
    // We added random number to prompt to create different results
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      alert("Filed to generate image!");
    }

    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    imageUrls.push(imgUrl);
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `art-${i + 1}`;
    img.onclick = () => downloadImage(imgUrl, i);
    document.getElementById("image-grid").appendChild(img);
  }

  loading.style.display = "none";
  enabledGenerateButton();
  selectedImageNumber = null; // Reset selected image number
}

document.getElementById("generate").addEventListener("click", () => {
  const input = document.getElementById("user-prompt").value;
  generateImages(input);
});

function downloadImage(imgUrl, imageNumber) {
  const link = document.createElement("a");
  link.href = imgUrl;
  // Set filename based on the selected  image
  link.download = `image-${imageNumber + 1}.jpg`;
  link.click();
}
