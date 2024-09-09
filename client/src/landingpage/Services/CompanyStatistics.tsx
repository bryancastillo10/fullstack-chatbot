interface CompanyStatisticsProps{
    figures:string;
    upperCaption:string;
    lowerCaption:string;
    description:string;
}


const CompanyStatistics = ({figures, upperCaption, lowerCaption, description}:CompanyStatisticsProps) => {
  return (
    <section className="flex items-center justify-between">
        <div className="flex flex-col">
            <div className="flex items-baseline">
                <span className="text-[38px] font-semibold">{figures}</span>
                <span className="text-[32px] ml-2 text-accent">{upperCaption}</span>
            </div>
            <span className="text-[32px] text-accent">{lowerCaption}</span>
        </div>
        <div className="ml-4 text-right w-[300px] xl:max-w-[250px]">
        <p className="text-base font-comfortaa">{description}</p>
      </div>
    </section>
  )
}

export default CompanyStatistics;

