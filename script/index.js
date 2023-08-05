// Get the button element and the output element
const generateHoroscopeBtn = document.getElementById("generateHoroscope");
const horoscopeOutput = document.getElementById("horoscopeOutput");

// Function to generate the horoscope (replace this with your logic)
function generateHoroscope() {
    const horoscope = "Today's horoscope: You will have a great day!";
    return horoscope;
}

// Add event listener to the button
generateHoroscopeBtn.addEventListener("click", () => {
    const horoscope = generateHoroscope();
    horoscopeOutput.textContent = horoscope;
});
