import Navbar from "../components/Navbar";

function Certificate() {

  return (

    <>

      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "60px auto",
          padding: "50px",
          borderRadius: "20px",
          background: "#1e293b",
          color: "white",
          textAlign: "center"
        }}
      >

        <h1>🏆 Certificate of Completion</h1>

        <br />

        <h2>🐧 Linux Fundamentals</h2>

        <br />

        <p>

          Congratulations!

        </p>

        <p>

          You have successfully completed
          the Linux Fundamentals course.

        </p>

        <br />

        <button
          onClick={() => window.print()}
        >

          🖨 Print Certificate

        </button>

      </div>

    </>

  );

}

export default Certificate;