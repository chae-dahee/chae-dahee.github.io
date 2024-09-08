import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-bg">{children}</div>
      <Footer />
    </>
  );
}
