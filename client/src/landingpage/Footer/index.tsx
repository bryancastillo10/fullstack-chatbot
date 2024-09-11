import Logo from "/earth.png";
import { MapPin,Clock } from "@phosphor-icons/react";

interface FooterLinksProps{
  header:string;
  links:string[];
}

const FooterLinks = ({header,links}:FooterLinksProps) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold tracking-wide">{header}</h1>
          <ul className="flex flex-col justify-center text-sm text-center xl:text-nowrap items-center space-y-2 my-4">
              {links.map((link, index)=> (
                <li key={index} className="cursor-pointer hover:text-accent hover:underline">{link}</li>
              ))}
          </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='p-4 w-full bg-secondary text-primary'>
      <section className="grid grid-cols-1 xl:grid-cols-6 gap-4">
        {/* Footer Logo */}
        <div className="hidden xl:flex flex-col justify-center items-center gap-2">
          <img src={Logo} alt="EnviroTech-logo" className="size-20" />
          <h1 className="font-semibold font-quicksand">EnviroTech Inc.</h1>
        </div>
        {/* Footer Links */}
        <div className="col-span-4 grid grid-cols-2 items-start xl:grid-cols-4">
          <FooterLinks
            header="Company"
            links={["About Us", "Our Team", "Careers", "News & Insights", "Contact Us"]}
          />
          <FooterLinks
            header="Services"
            links={[
              "Environmental Impact Assessment",
              "Sustainability Consulting",
              "Waste Management Solutions",
              "Renewable Energy Advisory",
              "Water Quality Testing",
            ]}
          />
          <FooterLinks
            header="Resources"
            links={[
              "Blog",
              "Case Studies",
              "Proposals",
              "Environmental Regulations",
              "Glossary of Terms",
            ]}
          />
          <FooterLinks
            header="Support"
            links={[
              "Help Center",
              "Customer Support",
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
            ]}
          />
        </div>
        {/* Footer Additional Info */}
        <div className="col-span-2 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 
          gap-4 max-w-[50%] md:max-w-[75%] mx-auto xl:mx-0">
          <div className="flex items-center">
            <div className="w-fit mr-2">
              <MapPin className="size-[30px] xl:size-[50px]" />
            </div>
            <div className="min-w-fit">
              <p className="text-xs text-balance">
                1230 Taft Avenue, Ermita, Manila, 1000, Metro Manila, Philippines
              </p>
            </div>
          </div>
          <div className="flex md:justify-end xl:justify-start items-center">
            <div className="w-fit mr-2">
              <Clock className="size-[30px] xl:size-[50px]" />
            </div>
            <div className="min-w-fit">
              <p className="text-xs">Mon to Fri</p>
              <p className="text-xs">9am to 6pm (GMT +8)</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-5 mb-2 w-[90%] mx-auto" />
      <div className="text-center">
        <p className="text-xs">© EnviroTech Inc. All Rights Reserved (2024)</p>
      </div>
    </footer>

  )
}

export default Footer;
