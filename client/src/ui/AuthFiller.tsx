import { ReactNode } from "react";

interface AuthFillerProps{
    header: ReactNode;
    firstImage: string;
    secondImage:string;
    contents: ReactNode;
}

const AuthFiller = ({header,firstImage,secondImage, contents}:AuthFillerProps) => {
  return (
    <article className="grid grid-cols-2 gap-4 w-[90%] rounded-2xl shadow-md border bg-cream border-black">
    <div className="col-span-2 order-2 lg:order-none lg:col-span-1 flex justify-center items-start  lg:items-center">
      {header}
    </div>
    {/* First Image */}
    <div className="flex md:justify-center lg:justify-end items-center">
      <img src={firstImage} alt="filler-image1" className="xl:ml-8 object-cover rounded-tl-2xl 
      md:rounded-none lg:rounded-tr-2xl" />
    </div>

    {/* Second Image */}
    <div className="flex xl:row-start-2 justify-center lg:justify-start items-center">
      <img src={secondImage} alt="filler-image2" className="object-cover  lg:rounded-bl-2xl" />
    </div>

    <div className="col-span-2 order-3 lg:order-none lg:col-span-1 flex justify-center items-start lg:items-center mb-4">
      {contents}
    </div>
  </article>
  )
}

export default AuthFiller;
