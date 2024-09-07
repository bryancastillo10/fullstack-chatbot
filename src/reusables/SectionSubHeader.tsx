interface SectionSubHeaderProps{
    title:string;
    caption?:string;
}

const SectionSubHeader = ({title,caption}:SectionSubHeaderProps) => {
  return (
    <>
    <h1 className="font-comfortaa font-semibold mt-2 text-center lg:text-left">{title}</h1>
        {caption && (<div className="my-6 mx-auto xl:max-w-[80%] xl:mx-0">
            <p className="font-semibold tracking-wider text-[20px] xl:text-[25px] text-center lg:text-left">
                {caption}
            </p>
        </div>)}
    </>
  )
}

export default SectionSubHeader;
