let currentQuestion = 1;
const totalQuestions = 4;
const correctAnswers = {
    1: 'B',
    2: 'A',
    3: 'B',
    4: 'B'
};

function checkAnswer(questionNumber, selectedAnswer) {
    if (correctAnswers[questionNumber] === selectedAnswer) {
        document.getElementById(`question${questionNumber}`).style.display = 'none';
        currentQuestion++;
        if (currentQuestion <= totalQuestions) {
            document.getElementById(`question${currentQuestion}`).style.display = 'block';
        } else {
            document.getElementById('prize').style.display = 'block';
        }
    } else {
        alert('Elrontottad, figyelj oda jobban! :/');
    }
}

// Show the first question initially
document.getElementById('question1').style.display = 'block';
