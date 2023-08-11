import { Container } from "@mui/material";
import CalendarScreen from "../screens/CalendarScreen";
import GoodDayScreen from "../screens/GoodDayScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../constants/routes";

const MainRouter = () => {
  return (
    <BrowserRouter basename={routes.ABOUT_CALENDAR}>
      <Container maxWidth="lg">
        <Routes>
          <Route path={routes.ABOUT_CALENDAR} element={<CalendarScreen />} />

          <Route
            path={routes.ABOUT_CALENDAR_DETAIL}
            element={<GoodDayScreen />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainRouter;
