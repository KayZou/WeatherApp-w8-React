

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import ErrorAlert from "./components/ErrorAlert"; // Import the new ErrorAlert component

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null); // State to store error messages
const apiKey = import.meta.env.VITE_API_KEY
console.log(apiKey)
  const fetchWeatherData = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setError("An error occurred while fetching weather data.");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={12}>
          <SearchBar onSearch={fetchWeatherData} />
          {error && <ErrorAlert message={error} />}
          {weatherData && <WeatherCard weatherData={weatherData} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

