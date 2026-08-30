import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function PythonCourse() {

    const navigate = useNavigate();

    return (

        <>

            <Navbar />

            <div className="course-page">

                <div className="course-header">

                    <h1>🐍 Python for Cybersecurity</h1>

                    <p>

                        Learn Python from scratch and use it for
                        cybersecurity, automation and ethical hacking.

                    </p>

                </div>

                <div className="course-info">

                    <div className="info-card">

                        <h2>📖 Lessons</h2>

                        <h1>10</h1>

                    </div>

                    <div className="info-card">

                        <h2>⭐ XP</h2>

                        <h1>1020</h1>

                    </div>

                    <div className="info-card">

                        <h2>🎯 Difficulty</h2>

                        <h1>Beginner</h1>

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
                            navigate("/academy/python/lesson/1")
                        }
                    >

                        🚀 Start Course

                    </button>

                </div>

            </div>

        </>

    );

}

export default PythonCourse;