import { Container, Grid, Typography, Box, Link } from "@mui/material";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";

import { Information, Logo, MenuFooter } from "../types/types";
import { mainColor, textPrimatyColor } from "../constants/colors";

import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import mail from "../assets/mail.png";
import apple from "../assets/apple.svg";
import android from "../assets/android.png";
import huawei from "../assets/huawei.png";
import DividerBase from "./DividerBase";

type Props = {};

const informations: Information[] = [
  {
    id: "address",
    icon: <LocationOn />,
    label: "Số 10, ngõ 2 phố Quần Ngựa, Ba Đình, Hà Nội",
  },
  {
    id: "phone",
    icon: <LocalPhone />,
    label: "0123456789",
  },
  {
    id: "email",
    icon: <Email />,
    label: "abc@gmail.com",
  },
];

const menuFooter: MenuFooter[] = [
  {
    id: "1",
    label: "Xem lịch",
  },
  {
    id: "2",
    label: "Giải mã giấc mơ",
  },
  {
    id: "3",
    label: "Tử vi",
  },
  {
    id: "4",
    label: "Con số may mắn",
  },
  {
    id: "5",
    label: "Phong thuỷ",
  },
  {
    id: "6",
    label: "Gieo quẻ hỏi việc",
  },
  {
    id: "7",
    label: "Cung hoàng đạo",
  },
  {
    id: "8",
    label: "Xem ngày tốt",
  },
  {
    id: "9",
    label: "Xem bói",
  },
  {
    id: "10",
    label: "Lá số tử vi",
  },
  {
    id: "11",
    label: "Văn khấn",
  },
  {
    id: "12",
    label: "Đổi ngày âm dương",
  },
];

const imagesConnect: Logo[] = [
  {
    id: "1",
    imgSrc: facebook,
  },
  {
    id: "2",
    imgSrc: youtube,
  },
  {
    id: "3",
    imgSrc: tiktok,
  },
  {
    id: "4",
    imgSrc: mail,
  },
];

const imagesStore: Logo[] = [
  {
    id: "1",
    imgSrc: apple,
  },
  {
    id: "2",
    imgSrc: android,
  },
  {
    id: "3",
    imgSrc: huawei,
  },
];

const titleStyle = {
  fontWeight: 500,
  fontSize: 20,
};

const logoRender = (imagesLogo: Logo[]) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: {
        xs: "space-evenly",
        // md: "flex-start",
      },
    }}
  >
    {imagesLogo.map((image) => (
      <img
        style={{ borderRadius: 8, marginRight: 30 }}
        alt="logo"
        key={image.id}
        src={image.imgSrc}
        height={30}
        width={30}
      />
    ))}
  </Box>
);

const MainFooter = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Grid
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
        container
        spacing={8}
      >
        <Grid item xs={12} md={4}>
          <img src={logo} alt="logo" height={24} />
          <Typography sx={{ mt: 1.5, mb: 1.5 }}>
            Công ty cổ phần truyền thông và phát triển phần mềm Cát Việt
          </Typography>
          <Box className="informations">
            {informations.map((information) => (
              <Box
                key={information.id}
                sx={{
                  display: "flex",
                  mt: 1,
                }}
              >
                <span
                  style={{
                    color: mainColor,
                    marginRight: 8,
                  }}
                >
                  {information.icon}
                </span>
                <Typography sx={{ color: textPrimatyColor }}>
                  {information.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          container
          item
          xs={12}
          md={4}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography sx={titleStyle}>Danh mục</Typography>
          </Grid>
          <Grid container item spacing={1}>
            {menuFooter.map((menu) => (
              <Grid item xs={6}>
                <Typography sx={{ color: textPrimatyColor }}>
                  {menu.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container item xs={12} md={4} spacing={2}>
          <Grid item xs={12}>
            <Typography sx={titleStyle}>Kết nối với chúng tôi</Typography>
            <Box style={{ height: 16 }}></Box>
            {logoRender(imagesConnect)}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={titleStyle}>Tải ứng dụng lịch Việt</Typography>
            <Box style={{ height: 16 }}></Box>
            {logoRender(imagesStore)}
          </Grid>
        </Grid>
      </Grid>

      <DividerBase />

      <Grid container justifyContent="center">
        <Link
          href="/"
          sx={{ textDecoration: "none", color: mainColor, fontSize: 18 }}
        >
          © Copyright 2021 - PPCLINK
        </Link>
      </Grid>
      <Box height={16} />
    </Container>
  );
};

export default MainFooter;
