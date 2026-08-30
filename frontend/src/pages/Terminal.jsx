`jsx`
import Navbar from "../components/Navbar";
import CyberTerminal from "../components/terminal/CyberTerminal";

import "../styles/Terminal.css";

function Terminal() {
    return (
        <>
            <Navbar />

            <main className="terminal-page">

                {/* =========================
                    PAGE HEADER
                ========================= */}

                <div className="terminal-page-header">

                    <div>

                        <span className="terminal-label">
                            CYBERVERSE TERMINAL
                        </span>

                        <h1>
                            🖥️ Cyber Terminal
                        </h1>

                        <p>
                            Practice Linux commands in a safe
                            cybersecurity environment.
                        </p>

                    </div>

                </div>


                {/* =========================
                    TERMINAL
                ========================= */}

                <CyberTerminal />

            </main>
        </>
    );
}

export default Terminal;

