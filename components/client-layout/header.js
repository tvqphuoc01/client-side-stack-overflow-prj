import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { hasCookie, deleteCookie, getCookie } from "cookies-next";

const pages = [
  { title: "Homepage", link: "/" },
  { title: "Questions", link: "/questions" },
  { title: "Contributor", link: "/contributor" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [userUUID, setUserUUID] = React.useState();

  useEffect(() => {
    setUserUUID(getCookie("user_uuid"));
  }, []);

  const handleLogout = () => {
    deleteCookie("user_uuid");
    window.location.reload();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUNotification, setAnchorElUNotification] =
    React.useState(null);

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

  const handleOpenNotification = (event) => {
    setAnchorElUNotification(event.currentTarget);
  };

  const { asPath } = useRouter();

  return (
    <AppBar position="static" className="bg-white">
      <Container maxWidth="xl" className="md:px-16 items-center">
        <Toolbar disableGutters className="h-auto">
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: { md: "flex", xs: "none" },
              fontSize: "28px",
              fontWeight: "700",
              background: "-webkit-linear-gradient(#82D200, #59AD00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stack Overflow
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <a href={page.link}>{page.title}</a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontSize: "28px",
              fontWeight: "700",
              background: "-webkit-linear-gradient(#82D200, #59AD00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stack Overflow
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="px-20"
            style={{ minHeight: "inherit" }}
          >
            {pages.map((page) => (
              <div
                key={page.title}
                onClick={handleCloseNavMenu}
                style={{
                  paddingLeft: 16,
                  paddingRight: 16,
                  color: "#434343",
                  borderBottomWidth: asPath == page.link ? "2px" : "0",
                  borderColor: asPath == page.link ? "#82D200" : "",
                }}
                className="border-b-4 flex flex-col justify-center text-base font-bold"
              >
                <a href={page.link}>{page.title}</a>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} className="flex flex-row gap-x-5">
            <IconButton
              aria-controls="menu-notify"
              aria-haspopup="true"
              onClick={handleOpenNotification}
            >
              <Badge color="error" badgeContent={3}>
                <NotificationsIcon
                  style={{
                    color: Boolean(anchorElUNotification) ? "#82D200" : "",
                  }}
                />
              </Badge>
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-notify"
              anchorEl={anchorElUNotification}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUNotification)}
              onClose={() => {
                setAnchorElUNotification(null);
              }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    setAnchorElUNotification(null);
                  }}
                >
                  <div
                    className="flex flex-row gap-x-3"
                    style={{ maxWidth: "350px", maxHeight: "74px" }}
                  >
                    <img
                      src="/chatbubble.svg"
                      alt="Comment"
                      className="w-7 h-7"
                    />
                    <div
                      className="flex flex-col"
                      style={{ maxWidth: "318px" }}
                    >
                      <div
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Abccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                      </div>
                      <div style={{ fontWeight: 400, fontSize: 12 }}>
                        May 28, 2023 at 16:39{" "}
                      </div>
                    </div>
                  </div>
                </MenuItem>
              ))}
            </Menu>

            {userUUID ? (
              <>
                <IconButton href={`/profile/${userUUID}`}>
                  <AccountCircleIcon />
                </IconButton>
                <IconButton onClick={handleLogout}>
                  <LogoutIcon />
                </IconButton>
              </>
            ) : (
              <IconButton href="/sign-in">
                <LoginIcon />
              </IconButton>
            )}

            {/* <Menu
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
