"use client";

import Navbar from "./Navbar";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default App;
