import { Box, Grid, Link, Typography } from "@mui/material";
import ImageBanner from "../components/ImageBanner";

import packageDetail1 from "../assets/packages/packageDetail1.png";
import packageDetail2 from "../assets/packages/packageDetail2.png";
import packageDetail3 from "../assets/packages/packageDetail3.png";
import packageDetail4 from "../assets/packages/packageDetail4.png";

import work1 from "../assets/works/work1.png";
import work2 from "../assets/works/work2.png";
import work3 from "../assets/works/work3.png";
import work4 from "../assets/works/work4.png";
import work5 from "../assets/works/work5.png";
import work6 from "../assets/works/work6.png";

import offer1 from "../assets/offers/offer1.png";
import offer2 from "../assets/offers/offer2.png";
import offer3 from "../assets/offers/offer3.png";

import pack1 from "../assets/offers/pack1.png";
import pack2 from "../assets/offers/pack2.png";
import pack3 from "../assets/offers/pack3.png";
import pack4 from "../assets/offers/pack4.png";

import sky from "../assets/sky.png";
import earth from "../assets/earth.png";
import person from "../assets/person.png";
import children from "../assets/child.png";

import { Logo } from "../types/types";
import DividerBase from "../components/DividerBase";
import { mainColor } from "../constants/colors";

import YouTube, { YouTubeProps } from "react-youtube";
import TextFieldCustom from "../components/TextFieldCustom";
import { Phone } from "@mui/icons-material";
import ButtonCustom from "../components/ButtonCustom";
import { useState } from "react";
import ModalCustom from "../components/ModalCustom";

type Props = {};

const packagesDetailCalendar: Logo[] = [
  { id: "1", imgSrc: packageDetail1 },
  { id: "2", imgSrc: packageDetail2 },
  { id: "3", imgSrc: packageDetail3 },
  { id: "4", imgSrc: packageDetail4 },
];

const workData: Logo[] = [
  { id: "1", imgSrc: work1 },
  { id: "2", imgSrc: work2 },
  { id: "3", imgSrc: work3 },
  { id: "4", imgSrc: work4 },
  { id: "5", imgSrc: work5 },
  { id: "6", imgSrc: work6 },
];

const dataFirstBlock = [
  {
    id: "1",
    title: "Thiên",
    imgSrc: sky,
    description:
      "Phân tích hệ thống sao mỗi ngày, đưa ra các ngày tốt, các việc nên làm, không nên làm theo đặc tính từng sao",
  },
  {
    id: "2",
    title: "Địa",
    imgSrc: earth,
    description:
      "Phân tích phương hướng theo năm, tháng, ngày và giờ để đưa ra ngày tốt cho các việc đại sự có hướng như: khởi công, động thổ, nhập trạch",
  },
  {
    id: "3",
    title: "Nhân",
    imgSrc: person,
    description:
      "Phân tích năm sinh để đưa ra dữ liệu chính xác cho từng cá nhân",
  },
];

const offers = [
  {
    id: "1",
    imgSrc: offer1,
  },

  {
    id: "2",
    imgSrc: offer2,
  },

  {
    id: "3",
    imgSrc: offer3,
  },
];

const packs: Logo[] = [
  {
    id: "1",
    imgSrc: pack1,
  },
  {
    id: "2",
    imgSrc: pack2,
  },
  {
    id: "3",
    imgSrc: pack3,
  },
  {
    id: "4",
    imgSrc: pack4,
  },
];

const opts: YouTubeProps["opts"] = {
  width: "100%",
  height: "300px",
};

