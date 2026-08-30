import Navbar from "../components/Navbar";

function ReverseCertificate() {

    const certificate =
        JSON.parse(
            localStorage.getItem("reverseCertificate")
        );

    if (!certificate) {

        return (

            <>
                <Navbar />

                <div
                    style={{
                        textAlign: "center",
                        color: "white",
                        marginTop: "100px"
                    }}
                >

                    <h1>No Certificate Found</h1>

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
                    margin: "50px auto",
                    padding: "40px",
                    border: "4px solid gold",
                    borderRadius: "20px",
                    textAlign: "center",
                    background: "#111827",
                    color: "white"
                }}
            >

                <h1>🏆 Certificate of Completion</h1>

                <br />

                <h2>{certificate.title}</h2>

                <br />

                <p>

                    Successfully completed the

                    <b> Reverse Engineering </b>

                    course.

                </p>

                <br />

                <h3>

                    Date: {certificate.date}

                </h3>

                <h3>

                    XP Earned: {certificate.xp}

                </h3>

            </div>

        </>

    );

}

export default ReverseCertificate;