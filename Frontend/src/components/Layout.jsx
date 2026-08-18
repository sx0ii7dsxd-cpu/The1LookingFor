import Navbar from "./Navbar";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import Footer from "./Footer";

function Layout({ children, variant }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const isAuthenticatedPath =
    variant === "authenticated" ||
    path.startsWith("/candidate") ||
    path.startsWith("/hirer") ||
    path === "/profile" ||
    path === "/settings";

  return (
    <div className="site-wrapper">
      {isAuthenticatedPath ? <AuthenticatedNavbar /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
