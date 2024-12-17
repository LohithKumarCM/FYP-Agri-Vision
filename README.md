# Final Year Project - Agri Vision

# AgriVision  

AgriVision is a Django-based platform that leverages machine learning and real-time APIs to empower farmers and agricultural enthusiasts. It includes the following apps: **Crop Recommendation**, **Fertilizer Recommendation**, and **Weather Forecast**.  

## Features  

### 1. **Crop Recommendation**  
- Recommends the most suitable crops based on soil parameters such as nitrogen, phosphorus, potassium, pH, and temperature to optimize yield and sustainability.  

### 2. **Fertilizer Recommendation**  
- Suggests the ideal fertilizers to improve soil health based on crop selection and soil data, enhancing nutrient levels and ensuring healthy crop growth while minimizing environmental impact.  

### 3. **Weather Forecast**  
- Provides real-time weather information and forecasts using the [Weather API](https://www.weatherapi.com/), helping farmers make timely decisions on irrigation, harvesting, and protecting crops from adverse weather conditions for next 3 days.

---

## How to Get Your API Key for WeatherAPI  

1. Go to [https://www.weatherapi.com/](https://www.weatherapi.com/).  
2. Sign up for an account using your email or Google.  
3. Log in and find your unique API key in the dashboard.  
4. Replace the API key in `settings.py` under:  
   WEATHER_API_KEY = "your_api_key_here"
