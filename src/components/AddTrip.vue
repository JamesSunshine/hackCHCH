<template>
    <div>
        <div>
            <nav-bar ref="nav"></nav-bar>
        </div>
        <div>
            <h1>Add Trip</h1>
            <br><br><br>
        </div>
        <div class="m-5 SavedTrips general-container-rounded bg-white m">
            <div>
                <h1 class="text-xl font-bold">Scheduled Trips</h1>
                <ul>
                    <li class="text-xl" v-for="trip in this.scheduledTrips" :key="trip.tripId">{{ trip.name }}: {{
                        trip.startLocation }} ->
                        {{ trip.endLocation }} ({{ trip.distance }} km) [{{ trip.time }}]
                    </li>
                </ul>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mx-10 w-56">Add Scheduled
                    Trip
                </button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 mx-10 w-56">Remove Scheduled
                    Trip
                </button>
            </div>
            <div class="border-t my-5">
                <input id="fileUpload" type="file" hidden>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 m-10 w-56"
                        @click="chooseFile()">
                    Upload Data
                </button>
                <div>

                    <GoogleMap v-bind:kml-upload="uploaded" class="m-auto"></GoogleMap>

                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 m-16 w-48"
                        v-on:click="submit"
                        v-if="fileSubmitted">Submit
                </button>
            </div>
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
                fileSubmitted: false,
                scheduledTrips: [
                    {
                        tripId: 0,
                        name: "Work",
                        startLocation: "12 Random Street",
                        endLocation: "19 Ilam Road",
                        distance: "1.4",
                        time: "Weekdays",
                    },
                ]
            }
        },

        methods: {

            chooseFile() {
                this.upload = document.getElementById("fileUpload").click();
                this.distance = 6.2;
                // Can come from KML
                this.transportType = "walk";
                setTimeout(() => {
                    this.fileSubmitted = true;
                }, 3000);
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
                let points = Number.parseInt(sessionStorage.getItem("leafPoints"));
                //works even if points is null
                let convertedDistance = Math.round(this.carbonDistance(this.distance, this.transportType) / 100);
                points += convertedDistance;
                let totalPoints = Number.parseInt(sessionStorage.getItem("totalLeafPoints")) + convertedDistance;
                sessionStorage.setItem("totalLeafPoints", totalPoints.toString());
                //update points
                this.$refs.nav.loadPoints(points);
                sessionStorage.setItem("leafPoints", Math.round(points).toString());
            },


        }
    }
</script>

<style scoped>

</style>
