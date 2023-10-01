# Weather App Documentation

## Overview

The Weather App is a React-based web application that provides weather information for a given city. It allows users to search for the current weather conditions and a 7-day weather forecast. The app utilizes the OpenWeather API to fetch weather data.

## Technologies Used

- React.js
- React Bootstrap
- Axios (for API requests)
- OpenWeather API

## Features

### Current Weather

The app displays the current weather conditions for a city, including:

- Temperature in Celsius
- Humidity percentage
- Weather description (e.g., "Partly Cloudy," "Rainy," etc.)

### Weather Forecast

The app provides a 7-day weather forecast for the selected city. Each forecast card includes:

- Date
- Weather description
- Daytime temperature in Celsius
- Humidity percentage

### Error Handling

- The app includes error handling to display user-friendly error messages when an issue occurs during data fetching.
- If the user submits an empty city search, it prompts them to enter a city name.

### Random Weather Icons

- Each forecast card features a randomly selected weather icon to make the UI more visually appealing.
