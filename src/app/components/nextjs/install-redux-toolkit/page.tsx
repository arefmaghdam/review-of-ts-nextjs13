import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const InstallReduxToolkit: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // state management in react apps in most important and this task is possible using context and redux
    // but that is very simple using redux toolkit, so we want to install redux toolkit in this section
    // whole of the state management is related to react but not next.js, way of execution of app is related to next.js
    // next.js hasnt effect in UI, so UI is related to react
    // difference between redux and redux toolkit is simplicity, working with redux toolkit is very simple because of simple configuration
    // when we use context or redux toolkit? if our app is very complex and has very nested features we should use redux or redux toolkit
    // redux or redux toolkit transfer datas from children to parent and from parent to children
    // how to install? npm install --save @reduxjs/toolkit react-redux
      `}
      />
    </div>
  );
};

export default InstallReduxToolkit;
