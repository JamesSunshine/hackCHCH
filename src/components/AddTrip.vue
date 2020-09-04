<template>
    <div>
        <div>
            <nav-bar></nav-bar>
        </div>
        <div>
            <h1>Add Trip</h1>
            <br><br><br>
        </div>
        <div class="SavedTrips">
            <h1>Scheduled Trips</h1>
            <ul>
                <li v-for="trip in this.scheduledTrips" :key="trip.tripId">{{ trip.name }}: {{ trip.startLocation }} ->
                    {{ trip.endLocation }} ({{ trip.distance }} km) [{{ trip.time }}]
                </li>
            </ul>
            <button>Add Scheduled Trip</button>
            <button>Remove Scheduled Trip</button>
        </div>
        <div>
            <input id="fileUpload" type="file" hidden>
            <button @click="chooseFile()">Upload Data</button>
        </div>
        <div>
            <label v-on:click="submit" for="location">Manual Entry</label>


            <input id="location" placeholder="Location" type="text" v-model="location">
            <!-- Add map here-->
            <GoogleMap v-bind:kml-upload="uploaded"></GoogleMap>
            <button v-on:click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import NavBar from "./NavBar";
import GoogleMap from "./GoogleMap";

export default {
    name: "AddTrip",
    components: {GoogleMap, NavBar},
    data() {
        return {
            location: "",
            distance: "",
            uploaded: null,
            scheduledTrips: [
                {
                    tripId: 0,
                    name: "Work",
                    startLocation: "12 Random Street",
                    endLocation: "19 Ilam Road",
                    distance: "1.4",
                    time: "Weekdays",
                },
                {
                    tripId: 1,
                    name: "Home",
                    startLocation: "19 Ilam Road",
                    endLocation: "12 Random Street",
                    distance: "1.5",
                    time: "Weekdays",
                },
                {
                    tripId: 2,
                    name: "Park",
                    startLocation: "19 Ilam Road",
                    endLocation: "Hagley Park",
                    distance: "4.3",
                    time: "Saturday",
                },
            ]
        }
    },

    methods: {

        chooseFile() {
            this.upload = document.getElementById("fileUpload").click();
        },

        /**
         * Calculates the carbon distance given two points
         * Assumes fuel efficiency of 8L/100Km for cars and co2 production of 1138 g/km
         * Average passenger count assumed to be 30
         */
        carbonDistance(distance, type) {
            switch (type) {
                case "car":
                    return 0;
                case "bus":
                    return (8 * 2392 * distance / 100) - (distance * 1138 / 30);
                default:
                    return 8 * 2392 * distance / 100;
            }
        },

        /**
         * Handles submission of location data.
         *
         **/
        submit() {
            let points = sessionStorage.getItem("leafPoints");
            //works even if points is null
            points += this.carbonDistance(0, "scooter") / 1000;
            sessionStorage.setItem("leafPoints", points.toString());
            //console.log("Implement me");
        },


    }
}
</script>

<style scoped>

</style>
