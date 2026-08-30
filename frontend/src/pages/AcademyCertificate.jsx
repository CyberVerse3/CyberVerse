import Navbar from "../components/Navbar";
import "../styles/AcademyCertificate.css";
import signature from "../assets/signature.png";
function AcademyCertificate() {

    const certificateID =
        "CV-" +
        new Date().getFullYear() +
        "-" +
        Math.random().toString(36).substring(2,8).toUpperCase();

    const date =
        new Date().toLocaleDateString();

    const username =
        localStorage.getItem("username") ||
        "CyberVerse Student";

    return (

        <>

            <Navbar />

            <div className="logo">

    🛡️

</div>

            <div className="certificate-page">

                <div className="certificate">

                    <h3 className="academy">

    CYBERVERSE

</h3>

<h1>

    Academy Graduation Certificate

</h1>

                    <p>

                        This certificate is proudly presented to

                    </p>

                    <h2 className="student">

                        {username}

                    </h2>

                    <p>

                        For successfully completing all academy courses
                        and passing the comprehensive CyberVerse Final Exam.

                    </p>

                    <div className="courses">

                        <span>🐧 Linux</span>

                        <span>🌐 Networking</span>

                        <span>🌍 Web Security</span>

                        <span>🐍 Python</span>

                        <span>🔐 Cryptography</span>

                        <span>⚙️ Reverse Engineering</span>

                        <span>🕵️ Digital Forensics</span>

                    </div>

                    <div className="info">

                        <div>

                            <strong>Date</strong>

                            <br />

                            {date}

                        </div>

                        <div>

                            <strong>Certificate ID</strong>

                            <br />

                            {certificateID}

                        </div>

                    </div>


<div className="seal">

    🏅

    <h3>

        VERIFIED
        <br />
        GRADUATE

    </h3>

</div>

                 <div className="signature">

    <img
        src={signature}
        alt="Signature"
        className="signature-image"
    />

    <h3>

        Assal Alnuaimi

    </h3>

    <p>

        Founder & CEO

    </p>

    <span>

        CyberVerse Academy

    </span>

</div>

<div className="certificate-buttons">

    <button
        className="download-btn"
        onClick={() => window.print()}
    >
        📥 Download Certificate
    </button>

</div>



                </div>

            </div>

        </>

    );

}

export default AcademyCertificate;