import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import webFinalExam from "../academy/quizzes/webFinalExam";

function WebFinalExam() {

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

                <h1>🕷️ Web Security Final Exam</h1>

                <p>

                    Answer all questions to earn your certificate.

                </p>

                <br />

                {webFinalExam.map((question,index)=>(

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

                    </div>

                ))}

                <button
                    style={{
                        marginTop:"30px",
                        padding:"15px 35px",
                        fontSize:"18px",
                        border:"none",
                        borderRadius:"12px",
                        cursor:"pointer",
                        background:"#2563eb",
                        color:"white",
                        fontWeight:"bold"
                    }}
                    onClick={() => {

                        let score = 0;

                        webFinalExam.forEach((question,index)=>{

                            if(
                                answers[index] === question.answer
                            ){
                                score++;
                            }

                        });

                        const percentage =
                            Math.round(
                                (score / webFinalExam.length) * 100
                            );

                        if(percentage >= 70){

                            alert(
                                `🎉 Congratulations!\n\nScore: ${percentage}%`
                            );

                            localStorage.setItem(

                                "webCertificate",

                                JSON.stringify({

                                    title: "Web Security",

                                    date: new Date().toLocaleDateString(),

                                    xp: 1800,

                                    course: "web"

                                })

                            );

                            navigate("/academy/web/certificate");

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

        </>

    );

}

export default WebFinalExam;