import React from "react";
import "./styles/Bottom.css";
import Tab from "./Tab";
import home from "./images/home.png";
import help from "./images/help.png";
import account from "./images/account.png";
import booking from "./images/booking.png";

function Bottom() {
  const tabinfo = [
    { name: "HOME", image: home },
    { name: "MY BOOKING", image: booking },
    { name: "HELP", image: help },
    { name: "MY ACCOUNT", image: account },
  ];
  let tabs = [];
  for (let i = 0; i < tabinfo.length; i++) {
    tabs.push(<Tab name={tabinfo[i].name} image={tabinfo[i].image} />);
  }
  return <div className="bottom">{tabs}</div>;
}

export default Bottom;
