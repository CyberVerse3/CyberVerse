import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CryptographyCourse() {

    const navigate = useNavigate();

    return (

        <>

            <Navbar />

            <div className="course-page">

                <div className="course-header">

                    <h1>🔐 Cryptography</h1>

                    <p>

                        Learn encryption, hashing, digital signatures,
                        certificates and modern cryptography used in
                        cybersecurity.

                    </p>

                </div>

                <div className="course-info">

                    <div className="info-card">

                        <h2>📖 Lessons</h2>

                        <h1>10</h1>

                    </div>

                    <div className="info-card">

                        <h2>⭐ XP</h2>

                        <h1>1030</h1>

                    </div>

                    <div className="info-card">

                        <h2>🎯 Difficulty</h2>

                        <h1>Intermediate</h1>

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
                            navigate("/academy/crypto/lesson/1")
                        }
                    >

                        🚀 Start Course

                    </button>

                </div>

            </div>

        </>

    );

}

export default CryptographyCourse;