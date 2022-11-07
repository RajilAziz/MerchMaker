import React from "react";
import { Outlet } from "react-router-dom";
// import Navigationbar from "./Navigationbar";
import Sidebar from "./Sidebar";

import { AccountCircle, ManageAccounts, QueryStats, Dashboard } from "@mui/icons-material";

const User = () => {


  const options = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Manage Users",
      icon: <ManageAccounts />,
      link: "/admin/manageuser",
    },
    {
      name: "Manage Query",
      icon: <QueryStats />,
      link: "/admin/managequery",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
  ];

  return (
    <div>
      <Sidebar options={options} title={"sidebar"}>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default User;
