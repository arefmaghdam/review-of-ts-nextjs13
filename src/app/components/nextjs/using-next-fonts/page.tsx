import React, { FC } from "react";
// import styles from "../../../styles/Home.module.css";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const UsingNextFonts: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // next/font will automatically optimize your fonts (including custom fonts) and
    // remove external network requests for improved privacy and performance.
    // next/font includes built-in automatic self-hosting for any font file. This means
    // you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used.
    // This new font system also allows you to conveniently use all Google Fonts with performance 
    // and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your 
    // static assets. No requests are sent to Google by the browser.
    // Local Fonts
    // Import next/font/local and specify the src of your local font file. We recommend using variable fonts for 
    // the best performance and flexibility.

    // first we install next/font package using below command:
    // npm install @next/font
    // then we create a folder named fonts into public folder and paste custom font into fonts folder
    // now in layout.js: 
    // import localFont from "@next/font/local"
    // metadata codes ...
    // const vazirFont = localFont({
    //     src: "../public/fonts/Vazirmatn-Regular.woff2"
    // })
    // export default function RootLayout({children}) {
        return (
            <html lang="en" className={vazirFont.className}>
                <body>{children}</body>
            </html>
        )
    }

    based on next.js Docs:

    // import localFont from 'next/font/local'
 
    // Font files can be colocated inside of 'app'
    const myFont = localFont({
      src: './my-font.woff2',
      display: 'swap',
    })
    
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en" className={myFont.className}>
          <body>{children}</body>
        </html>
      )
    }

    // If you want to use multiple files for a single font family, src can be an array:

    const roboto = localFont({
        src: [
          {
            path: './Roboto-Regular.woff2',
            weight: '400',
            style: 'normal',
          },
          {
            path: './Roboto-Italic.woff2',
            weight: '400',
            style: 'italic',
          },
          {
            path: './Roboto-Bold.woff2',
            weight: '700',
            style: 'normal',
          },
          {
            path: './Roboto-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
          },
        ],
      })

      `}
      />
    </div>
  );
};

export default UsingNextFonts;
