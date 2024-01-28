import React, { FC } from "react";
// import styles from "../../../styles/Home.module.css";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const NextJS13Review: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL="../../../../images/Link-component.png"
        content={`
    // next.js 13.4 is a stable version of next.js 13 and one of the most important features in next.js 13 is app router
    // app router includes below concepts:
    // 1 react server components
    // 2 nested routes and layouts
    // 3 simplified data fetching
    // 4 streaming and suspense
    // 5 built-in SEO support
    // next.js 13 includes some more important features as below:
    // 1 routing => A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
    // 2 rendering => Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the
    // server with Next.js. Streaming on Edge and Node.js runtimes.
    // 3 data fetching => Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.
    // 4 styling => Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
    // 5 optimization => Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
    // 6 typescript => Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.
    // we can use both of app router and page router 
      `}
      />
    </div>
  );
};

export default NextJS13Review;
