import { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full flex flex-col'>
      {children}
      <NavBar />
    </div>
  );
};

export default MainContainer;
