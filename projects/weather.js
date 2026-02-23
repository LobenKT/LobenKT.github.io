const app = Vue.createApp({
    data() {
        return {
            weather: null,
            loading: true,
            error: null,
        };
    },
    methods: {
        async fetchWeather() {
            const apiKey = "443307f2212c674ef86e553d011bd251";
            const lat = 14.5995; // Manila's latitude
            const lon = 120.9842; // Manila's longitude
            const units = "metric";

            try {
                this.loading = true;
                this.error = null;
                
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
                );
                
                if (response.ok) {
                    this.weather = await response.json();
                } else {
                    throw new Error(`Failed to fetch weather: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Error:", error);
                this.error = "Unable to load weather data. Please try again later.";
            } finally {
                this.loading = false;
            }
        },
    },
    mounted() {
        this.fetchWeather();
    },
});

app.mount("#app");


