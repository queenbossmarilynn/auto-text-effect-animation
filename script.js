// Get the container Element 
const containerEl = document.querySelector(".container");



// Create an array 
const careers = ["Software Engineer", "Web Developer", "Freelancer", "Cosmetologist", "Instructor", "Musician", "Vocalist", "Nutritionist", "Personal Trainer", "Wellness Coach"];

// Set's 0 to default
let careerIndex = 0;

// Variable for Character Effect 
let characterIndex = 0;

updateText();

function updateText() {
    // To get the full word we placed the ++ at the top 
    characterIndex++;


    // Manipulate the container 
    containerEl.innerHTML = 
        // Hard Code Career Choice 
    // `<h1>I am a Software Engineer</h1>`;
   
    // Target the Career Selection to change by array - Hardcode Version 
    // `<h1>I am a ${careers[0]}</h1>`

    // a, and an are set for proper grammar 
    // Sets Array Interval to default
    `<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    
    // Once it reaches the character length, and moves on to the next career 
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        // Restarts from the beginng of the text 
        characterIndex = 0;
    };


    // Reset the career array 
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }

    // Set Timer 
    setTimeout(updateText, 400);
}