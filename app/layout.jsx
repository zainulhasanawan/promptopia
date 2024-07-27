import "@/app/_styles/globals.css";

import Provider from "./_components/Provider";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navigation />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
