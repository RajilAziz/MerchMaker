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
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../user/UserContext";
// const pages = [
//   { name: "Home", link: "/admin" },
//   { name: "Manage-User", link: "/admin/usermanager" },
//   { name: "Manage-Order", link: "/admin/manageorder" },
//   { name: "Dashboard", link: "/admin/dashboard" },
// ];
// const settings = [
//   { name: "Profile", link: "/admin/profile" },
//   // { name: "Logout", link: "/" },
//   { name: "Logout", icon: <LogoutIcon />, click: adminLogout },
// ];

const AdminNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loggedIn, setLoggedIn } = React.useContext(UserContext);
  const admin = sessionStorage.getItem("admin");
  // const logout = () => {
  //   setAnchorElUser(null);
  //   sessionStorage.removeItem("user");
  //   setLoggedIn(false);
  //   navigate("/main/signin");
  // };
  const adminLogout = () => {
    sessionStorage.removeItem("admin");
    navigate("/main/signin");
  };
  const navigate = useNavigate();
  const pages = [
    { name: "Home", link: "/admin" },
    { name: "Manage-User", link: "/admin/usermanager" },
    { name: "Manage-Order", link: "/admin/manageorder" },
    { name: "Dashboard", link: "/admin/dashboard" },
  ];
  const settings = [
    { name: "Profile", link: "/admin/profile" },
    // { name: "Logout", link: "/" },
    { name: "Logout", icon: <LogoutIcon />, click: adminLogout },
  ];
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
  //----- hover effect for MenuItem------
  const boxSX = {
    "&:hover": {
      color: "black",
      backgroundColor: "#b1b0b9",
    },
  };

  return (
    <AppBar position="static" sx={{ background: "#1d1b31" }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={(e) => navigate(link)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  ...boxSX,
                  mx: 1,
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/*------ SearchBar-------- */}

          <Box sx={{ flexGrow: 0 }}>
            {/* avatar */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map(({ name, link }) => (
                <MenuItem key={name} onClick={(e) => navigate(link)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AdminNavbar;
