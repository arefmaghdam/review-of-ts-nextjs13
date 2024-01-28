import React, { FC } from "react";
// import styles from "../../../styles/Home.module.css";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const InstallNextJSApp: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // to install next.js, we have 2 way: automaticly install 2 manually install
    // System Requirements:
    // Node.js 18.17 or later.
    // macOS, Windows (including WSL), and Linux are supported.
    // 1 automaticly install:
    // npx create-next-app@version
    // What is your project named? my-app
    // Would you like to use TypeScript? Yes
    // Would you like to use ESLint? Yes
    // Would you like to use Tailwind CSS? Yes
    // Would you like to use 'src/' directory? Yes
    // Would you like to use App Router? (recommended) Yes
    // Would you like to customize the default import alias (@/*)? No
    // What import alias would you like configured? @/*
    // 2 manually install:
    // npm install next@latest react@latest react-dom@latest
    // Open your package.json file and add the following scripts:
    //  {
    //    "scripts": {
    //      "dev": "next dev",
    //      "build": "next build",
    //      "start": "next start",
    //      "lint": "next lint"
    //    }
    //  }
    // These scripts refer to the different stages of developing an application:
    // dev: runs next dev to start Next.js in development mode.
    // build: runs next build to build the application for production usage.
    // start: runs next start to start a Next.js production server.
    // lint: runs next lint to set up Next.js' built-in ESLint configuration.
    // for run this app: npm run dev
      `}
      />
    </div>
  );
};

export default InstallNextJSApp;
