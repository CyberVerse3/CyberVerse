import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import labs from "../data/labs";
import "./LabChallenge.css";


function LabChallenge() {

  const { id } = useParams();

  const challengeId = Number(id) || 1;

  const challenge = labs.linux.challenges.find(
    (item) => item.id === challengeId
  );


  const [time, setTime] = useState(1800);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);



  useEffect(() => {

    if (time <= 0) return;

    const timer = setInterval(() => {

      setTime(prev => prev - 1);

    }, 1000);


    return () => clearInterval(timer);

  }, [time]);



  const formatTime = () => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  };



  const completeLab = () => {

    setCompleted(true);


    localStorage.setItem(
      "cyberXP",
      challenge.xp
    );


    localStorage.setItem(
     `challenge${challenge.id}Completed`,
      "true"
    );


    if(challenge.id === 1){

      localStorage.setItem(
        "challenge2Unlocked",
        "true"
      );

    }

  };



  if(!challenge){

    return <h1>Challenge not found</h1>;

  }



  return (

    <div className="lab-container">


      <div className="lab-header">

        <h1>
          🐧 Linux Lab - Challenge {challenge.id}
        </h1>


        <div className="timer">
          ⏱ {formatTime()}
        </div>

      </div>



      <div className="challenge-card">


        <h2>
          {challenge.title}
        </h2>


        <p>
          {challenge.description}
        </p>



        <button
          className="hint-btn"
          onClick={() => setShowHint(!showHint)}
        >

          💡 {showHint ? "Hide Hint" : "Show Hint"}

        </button>



        {
          showHint && (

            <div className="hint-box">

              {challenge.hint}

            </div>

          )
        }



        <button
          className="complete-btn"
          onClick={completeLab}
          disabled={completed}
        >

          {
            completed
            ? "✅ Completed"
            : `Complete Lab +${challenge.xp} XP`
          }

        </button>


      </div>


    </div>

  );

}


export default LabChallenge;