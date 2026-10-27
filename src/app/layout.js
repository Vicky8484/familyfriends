import {Gudea} from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const gudea = Gudea({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gudea",
});

export const metadata = {
  title: "Family Friends",
  description:
    "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${gudea.variable} h-full antialiased`}>
      <body className="bg-gray-900">
        <main className="min-h-screen flex flex-col max-w-md m-auto">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
