import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../user/UserContext";
import app_config from "../../config";
import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, Campaign, FollowTheSigns } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useEffect, useState } from "react";

const url = app_config.backend_url;
const pages = [
  { name: "Home", link: "/main/home" },
  { name: "Order", link: "/main/order" },
  { name: "My Product", link: "/main/myproduct" },
  { name: "Product", link: "/main/productlisting" },
  // { name: "Why?", link: "/" },
  { name: "Catalog", link: "/catalog" },
  { name: "Pricing", link: "/main/pricing1" },
  // { name: "Contact Us", link: "/main/contact" },
  // { name: "Login", link: "/main/signin" },
];

const Navigationbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  const [adminMenuPos, setAdminMenuPos] = useState(null);
  const [adminMenuPos2, setAdminMenuPos2] = useState(null);

  const { loggedIn, setLoggedIn } = React.useContext(UserContext);

  const user = sessionStorage.getItem("user");
  const admin = sessionStorage.getItem("admin");

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    setCurrentAdmin(JSON.parse(sessionStorage.getItem("admin")));
  }, [user, admin]);

  const navigate = useNavigate();

  const logout = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/main/signin");
  };
  const adminLogout = () => {
    sessionStorage.removeItem("admin");
    navigate("/main/signin");
  };

  const userSetting = [
    { name: "Profile", icon: <AccountCircle />, link: "/user/userrprofile" },
    { name: "Logout", icon: <LogoutIcon />, click: logout },
  ];
  const adminSetting = [
    { name: "Profile", icon: <AccountCircle />, link: "/admin/profile" },
    { name: "Manage Users", icon: <GroupAddIcon />, link: "/admin/manageuser" },
    { name: "Logout", icon: <LogoutIcon />, click: adminLogout },
  ];

  // const { avatar } = React.useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [userMenuPos, setUserMenuPos] = React.useState(null);
  //----- hover effect for MenuItem------
  const boxSX = {
    "&:hover": {
      color: "black",
      backgroundColor: "#b1b0b9",
    },
  };

  const adminOptions = () => {
    if (currentAdmin === null && currentAdmin === null) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Admin Login">
            <IconButton
              onClick={(e) => setAdminMenuPos(e.currentTarget)}
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Button>Admin</Button>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={adminMenuPos}
            open={Boolean(adminMenuPos)}
            onClose={(e) => setAdminMenuPos(null)}
          >
            <MenuItem onClick={(e) => navigate("/main/signin")}>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      );
    } else if (currentAdmin.isAdmin) {
      return (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Settings">
            <IconButton
              onClick={(e) => setAdminMenuPos2(e.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar alt="" src={url + "/" + currentAdmin.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={adminMenuPos2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(adminMenuPos2)}
            onClose={(e) => setAdminMenuPos2(null)}
          >
            {adminSetting.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };
  const UserOptions = () => {
    if (currentUser === null) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tooltip title="User">
            <IconButton
              onClick={(e) => setUserMenuPos(e.currentTarget)}
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Link to="/main/signin">
                <lord-icon
                  src="https://cdn.lordicon.com/hbvyhtse.json"
                  trigger="hover"
                  colors="primary:#e4e4e4"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </Link>
            </IconButton>
          </Tooltip>

          {/* <Menu
            anchorEl={userMenuPos}
            open={Boolean(userMenuPos)}
            onClose={(e) => setUserMenuPos(null)}
          >
            <MenuItem onClick={(e) => navigate("/main/signin")}>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>
          </Menu> */}
        </Box>
      );
    } else {
      return (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography sx={{ color: "white" }}>
                {currentUser.username}
              </Typography>
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt=""
                src={currentUser.avatar ? url + "/" + currentUser.avatar : ""}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userSetting.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };

  return (
    <AppBar position="static" sx={{ background: "#111111" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/main/home">
            <img src={"logo.png"} alt="logo" style={{ width: 40 }} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, link }) => (
                <MenuItem key={name} onClick={(e) => navigate(link)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                justifyContent: "center",
                alignItems: "center",
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map(({ name, link }) => (
              <NavLink
                key={name}
                to={link}
                className="btn mylink mx-1"
                // onClick={(e) => navigate(link)}
                // sx={{
                //   my: 2,
                //   color: "white",
                //   mx: 1,
                //   display: "block",
                //   ...boxSX,
                // }}
              >
                {name}
              </NavLink>
            ))}
            {!loggedIn ? (
              <li className="nav">
                <NavLink className="btn mylink m-3" to="/main/signin">
                  Login Now
                </NavLink>
              </li>
            ) : (
              <NavLink onClick={logout} className="btn btn-danger m-3" to="/">
                Logout
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigationbar;
