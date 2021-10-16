import { Copyright } from "../copyright";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <Copyright /> */}
    </>
  );
}
