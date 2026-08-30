import { useEffect, useState } from "react";
import "./Quiz.css";
import { addXP } from "../../utils/xpSystem";

function Quiz({ questions }) {

    const [current, setCurrent] = useState(0);

    const [score, setScore] = useState(0);

    const [finished, setFinished] = useState(false);
useEffect(() => {

    setCurrent(0);
    setScore(0);
    setFinished(false);

}, [questions]);
    function handleAnswer(selectedOption) {

        let newScore = score;

        if (selectedOption === questions[current].answer) {

            newScore++;

            setScore(newScore);

        }

        if (current < questions.length - 1) {

            setCurrent(current + 1);

        } else {

            if (newScore >= Math.ceil(questions.length * 0.7)) {

                addXP(100);

            }

            setFinished(true);

        }

    }

    if (finished) {

        const percentage = Math.round((score / questions.length) * 100);

        return (

            <div className="quiz-finished">

                <h2>🎉 Quiz Completed</h2>

                <h1>{score} / {questions.length}</h1>

                <p>Accuracy: {percentage}%</p>

                {percentage >= 70 ? (

                    <p>⭐ +100 XP Earned</p>

                ) : (

                    <p>❌ You need at least 70% to pass.</p>

                )}

            </div>

        );

    }

    return (

        <div className="quiz">

            <h2>

                Question {current + 1} / {questions.length}

            </h2>

            <h3>

                {questions[current].question}

            </h3>

            <div className="answers">

                {questions[current].options.map((option, index) => (

                    <button

                        key={index}

                        onClick={() => handleAnswer(option)}

                    >

                        {option}

                    </button>

                ))}

            </div>

        </div>

    );

}

export default Quiz;