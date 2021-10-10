import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatePick = (props) => {
  return (
    <DatePicker
      className="datePicker"
      dateFormat="dd/MM/yyyy"
      selected={props.startDate}
      onChange={(date) => props.setStartDate(date)}
      placeholderText="ENTER DATE"
      withPortal
    />
  );
};

export default DatePick;
