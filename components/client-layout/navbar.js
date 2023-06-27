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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

const pages = [{ title: "Home page", link: '/' }, { title: "Questions", link: '/questions' }, { title: "Ranking", link: '/contributor' }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
              WebkitTextFillColor: "transparent"
            }}
          >
            Dump Logo
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
              WebkitTextFillColor: "transparent"
            }}
          >
            Dump Logo
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
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <LogoutIcon />
            </IconButton>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
