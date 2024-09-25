import { Input } from "../../reusables";
import { Cloud } from "@phosphor-icons/react";

const Appointments = () => {
  return (
    <section className="grid grid-cols-2">
        <div className="border border-black">
          <h1 className="font-semibold text-2xl my-2">Book an Appointment</h1>
          <form action="">
            <Input 
              id="topic" 
              type="text"
              label="Topic" 
              icon={Cloud}
              onChange={()=>{}} 
              />
              {/* Message : TextArea */}

              {/* Service : Select */}

              {/* Consultant: Select */}

              {/* Appointment Time */}
              <div className="m-4 border border-black bg-secondary text-primary
              w-fit px-3 py-2 shadow-md rounded-2xl">
                10:00 am to 11:00 am
              </div>
          </form>
        </div>
        <div className="">
          <h1>Aside section</h1>
        </div>
    </section>
  )
}

export default Appointments;
