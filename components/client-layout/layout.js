import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F7F7F7" }}>{children}</main>
      <Footer />
    </>
  );
}
