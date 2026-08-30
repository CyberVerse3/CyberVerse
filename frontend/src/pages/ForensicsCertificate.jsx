import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";


function ForensicsCertificate() {


    const navigate = useNavigate();


    const [certificate, setCertificate] = useState(null);



    useEffect(() => {


        const data =

            localStorage.getItem(
                "forensicsCertificate"
            );



        if(data){

            setCertificate(
                JSON.parse(data)
            );

        }


    }, []);





    if(!certificate){


        return (

            <>

                <Navbar />


                <div

                    style={{

                        color:"white",

                        textAlign:"center",

                        marginTop:"100px"

                    }}

                >


                    <h2>

                        ❌ No Certificate Found

                    </h2>


                    <button

                        onClick={()=>navigate(
                            "/academy/forensics/final"
                        )}

                    >

                        Go To Exam

                    </button>


                </div>


            </>

        );


    }






    return (


        <>


            <Navbar />



            <div

                style={{

                    maxWidth:"900px",

                    margin:"60px auto",

                    padding:"50px",

                    background:"#0f172a",

                    border:"3px solid #38bdf8",

                    borderRadius:"25px",

                    color:"white",

                    textAlign:"center",

                    boxShadow:
                    "0 0 30px rgba(56,189,248,0.4)"

                }}

            >



                <h1>

                    🏆 CyberVerse Academy

                </h1>




                <h2>

                    Certificate of Completion

                </h2>



                <br />



                <p>

                    This certificate is proudly presented to

                </p>




                <h1

                    style={{

                        color:"#38bdf8"

                    }}

                >

                    CyberVerse Student

                </h1>





                <p>

                    For successfully completing

                </p>




                <h2>

                    🕵️ {certificate.title}

                </h2>





                <br />



                <div>


                    <p>

                        ⭐ XP Earned: {certificate.xp}

                    </p>



                    <p>

                        📅 Date: {certificate.date}

                    </p>



                    <p>

                        🛡️ Course:

                        {" "}

                        {certificate.course}

                    </p>


                </div>





                <br />





                <button

                    style={{

                        padding:"15px 35px",

                        borderRadius:"12px",

                        border:"none",

                        cursor:"pointer",

                        background:"#2563eb",

                        color:"white",

                        fontWeight:"bold",

                        fontSize:"16px"

                    }}



                    onClick={()=>window.print()}

                >

                    🖨️ Print Certificate

                </button>





                <br />
                <br />





                <button

                    style={{

                        padding:"12px 30px",

                        borderRadius:"10px",

                        cursor:"pointer"

                    }}


                    onClick={()=>navigate(
                        "/academy"
                    )}

                >

                    Back To Academy

                </button>





            </div>



        </>


    );


}



export default ForensicsCertificate;