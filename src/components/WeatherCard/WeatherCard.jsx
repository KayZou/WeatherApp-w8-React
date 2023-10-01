import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { WiCloudy, WiDaySunny, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import "./WeatherCard.css"; // Import the CSS file

// ...import statements...

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { city, list } = weatherData;

  const getRandomIcon = () => {
    const icons = [WiCloudy, WiDaySunny, WiRain, WiSnow, WiThunderstorm];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  return (
    <Card className="weather-card">
      <Card.Body>
        <Card.Title className="weather-card-title">
          {getRandomIcon({ size: 40 })} Weather in {city.name}, {city.country}
        </Card.Title>
        <hr />
        <Row className="justify-content-center mt-5">
          {list.map((forecast, index) => {
            const Icon = getRandomIcon();
            // Generate a class name for each card based on its index
            const cardClassName = `weather-card-${index + 1}`;
            return (
              <Col key={index} md={3}>
                <Card className={cardClassName}>
                  <Card.Body>
                    <Card.Text className="weather-card-details">
                      Date: {new Date(forecast.dt * 1000).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text className="weather-card-details">
                      Description:{" "}
                      {forecast.weather[0].description.charAt(0).toUpperCase() +
                        forecast.weather[0].description.slice(1)}
                    </Card.Text>
                    <Card.Text className="weather-card-details">
                      Temperature: {forecast.temp.day}°C
                    </Card.Text>
                    <Card.Text className="weather-card-details">
                      Humidity: {forecast.humidity}%
                    </Card.Text>
                    <hr />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
