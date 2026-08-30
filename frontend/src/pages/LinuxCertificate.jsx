import Navbar from "../components/Navbar";

function LinuxCertificate() {

    return (

        <>

            <Navbar />

            <div
                style={{
                    maxWidth:"900px",
                    margin:"60px auto",
                    padding:"50px",
                    borderRadius:"20px",
                    background:"#1e293b",
                    color:"white",
                    textAlign:"center"
                }}
            >

                <h1>🏆 Certificate of Completion</h1>

                <br />

                <h2>

                    Linux Fundamentals

                </h2>

                <br />

                <p>

                    Congratulations!

                </p>

                <p>

                    You have successfully completed
                    the Linux Fundamentals course.

                </p>

                <br />

                <h3>

                    ⭐ Reward: +1200 XP

                </h3>

                <br />

                <button
                    onClick={() => window.print()}
                    style={{
                        padding:"15px 35px",
                        border:"none",
                        borderRadius:"10px",
                        background:"#d946ef",
                        color:"white",
                        cursor:"pointer",
                        fontWeight:"bold"
                    }}
                >

                    🖨 Print Certificate

                </button>

            </div>

        </>

    );

}

export default LinuxCertificate;