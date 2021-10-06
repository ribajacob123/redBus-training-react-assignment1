import React from "react";
import "./styles/Bottom.css";
import Tab from "./Tab";
import home from "./images/home.png";
import help from "./images/help.png";
import account from "./images/account.png";
import booking from "./images/booking.png";

function Bottom() {
  return (
    <div className="bottom">
      <Tab name="HOME" image={home} />
      <Tab name="MY BOOKING" image={booking} />
      <Tab name="HELP" image={help} />
      <Tab name="MY ACCOUNT" image={account} />
    </div>
  );
}

export default Bottom;
