import React, { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full flex flex-col'>
      {children}
      <div className='mt-auto'>
        <NavBar />
      </div>
    </div>
  );
};

export default MainContainer;
