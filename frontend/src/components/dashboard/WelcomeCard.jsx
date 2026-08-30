function WelcomeCard({ user }) {
  return (
    <>
      <h1>
        Welcome {user?.name} 👋
      </h1>

      <p>
        Your CyberVerse Learning Dashboard
      </p>
    </>
  );
}

export default WelcomeCard;