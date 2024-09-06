
interface SectionSubHeaderProps{
    title:string;
}

const SectionSubHeader = ({title}:SectionSubHeaderProps) => {
  return (
    <h1 className="font-comfortaa font-semibold mt-2 text-center lg:text-left">{title}</h1>
  )
}

export default SectionSubHeader;
