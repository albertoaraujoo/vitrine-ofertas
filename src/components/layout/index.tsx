import { Poppins } from "next/font/google";
import Header from "../header";
import Footer from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${poppins.className} flex flex-col min-h-screen bg-gray-800 text-white`}
    >
      <Header />
      <main className="flex-1 flex-col items-center bg-gray-800 align-middle px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
