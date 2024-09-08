
interface ImageGridProps{
    images:(string | undefined)[];
}

const ImageGrid = ({images}:ImageGridProps) => {
  return ( 
    <section className="mt-16 p-0 xl:p-10 place-items-center items-stretch 
    lg:mt-0 grid grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4 order-1 lg:order-2">
        <div className="row-start-1 row-span-2 col-span-1 xl:col-span-2 ">
            <img src={images[1]} alt={`${images[1]}-path`}  className="size-full  rounded-lg"/>
        </div>
        <div className="row-start-3 row-span-2 col-span-1 xl:col-span-2 ">
            <img src={images[0]} alt={`${images[0]}-path`} className="size-full  rounded-lg" />
        </div>
        <div className="col-span-1 row-span-4 ">
            <img src={images[2]} alt={`${images[2]}-path`} className="w-[60%] mx-auto xl:w-fit lg:h-full "  />
        </div>
    </section>
  )
}

export default ImageGrid;
