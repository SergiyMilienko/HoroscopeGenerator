// Get the button element and the output element
const generateHoroscopeBtn = document.getElementById("generateHoroscope");
const horoscopeOutput = document.getElementById("horoscopeOutput");

const greetings = [
    "Hello!", "Hi there!", "Greetings!", "Hey!", "Welcome!"
];

const subjects = [
    "You", "Your friend", "Everyone", "Someone special", "A stranger"
];

const actions = [
    "will have a great day.", "will receive exciting news.", "should take a break and relax.",
    "will meet someone new.", "will achieve your goals.", "will find luck in unexpected places."
];

// Function to generate the horoscope (replace this with your logic)
function generateHoroscope() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    const horoscope = `${randomGreeting} ${randomSubject} ${randomAction}`;
    return horoscope;
}

// Add event listener to the button
generateHoroscopeBtn.addEventListener("click", () => {
    const horoscope = generateHoroscope();
    horoscopeOutput.textContent = horoscope;
});
