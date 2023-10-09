import "./globals.css";
import NewNavbar from "./components/Navbar";
import Footer from "./components/footer";
import Provider from "./components/provider";

export const metadata = {
  title: "DelTech MUN",
  description:
    "DelTech MUN and Debating society, the oldest debating society in DTU, is a collection of discussing enthusiasts spread out across both verticals of the University, the Main Campus, and the University School of Management & Entrepreneurship (East Campus).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/dlt_a_(white).png" />
      </head>
      <body>
        <Provider>
          <NewNavbar></NewNavbar>
          {children}
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