const GoodDayScreen = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <ImageBanner src="https://upload.hn.ss.bfcplatform.vn/lichviet/2023-07/20/web_lichviet/Banner-website%283%29.jpg" />
      <Box height={24} />
      <Grid container spacing={2}>
        {packagesDetailCalendar.map((packageDetail) => (
          <Grid item xs={6} md={3}>
            <img
              alt="packageDetail"
              src={packageDetail.imgSrc}
              width={"100%"}
            />
          </Grid>
        ))}
      </Grid>
      <Box height={24} />
      <DividerBase />
      <Box height={24} />
      <Grid container spacing={2}>
        <Grid container item xs={12} md={5} spacing={1}>
          <Box>
            <Grid container item xs={12}>
              <Typography sx={{ color: mainColor }}>
                DUY NHẤT TẠI LỊCH VIỆT
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Kết quả ngày tốt, xấu được phân tích theo ngày sinh của bạn
              </Typography>
            </Grid>
            <Box height={8} />
            <Grid container item xs={12}>
              <Box width={"100%"}>
                <YouTube videoId="vgzYAylnFiE" opts={opts} />
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography sx={{ color: mainColor, fontSize: 14 }}>
            Ngày tốt là một ngày phối hợp giữa thiên và can, địa chi, âm dương
            ngũ hành của Thiên - Địa - Nhân một cách hài hoà. Chúng tôi dựa trên
            các yếu tố Thiên, Địa, Nhân để phân tích và đưa ra kết quả ngày tốt
            - xấu một cách khoa học, cụ thể:
          </Typography>
          <Grid sx={{ my: 1 }} container spacing={2}>
            {dataFirstBlock.map((data) => (
              <Grid
                key={data.id}
                container
                item
                xs={12}
                spacing={1}
                alignItems={"center"}
              >
                <Grid item xs={2}>
                  <img
                    alt="calendar"
                    src={data.imgSrc}
                    width={"100%"}
                    style={{ borderRadius: "50%" }}
                  />
                </Grid>
                <Grid container item xs={10}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        width: 48,
                        p: 0.3,
                        color: "#fff",
                        borderRadius: 1,
                      }}
                    >
                      {data.title.toUpperCase()}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: 14 }}>
                      {data.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box height={24} />
      <DividerBase />
      <Box height={24} />
      <Grid container spacing={2}>
        <Grid container item xs={12} md={6} spacing={1}>
          <Grid item xs={12}>
            <Typography sx={{ color: mainColor }}>
              TÌM KIẾM DỄ DÀNG VÀ NHANH CHÓNG
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Theo 28 việc đại sự phổ biến nhất, như:
            </Typography>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            {workData.map((data) => (
              <Grid key={data.id} item xs={4}>
                <img alt="work" src={data.imgSrc} width={"100%"} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Box>
            <Grid container item xs={12}>
              <Typography sx={{ fontSize: 14 }}>
                <span style={{ color: "orange" }}>► </span>
                Thuật toán độc quyền từ các chuyên gia Lịch Việt, phân tích dựa
                trên kiến thức tinh hoa cổ học Phương Đông áp dụng cho thời hiện
                đại
              </Typography>
            </Grid>
            <Box height={8} />
            <Grid item xs={12} flex={1}>
              <Typography sx={{ fontSize: 14 }}>
                <span style={{ color: "orange" }}>► </span>
                Tính năng "CHỌN NGÀY TỐT" mới này là kết quả dựa trên quá trình
                nghiên cứu, đúc rút từ kiến thức tinh hoa cổ học Phương Đông &
                cơ sở khoa học cũng như thuật toán đọc quyền từ các chuyên gia
                Lịch Việt, có sự chi tiết và chính xác cao hơn.
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <DividerBase />
      <Typography sx={{ color: mainColor }}>ƯU ĐÃI ĐI KÈM</Typography>
      <Grid container spacing={2}>
        {offers.map((offer) => (
          <Grid
            container
            item
            key={offer.id}
            xs={12}
            md={4}
            justifyContent={"space-between"}
          >
            <img alt="offer" src={offer.imgSrc} width="100%" />
          </Grid>
        ))}
      </Grid>
      <DividerBase />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography align="center" sx={{ color: mainColor }}>
          ĐĂNG KÝ ĐỂ NHẬN NGAY ƯU ĐÃI
        </Typography>
        <Typography align="center" sx={{ fontSize: 13 }}>
          "SỐ LƯỢNG CÓ HẠN"
        </Typography>
        <Box height={16} />

        <Grid container spacing={2}>
          {packs.map((pack) => (
            <Grid key={pack.id} item xs={6} md={3}>
              <Box sx={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
                <img src={pack.imgSrc} alt="pack" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box height={24} />
      <Grid container spacing={2}>
        <Grid container item xs={12} justifyContent={"center"}>
          <Link sx={{ color: mainColor }}>
            Hướng dẫn thanh toán qua Momo/ShopeePay
          </Link>
        </Grid>

        <Grid container item xs={12} spacing={2} alignItems={"flex-start"}>
          <Grid xs={0} sm={2}></Grid>
          <Grid container item justifyContent={"flex-end"} xs={4} sm={3}>
            <img src={children} alt="children" width={"100%"} />
          </Grid>
          <Grid container item xs={8} sm={5} spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography>
                Bạn không thể thanh toán? Vui lòng để lại số điện thoại để chúng
                tôi hỗ trợ bạn đăng ký.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextFieldCustom
                placeholder="Số điện thoại"
                icon={<Phone sx={{ color: mainColor }} />}
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonCustom label="Gửi số điện thoại" handleAction={() => {}} />
            </Grid>
          </Grid>
          <Grid xs={0} sm={2}></Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid xs={0} sm={2}></Grid>
          <Grid container item justifyContent={"flex-start"} xs={12} sm={8}>
            <Grid item xs={0} sm={1} md={3}></Grid>
            <Grid
              container
              item
              justifyContent={"space-between"}
              xs={12}
              sm={10}
              md={8}
            >
              <Link sx={{ color: mainColor }} href="/">
                Điều khoản sử dụng
              </Link>
              <Link sx={{ color: mainColor }} href="/">
                Chính sách bảo mật
              </Link>
            </Grid>
          </Grid>
          <Grid xs={0} sm={1} md={1}></Grid>
        </Grid>
      </Grid>
      <DividerBase />

      {open && (
        <ModalCustom
          open={open}
          handleClose={handleClose}
          title="Đăng ký gói ưu đãi"
          action={<ButtonCustom label="Đăng ký" handleAction={handleClose} />}
        />
      )}
    </Box>
  );
};

export default GoodDayScreen;
