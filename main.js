const quizes = [{
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// Hàm để random chọn câu trả lời
function randomAnswer() {
    quizes.forEach(quiz => {
        const answers = document.getElementsByName(quiz.id.toString());
        const possibleAnswers = quiz.answers;
        const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

        for (let answer of answers) {
            if (parseInt(answer.value) === randomAnswer) {
                answer.checked = true;
                break;
            }
        }
    });
}

// Event listener cho nút Random Answer
document.getElementById('btn').addEventListener('click', randomAnswer);

// Gọi hàm renderQuiz khi load trang
document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = ''; // Xóa nội dung cũ

    quizes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.classList.add('quiz-item');

        const questionElement = document.createElement('h3');
        questionElement.innerText = `Câu ${quiz.id} : ${quiz.question}`;
        quizItem.appendChild(questionElement);

        const answersContainer = document.createElement('div');
        answersContainer.classList.add('quiz-answer');

        quiz.answers.forEach(answer => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('quiz-answer-item');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = quiz.id.toString();
            input.value = answer;

            const label = document.createElement('label');
            label.innerText = answer;

            answerItem.appendChild(input);
            answerItem.appendChild(label);
            answersContainer.appendChild(answerItem);
        });

        quizItem.appendChild(answersContainer);
        quizContainer.appendChild(quizItem);
    });
});