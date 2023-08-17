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
import { signOut } from "next-auth/react";

import { useEffect, useState } from "react";
import { hasCookie, deleteCookie, getCookie } from "cookies-next";
import { firebaseCloudMessaging } from "../../utils/firebase";
import client from "../../configs/axios.config";
import { ListItemText } from "@mui/material";

const pages = [
  { title: "Homepage", link: "/home" },
  { title: "Questions", link: "/questions" },
  { title: "Contributor", link: "/contributor" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [userUUID, setUserUUID] = React.useState();
  const router = useRouter();

  useEffect(() => {
    if (hasCookie("user_uuid")) {
      setUserUUID(getCookie("user_uuid"));
      firebaseCloudMessaging.init().then((token) => {
        createDeviceToken(token, getCookie("user_uuid"));
      });

      getNotification();
    }

    async function getNotification() {
      try {
        // localhost:8009/api/get-user-notification?user_id=3775ef1a-bdde-4374-bb57-f0425a1ca48e
        const res = await client.main.get(
          `http://localhost:8009/api/get-user-notification?user_id=${getCookie(
            "user_uuid"
          )}`
        );

        const data = res.data.data;
        setNotifications(data);
        console.log("notifications", notifications);
      } catch (err) {
        console.log(err);
      }
    }

    async function createDeviceToken(token, user_id) {
      try {
        const res = await client.main.post(
          `http://localhost:8009/api/create-device-token`,
          {
            token,
            user_id,
          }
        );
        if (res.status == 200) console.log("create success");
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const handleLogout = async () => {
    await signOut();
    deleteCookie("user_uuid");
    router.replace("/home");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUNotification, setAnchorElUNotification] =
    React.useState(null);

  const [notifications, setNotifications] = useState([]);

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
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl" className="md:px-16 items-center">
        <Toolbar disableGutters className="h-auto">
          <Typography
            noWrap
            component="a"
            href="/home"
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
            href="/home"
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
                  borderBottomWidth: asPath == page.link ? "2px" : "0px",
                  borderColor: asPath == page.link ? "#82D200" : "transparent",
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
              <Badge color="error" badgeContent={notifications.number_of_noti}>
                <NotificationsIcon
                  style={{
                    color: Boolean(anchorElUNotification) ? "#82D200" : "#434343",
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
              {notifications.length !== 0 ?
                notifications.map((item) => (
                  <MenuItem
                    key={item}
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
                          {item.content}
                        </div>
                        <div style={{ fontWeight: 400, fontSize: 12 }}>
                          {item.create_date}
                        </div>
                      </div>
                    </div>
                  </MenuItem>
                )) : <ListItemText className="p-3">You have no notifications.</ListItemText>}
            </Menu>

            {userUUID ? (
              <>
                <IconButton href={`/profile/${userUUID}`}>
                  <AccountCircleIcon color="#434343" />
                </IconButton>
                <IconButton onClick={handleLogout}>
                  <LogoutIcon color="#434343" />
                </IconButton>
              </>
            ) : (
              <IconButton href="/sign-in">
                <LoginIcon color="#434343" />
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
