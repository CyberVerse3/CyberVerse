import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ForensicsCourse() {

    const navigate = useNavigate();

    return (

        <>

            <Navbar />

            <div className="course-page">

                <div className="course-header">

                    <h1>🕵️ Digital Forensics</h1>

                    <p>

                        Learn digital investigations, evidence collection,
                        disk forensics, memory analysis and incident response.

                    </p>

                </div>

                <div className="course-info">

                    <div className="info-card">

                        <h2>📖 Lessons</h2>

                        <h1>10</h1>

                    </div>

                    <div className="info-card">

                        <h2>⭐ XP</h2>

                        <h1>1110</h1>

                    </div>

                    <div className="info-card">

                        <h2>🎯 Difficulty</h2>

                        <h1>Advanced</h1>

                    </div>

                </div>

                <div
                    style={{
                        textAlign:"center",
                        marginTop:"50px"
                    }}
                >

                    <button
                        className="start-course-btn"
                        onClick={() =>
                            navigate("/academy/forensics/lesson/1")
                        }
                    >

                        🚀 Start Course

                    </button>

                </div>

            </div>

        </>

    );

}

export default ForensicsCourse;