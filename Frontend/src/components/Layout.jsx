import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
