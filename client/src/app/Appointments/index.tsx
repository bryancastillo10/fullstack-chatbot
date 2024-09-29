import { Input } from "../../reusables";
import { Cloud, BookOpen } from "@phosphor-icons/react";
import CustomSelect from "../../reusables/CustomSelect";

const Appointments = () => {
  const testOptions = [
    {value:"Option 1", label:"Label 1"},
    {value:"Option 2", label:"Label 2"},
    {value:"Option 3", label:"Label 3"},
  ]
   
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
              <CustomSelect
                label="Test Select"
                icon={BookOpen}
                value="Test Value"
                option={testOptions}
                onChange={()=>{}}
                validationMessage="Test message to describe select component"
              />

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
