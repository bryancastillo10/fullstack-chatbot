interface TimeSelectorProps{
    timeSlots:string[];
    selectedSlot: string| null;
    onSelect: (slot:string) => void;
}

const TimeSelector = ({
    timeSlots,
    selectedSlot,
    onSelect
}:TimeSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
        {timeSlots.map((slot)=>(
                <div
                    key={slot}
                    onClick={() => onSelect(slot)}
                    className={`m-4 cursor-pointer border border-black w-fit px-3 py-2 shadow-md rounded-2xl transition-colors duration-200 
                    ${selectedSlot === slot
                        ? 'bg-secondary text-primary'
                        : 'bg-cream text-black hover:bg-secondary hover:text-primary'
                    }`}
                  >
                    {slot}
                </div>
        ))}
    </div>
  )
}

export default TimeSelector;
