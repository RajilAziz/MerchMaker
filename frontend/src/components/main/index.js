import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';

import { AccountCircle, ManageAccounts, QueryStats, Dashboard } from "@mui/icons-material";
const Main = () => {

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
      {/* <Sidebar options={options} title={"sidebar"}>
      </Sidebar> */}
      
        <Outlet />
        </div>
  )
}

export default Main