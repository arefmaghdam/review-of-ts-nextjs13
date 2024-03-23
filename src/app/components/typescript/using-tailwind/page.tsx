import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const UsingTailwind: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // tailwind is a css framework for UI styling, we dont can compare tailwind with bootstrap because bootstrap is very wide and tailwind contain from css simple classes but not complex components
    // installation and using:
    // enter tailwindcss.com and click on the get started and click on the framework guides and click on the vite 
    // installation command:

        npm install -D postcss autoprefixer

    // initialization command:

        npx tailwindcss init -p

    // go to the tailwind.config.js and enter the below changes:

        content: ['./index.html', './src/**/*.{js, ts, jsx, tsx}']

    // we create src/index.css file and enter below changes in it:

        @tailwind base;
        @tailwind components
        @tailwind utilities

    // go to the main.ts file and import tailwind and use:

        import "./index.css"

      `}
      />
    </div>
  );
};

export default UsingTailwind;
