//const question = "Do you like my portfolio so far?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);

//set up the questions for the quiz
const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent "],
    ["What is Spiderman's real name?", "Peter Parker"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

let score = 0; //initializing the score variable to zero

//now it's time to loop through the quiz
for(const [question,answer] of 
    quiz.entries()){

        //get an answer from the user
        const response = prompt(question);
        //check if answer is correct
        if(response === answer){
            alert('Correct!');
            //score increases by 1
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    //Report the player's score after the end of the quiz
    alert(`Game Over, you scored ${score} points${score > 1 ? 's' : ''}`);
    