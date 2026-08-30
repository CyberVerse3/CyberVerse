import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ReverseCourse() {

    const navigate = useNavigate();

    return (

        <>

            <Navbar />

            <div className="course-page">

                <div className="course-header">

                    <h1>⚙️ Reverse Engineering</h1>

                    <p>

                        Learn binary analysis, assembly language,
                        debugging, malware analysis and reverse
                        engineering techniques.

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
                        textAlign: "center",
                        marginTop: "50px"
                    }}
                >

                    <button
                        className="start-course-btn"
                        onClick={() =>
                            navigate("/academy/reverse/lesson/1")
                        }
                    >

                        🚀 Start Course

                    </button>

                </div>

            </div>

        </>

    );

}

export default ReverseCourse;