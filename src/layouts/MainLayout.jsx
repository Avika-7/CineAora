
import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
}

export default MainLayout;

