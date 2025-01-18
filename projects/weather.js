const app = Vue.createApp({
    data() {
        return {
            weather: null,
        };
    },
    methods: {
        async fetchWeather() {
            const apiKey = "443307f2212c674ef86e553d011bd251"; // Replace with your OpenWeatherMap API key
            const lat = 14.5995; // Manila's latitude
            const lon = 120.9842; // Manila's longitude
            const units = "metric"; // Use metric units for Celsius

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
                );
                if (response.ok) {
                    this.weather = await response.json();
                } else {
                    console.error("Error fetching weather data:", response.statusText);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        },
    },
    mounted() {
        this.fetchWeather();
    },
});

app.mount("#app");


