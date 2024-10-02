import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: Range;
  onChange: (ranges: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar = ({
  value,
  onChange,
  disabledDates
}: CalendarProps) => {
  return (
    <DateRange
      className="custom-calendar"
      rangeColors={["#0E8173"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />

  );
}; 

export default Calendar;