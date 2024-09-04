import { ReactNode } from "react";

interface SectionContainerProps{
    children:ReactNode;
}

const SectionContainer = ({children}:SectionContainerProps) => {
  return (
    <div className="max-w-[80%] mx-auto px-4">
      {children}
    </div>
  )
}

export default SectionContainer;
