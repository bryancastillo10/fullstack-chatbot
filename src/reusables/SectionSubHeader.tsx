interface SectionSubHeaderProps{
    title:string;
    caption?:string;
}

const SectionSubHeader = ({title,caption}:SectionSubHeaderProps) => {
  return (
    <>
    <h1 className="font-comfortaa font-semibold mt-2 text-center lg:text-left">{title}</h1>
        {caption && (<div className="mt-6 xl:mt-10 mb-6">
            <p className="font-semibold tracking-wider text-[20px] xl:text-[25px] text-center lg:text-left">
                {caption}
            </p>
        </div>)}
    </>
  )
}

export default SectionSubHeader;
