import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function NetworkingCertificate() {

    const navigate = useNavigate();

    const certificate =
        JSON.parse(
            localStorage.getItem("networkingCertificate")
        );

    if (!certificate) {

        return (

            <>
                <Navbar />

                <div
                    style={{
                        textAlign: "center",
                        color: "white",
                        marginTop: "120px"
                    }}
                >
                    <h1>No Certificate Found</h1>

                    <button
                        onClick={() => navigate("/academy/networking")}
                        style={{
                            marginTop: "30px",
                            padding: "15px 35px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            background: "#2563eb",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        Back to Course
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
                    maxWidth: "900px",
                    margin: "60px auto",
                    padding: "50px",
                    background: "#ffffff",
                    color: "#111827",
                    borderRadius: "25px",
                    textAlign: "center",
                    boxShadow: "0 20px 40px rgba(0,0,0,.3)"
                }}
            >

                <h1 style={{ fontSize: "50px" }}>
                    🏆 Certificate
                </h1>

                <br />

                <h2>
                    This Certificate is Awarded To
                </h2>

                <h1
                    style={{
                        color: "#2563eb",
                        marginTop: "20px"
                    }}
                >
                    CyberVerse Student
                </h1>

                <br />

                <p style={{ fontSize: "22px" }}>
                    For Successfully Completing
                </p>

                <h2
                    style={{
                        color: "#059669",
                        marginTop: "20px"
                    }}
                >
                    {certificate.title}
                </h2>

                <br />

                <p>
                    📅 {certificate.date}
                </p>

                <p>
                    ⭐ {certificate.xp} XP
                </p>

                <br />

                <button
                    onClick={() => window.print()}
                    style={{
                        padding: "15px 35px",
                        border: "none",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "#2563eb",
                        color: "white",
                        fontWeight: "bold",
                        marginRight: "15px"
                    }}
                >
                    🖨 Print Certificate
                </button>

                <button
                    onClick={() => navigate("/profile")}
                    style={{
                        padding: "15px 35px",
                        border: "none",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background: "#16a34a",
                        color: "white",
                        fontWeight: "bold"
                    }}
                >
                    👤 Go to Profile
                </button>

            </div>

        </>

    );

}

export default NetworkingCertificate;