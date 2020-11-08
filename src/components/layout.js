import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
<<<<<<< HEAD
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />

        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>

        <footer className="bg-blue-700">
          <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
            <p className="text-white">
              Created by{` `}
              <a
                className="font-bold no-underline"
                href="https://bryant.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Taylor Bryant
              </a>
            </p>

            <p>
              <a
                className="font-bold text-white no-underline"
                href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>

          </nav>
        </footer>
      </div>
=======
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      {/* <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main> */}
      <main className=" flex-1 w-full ">
        {children}
      </main>

      <footer className="bg-custom-100">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Made for{` `}
            <a
              className="font-bold no-underline"
              href="https://boston.techtogether.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              TechTogether Boston
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/kcherrera/monji"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
>>>>>>> 3a8084b9582a8c54a010a7154b52a0666550756f
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
