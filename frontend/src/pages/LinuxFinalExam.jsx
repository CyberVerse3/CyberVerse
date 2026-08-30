import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import linuxFinalExam from "../academy/quizzes/linuxFinalExam";

function LinuxFinalExam() {

    const navigate = useNavigate();

    const [answers, setAnswers] = useState({});

    function selectAnswer(questionIndex, option){

        setAnswers({

            ...answers,

            [questionIndex]: option

        });

    }

    return(

        <>

            <Navbar />

            <div
                style={{
                    maxWidth:"900px",
                    margin:"50px auto",
                    padding:"30px",
                    color:"white"
                }}
            >

                <h1>🐧 Linux Final Exam</h1>

                <p>

                    Answer all questions to earn your certificate.

                </p>

                <br />

                {linuxFinalExam.map((question,index)=>(

                    <div
                        key={index}
                        style={{
                            background:"#1e293b",
                            padding:"20px",
                            borderRadius:"15px",
                            marginBottom:"25px"
                        }}
                    >

                        <h3>

                            {index+1}. {question.question}

                        </h3>

                        <br />

                        {question.options.map((option)=>(
                     <label
    key={option}
    style={{
        display:"block",
        marginBottom:"10px",
        cursor:"pointer"
    }}
>

    <input
        type="radio"
        name={`question-${index}`}
        value={option}
        checked={answers[index]===option}
        onChange={()=>
            selectAnswer(index,option)
        }
    />

    {" "}

    {option}

</label>

))}
<button
    style={{
        marginTop:"30px",
        padding:"15px 35px",
        fontSize:"18px",
        border:"none",
        borderRadius:"12px",
        cursor:"pointer",
        background:"#d946ef",
        color:"white",
        fontWeight:"bold"
    }}
    onClick={() => {

        let score = 0;

        linuxFinalExam.forEach((question,index)=>{

            if(
                answers[index] === question.answer
            ){
                score++;
            }

        });

        const percentage =
            Math.round(
                (score / linuxFinalExam.length) * 100
            );

        if(percentage >= 70){

            alert(
                `🎉 Congratulations!\n\nScore: ${percentage}%`
            );

localStorage.setItem(

    "linuxCertificate",

    JSON.stringify({

        title: "Linux Fundamentals",

        date: new Date().toLocaleDateString(),

        xp: 1200,

        course: "linux"

    })

);













            navigate("/academy/linux/certificate");

        }else{

            alert(
                `❌ You scored ${percentage}%\n\nYou need at least 70% to pass.`
            );

        }

    }}
>

    Submit Exam

</button>
</div>

))}
                   </div>

        </>

    );

}

export default LinuxFinalExam;