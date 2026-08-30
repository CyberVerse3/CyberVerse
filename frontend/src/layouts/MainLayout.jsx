import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div className="page-content">
        {children}
      </div>
    </>
  );
}

export default MainLayout;