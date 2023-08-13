import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="text-2xl font-semibold">TrustAuthX</span>,

  project: {
    link: "https://github.com/One-Click-Auth/Docs",
  },

  chat: {
    link: "https://discord.gg/5wAVfW8c",
  },

  docsRepositoryBase: "https://github.com/One-Click-Auth/Docs/tree/main/",

  footer: {
    text: (
      <span>
        Made with ❤ by the team at{" "}
        <a className="underline " href="https://github.com/One-Click-Auth/">
          @TrustAuthX.
        </a>
      </span>
    ),
  },

  editLink: {
    text: <div className="text-lg">Edit this page</div>,
  },

  feedback: {
    content: <div className="text-lg">Question? Give us feedback →</div>,
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – TrustAuthX",
    };
  },

  primaryHue: 83,

  search: {
    placeholder: "Search documentation...",
  },
};

export default config;
