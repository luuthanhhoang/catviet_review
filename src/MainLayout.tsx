import ScrollToTop from "react-scroll-to-top";
import MainAppBar from "./components/MainAppBar";
import MainFooter from "./components/MainFooter";
import MainRouter from "./routes/MainRouter";
import { ArrowUpward } from "@mui/icons-material";

const MainLayout = () => {
  return (
    <div className="appBar">
      <MainAppBar />
      <MainRouter />
      <MainFooter />
      <ScrollToTop
        smooth
        style={{ borderRadius: "50%" }}
        component={<ArrowUpward />}
      />
    </div>
  );
};

export default MainLayout;
