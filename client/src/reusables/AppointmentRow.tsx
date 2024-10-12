import { Icon } from "@phosphor-icons/react";

interface AppointmentRowProps {
  icon: Icon;
  label: string;
  value: string;
}

const AppointmentRow = ({ icon: Icon, label, value }: AppointmentRowProps) => {
  return (
    <div className="grid grid-cols-2 items-center space-y-2">
      <p className="flex items-center font-semibold gap-x-2">
        {<Icon size={20} />} {label}
      </p>
      <p className="italic">{value}</p>
    </div>
  );
};

export default AppointmentRow;
