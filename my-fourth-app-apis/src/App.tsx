import "./App.css";
import { Button, Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { getCurrentWeather } from "./api/axios";

// time format
import dayjs from "dayjs";
import "dayjs/locale/ar";

// translation
import { useTranslation } from "react-i18next";

dayjs.locale("ar");

function App() {
  const { t, i18n } = useTranslation();
  const [weather, setWeather] = useState({
    temperature: 0,
    min: 0,
    max: 0,
  });

  const dateAndTime = useMemo(() => {
    dayjs.locale(i18n.language);
    return dayjs().format("dddd, D MMMM YYYY, h:mm A");
  }, [i18n.language]);

  // useEffect
  useEffect(() => {
    const language = localStorage.getItem("language");

    if (language) {
      i18n.changeLanguage(language);
    }

    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather(controller.signal);

        setWeather({
          temperature: data.current_weather.temperature,
          min: data.current_weather.weathercode,
          max: data.current_weather.winddirection,
        });
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error(err);
      }
    };
    fetchWeather();

    // clean up function
    return () => {
      console.log("clean up");
      controller.abort();
    };
  }, [i18n]); // [] to run only once

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
                  <Typography
                    variant="h3"
                    style={{
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {weather.temperature}
                  </Typography>
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
