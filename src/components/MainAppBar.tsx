import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  MenuItem,
} from "@mui/material";

import imageAppBar from "../assets/lichviet.png";
import crown from "../assets/crown.png";

import { mainColor } from "../constants/colors";
import { MenuItemAppBar } from "../types/types";
import ButtonCustom from "./ButtonCustom";

const pages: MenuItemAppBar[] = [
  {
    id: "home",
    label: "Trang chủ",
  },
  {
    id: "home0",
    label: "Xem lịch",
  },

  {
    id: "home1",
    label: "Tử vi",
  },
  {
    id: "home2",
    label: "Xem bói",
  },
  {
    id: "home3",
    label: "Phong thuỷ",
  },
  {
    id: "home4",
    label: "Cung hoàng đạo",
  },
  {
    id: "home5",
    label: "Tiện ích hay",
  },
  {
    id: "home6",
    label: "Ứng dụng lịch việt",
  },
  {
    id: "home7",
    label: "Liên hệ",
  },
];

function MainAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flex: 1, flexDirection: "column" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "rgba(248,249,250,1)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <img
                style={{
                  marginRight: 20,
                }}
                height={50}
                width={50}
                alt="logo"
                src={imageAppBar}
              />
              <Typography
                sx={{ color: mainColor, fontWeight: 500, fontSize: 19 }}
              >
                Xem Ngày Tốt, Tử Vi & Phong Thuỷ
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: mainColor }}
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
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                color: mainColor,
              }}
            >
              Lịch Việt
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  mx: 2,
                }}
              >
                <ButtonCustom
                  label="Nâng cấp phiên bản Pro"
                  handleAction={() => {}}
                  buttonColor="#fff"
                  textButtonColor="#000"
                />
              </Box>
              <IconButton
                sx={{
                  p: 0,
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <IconButton
                sx={{
                  p: 0,
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <SearchIcon sx={{ color: mainColor }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          {pages.map((page) => (
            <Typography
              sx={{ color: "rgba(0,0,0,0.7)", fontSize: 14 }}
              key={page.id}
            >
              {page.label.toUpperCase()}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default MainAppBar;
