import "./PremiumCertificate.css";

function PremiumCertificate() {

    const user =
        JSON.parse(
            localStorage.getItem("cyberverseUser")
        ) || {};

    const xp =
        Number(
            localStorage.getItem("xp")
        ) || 0;

    const level =
        Math.floor(xp / 500) + 1;

    const course =
        "Linux Fundamentals";

    const issueDate =
        new Date().toLocaleDateString();

    const certificateId =
        "CV-" +
        Math.random()
            .toString(36)
            .substring(2,10)
            .toUpperCase();

    return (

        <div className="premium-page">

            <div className="background-stars">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

            <div className="premium-certificate">

                <div className="animated-border"></div>

                <div className="certificate-content">

                    <div className="top-title">

                        <h3>

                            ★ CYBERVERSE ACADEMY ★

                        </h3>

                        <h1>

                            CERTIFICATE

                        </h1>

                        <h2>

                            OF COMPLETION

                        </h2>

                    </div>

                    <div className="certificate-center">

                        <p>

                            This certificate is proudly presented to

                        </p>

                        <h1 className="premium-name">

                            {user.name || "Cyber Student"}

                        </h1>

                        <p>

                            For successfully completing

                        </p>

                        <h2 className="premium-course">

                            {course}

                        </h2>

                        <p>

                            with outstanding performance
                            in Cyber Security training
                            and practical laboratories.

                        </p>

                    </div>

                    <div className="certificate-info">

                        <div>

                            <h4>⭐ XP</h4>

                            <p>

                                {xp}

                            </p>

                        </div>

                        <div>

                            <h4>🏆 Level</h4>

                            <p>

                                {level}

                            </p>

                        </div>

                        <div>

                            <h4>📅 Date</h4>

                            <p>

                                {issueDate}

                            </p>

                        </div>

                    </div>
                                        <div className="certificate-bottom">

                        <div className="signature-section">

                            <div className="signature">

                                <h2>

                                    CyberVerse Founder

                                </h2>

                                <p>

                                    Chief Executive Officer

                                </p>

                            </div>

                        </div>

                        <div className="gold-seal">

                            <div className="seal-inner">

                                🏆

                            </div>

                        </div>

                    </div>

                    <div className="certificate-id">

                        <h3>

                            Certificate ID

                        </h3>

                        <p>

                            {certificateId}

                        </p>

                    </div>

                    <div className="certificate-buttons">

                        <button
                            onClick={() => window.print()}
                        >

                            🖨 Print

                        </button>

                        <button>

                            📄 Download PDF

                        </button>

                        <button>

                            📤 Share

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PremiumCertificate;