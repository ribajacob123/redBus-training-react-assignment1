import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles/DatePicker.css";

import "react-datepicker/dist/react-datepicker.css";

//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatePick = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="datePicker"
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="ENTER DATE"
      withPortal
    />
  );
};

export default DatePick;
