var questions = [{
    question: "What is JavaScript?",
    choices: ["A foreign Language", "A coding framework", "A hypertext Mark up language", "A programming Language"],
    correctAnswer: 4
}, {
    question: "JavaScript is the same as Java?",
    choices: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1
}, {
    question: "JavaScript file has an extension of?",
    choices: ["Java", "Js", "XHTML", ".index"],
    correctAnswer: 2
}, {
    question: "which of the following is not a JavaScript feature?",
    choices: ["Case sensitive Format", "statements looking", "Else if Statements", "A mark up Language"],
    correctAnswer: 2
}, {
    question: "Which of the following is not a function in JavaScript?",
    choices: ["Named functions", "Anonymus Function", "unnamed functions", "Immediately Invoked function expression"],
    correctAnswer: 3
}, {
    question: "Where is the correct place to insert JavaScript?",
    choices: ["The head", "Both the head section and the body are correct", "The body section", "Just Anywhere"],
    correctAnswer: 3

}, {
    question: "JavaScript has three types of Equals which one is not?",
    choices: ["Assignment Operator", "Loose Equality", "strict Equality","coercion Equality"],
    correctAnswer: 4
}, {
    question: "How many sides in total would a three triangle and three rectangle have?",
    choices: ["21", "19", "12", "36"],
    correctAnswer: 1
}, {
    question: "A right angle adds to up how many degree?",
    choices: ["45", "75", "90", "180"],
    correctAnswer: 3
}, {
    question: "Which of these is not a programming Language?",
    choices: ["HTML", "Python", "c#", "Java"],
    correctAnswer: 1
}, {
    question: "There are only two if statements in JavaScript?",
    choices: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0
}, {
    question: "Javascript is the only Programming Language Existing?",
    choices: ["True", "False"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {

    //display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    //on clicking next, display the next question
    $(this).find(".nextButton").on("click", function() {
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();

                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
} 
