import "./App.css";
import { Button, Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useMemo } from "react";
// import axios from "axios";
// import { getCurrentWeather } from "./api/axios";

// time format
import dayjs from "dayjs";
import "dayjs/locale/ar";

// translation
import { useTranslation } from "react-i18next";

// Redux Import
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./features/weather/weatherApiSlice";
import type { AppDispatch, RootState } from "./store/store";

dayjs.locale("ar");

function App() {
  // Redux code
  const weather = useSelector((state: RootState) => state.weatherApi.weather);
  const isLoading = useSelector(
    (state: RootState) => state.weatherApi.isLoading,
  );
  const dispatch = useDispatch<AppDispatch>();

  const { t, i18n } = useTranslation();

  const dateAndTime = useMemo(() => {
    dayjs.locale(i18n.language);
    return dayjs().format("dddd, D MMMM YYYY, h:mm A");
  }, [i18n.language]);

  // useEffect for language
  useEffect(() => {
    const language = localStorage.getItem("language");

    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  // useEffect for weather
  useEffect(() => {
    const weatherRequest = dispatch(fetchWeather());

    return () => {
      weatherRequest.abort();
    };
  }, [dispatch]);

  function handleChangeLanguage() {
    const newLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);

    // ✅ always save the NEW language
    localStorage.setItem("language", newLang);
  }

  return (
    <div className="App">
      <Container
        maxWidth="sm"
        style={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Card */}
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(28 52 91 / 35%)",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 8px 1px rgba(0,0,0,0.2)",
          }}
        >
          {/* Card Content */}
          <div>
            {/* City & Time */}
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Typography variant="h2" style={{ marginRight: "10px" }}>
                {t("city")}
              </Typography>
              <Typography variant="h5" style={{ marginRight: "10px" }}>
                {dateAndTime}
              </Typography>
            </div>
            {/* === City & Time === */}
            <hr />
            {/* ========== Container for Degree & Description & Cloud Icon */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Degree & Description */}
              <div>
                {/* Temp */}
                <div>
                  {isLoading ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          i18n.language === "ar" ? "flex-end" : "flex-start",
                        minHeight: "56px",
                      }}
                    >
                      <CircularProgress
                        aria-label="Loading..."
                        sx={{ color: "white" }}
                      />
                    </Box>
                  ) : (
                    <Typography
                      variant="h3"
                      style={{
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                    >
                      {weather.temperature} °C
                    </Typography>
                  )}
                </div>
                {/* ====  Temp ====== */}

                <p
                  style={{
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  {weather.temperature > 23 ? t("sunny") : t("cloudy")}
                </p>

                {/* Min & Max */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">
                    {t("min")}: {weather.min}
                  </Typography>
                  <p style={{ margin: "0 20px" }}> | </p>
                  <Typography variant="h6">
                    {t("max")} : {weather.max}
                  </Typography>
                </div>
                {/* ==== Min & Max ==== */}
              </div>
              {/* === Degree & Description === */}

              {/* Cloud Icon */}
              <div>
                <CloudIcon
                  style={{ fontSize: "200px", color: "white" }}
                  fontSize="large"
                />
              </div>
              {/* === Cloud Icon === */}
            </div>
            {/* === Container for Degree & Description & Cloud Icon */}
          </div>
          {/* === Card Content ==== */}
        </div>
        {/* translation button */}
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            variant="text"
            style={{
              color: "white",
            }}
            onClick={handleChangeLanguage}
          >
            {i18n.language === "ar" ? t("english") : t("arabic")}
          </Button>
        </div>
        {/* === translation button === */}
      </Container>
    </div>
  );
}

export default App;
