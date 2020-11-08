import React from "react";

import Layout from "../components/layout";
import womenIllustration from "../images/womenIllustration.png";

function IndexPage() {
  return (
    <Layout>

      <section className="text-center">
        <img
          alt="Women gathering for teamwork"
          className="block w-1/2 mx-auto mb-8"
          src={womenIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
