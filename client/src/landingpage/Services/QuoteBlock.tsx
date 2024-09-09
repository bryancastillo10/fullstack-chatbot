const QuoteBlock = () => {
    return (
      <article className="flex flex-col w-fit lg:flex-row gap-4 lg:gap-0 justify-center items-center">
          <div>
              <img 
                  className="rounded-full p-2"
                  src="https://i.pravatar.cc/150?img=63" 
                  alt="CEO-profile" 
                  />
          </div>
          <div className="my-2 basis-[70%]">
              <p className="text-center xl:text-balance text-xs xl:text-sm mb-4 w-[90%] lg:mx-0 mx-auto">"At EnviroTech, our mission is to empower businesses and communities to thrive in harmony with the environment. 
                  Sustainable practices are not just an option; they are our responsibility. Together, we can create a healthier planet 
                  for future generations."
              </p>
              <div className="text-center mb-4">
                  <h1 className="font-semibold text-base underline">John Doe</h1>
                  <p className="italic font-comfortaa text-xs">CEO of Envirotech</p>
              </div>
          </div>
      </article>
    )
  }
  
  export default QuoteBlock;