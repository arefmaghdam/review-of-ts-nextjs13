import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const Vite: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to use typescript in our projects and when our projects are very big and complex we have a problem in version coordination, that means our packages and typescript version confilict
    // for solve this problem we can use vite package that solve version confilicts and create a typescript project for us correctly
    // installation: 
    // go to vitejs.dev website and run their commant to install vite:

        npm create vite@latest
    
    // enter your project name as project folder and select yout framework that we select vanilla and then typescripe
    // other commands:

        cd projectName or projectFolder
        npm install

    // execution:

        npm run dev

    // then click on local url that give you and our app open
    // project structure:
    // node-modules => our packages that we dont change that
    // public => is static files folder that serve
    // src/main.ts => our app entry point file
    // index.html => our main file that uses from main.ts contents
    // tsconfig.json => typescript config file
    // package.json and package-lock.json => our app packages epesifications
      `}
      />
    </div>
  );
};

export default Vite;
