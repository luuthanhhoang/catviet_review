import { Box, Typography, Grid } from "@mui/material";

import ImageBanner from "../components/ImageBanner";

import answer from "../assets/answer.png";
import package1 from "../assets/packages/package1.png";
import package2 from "../assets/packages/package2.png";
import package3 from "../assets/packages/package3.png";
import package4 from "../assets/packages/package4.png";
import package5 from "../assets/packages/package5.png";
import package6 from "../assets/packages/package6.png";
import package7 from "../assets/packages/package7.png";
import package8 from "../assets/packages/package8.png";

import { Phone } from "@mui/icons-material";
import {
  borderPrimaryColor,
  mainColor,
  textPrimatyColor,
} from "../constants/colors";
import { Logo } from "../types/types";
import TextFieldCustom from "../components/TextFieldCustom";
import ButtonCustom from "../components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

type Props = {};

const textStyle = {
  color: textPrimatyColor,
  fontSize: 15,
};

const titleStyle = {
  fontWeight: 500,
  fontSize: 22,
};

const packagesCalendar: Logo[] = [
  { id: "1", imgSrc: package1 },
  { id: "2", imgSrc: package2 },
  { id: "3", imgSrc: package3 },
  { id: "4", imgSrc: package4 },
  { id: "5", imgSrc: package5 },
  { id: "6", imgSrc: package6 },
  { id: "7", imgSrc: package7 },
  { id: "8", imgSrc: package8 },
];

const CalendarScreen = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = (packageCalendar: Logo) => {
    navigate(
      `${routes.ABOUT_CALENDAR_DETAIL.replace(
        ":id",
        packageCalendar.id.toString()
      )}`
    );
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <ImageBanner src="https://upload.hn.ss.bfcplatform.vn/lichviet/2023-07/20/web_lichviet/Banner-website%283%29.jpg" />
      <Box height={24} />
      <Typography sx={titleStyle}>Các gói Lịch Việt Pro</Typography>
      <Box
        sx={{
          mx: {
            xs: 0,
            md: 8,
          },
          my: 3,
        }}
      >
        <Grid container spacing={2}>
          {packagesCalendar.map((packageCalendar) => (
            <Grid key={packageCalendar.id} item xs={6} md={3}>
              <Box
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => handleClick(packageCalendar)}
              >
                <img
                  alt="packageCalendar"
                  src={packageCalendar.imgSrc}
                  width={"100%"}
                  style={{ borderRadius: 8 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography sx={titleStyle}>Quý khách cần hỗ trợ?</Typography>

      <Box
        sx={{
          mx: {
            xs: 0,
            md: 8,
          },
          my: 3,
          p: 2,
          border: 1,
          borderRadius: 3,
          borderColor: borderPrimaryColor,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontWeight: 600 }}>LIÊN HỆ</Typography>
        </Box>
        <Box>
          <Box height={16} />
          <Typography sx={textStyle}>
            Quý khách vui lòng nhập chính khác thông tin.
          </Typography>
          <Typography sx={textStyle}>
            Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
          </Typography>
          <Box height={16} />
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid item xs={6}>
              <TextFieldCustom
                placeholder="Số điện thoại"
                icon={<Phone sx={{ color: mainColor }} />}
              />
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <ButtonCustom label="Kích hoạt" handleAction={() => {}} />
            </Grid>
          </Grid>
          <ImageBanner src={answer} />
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarScreen;
