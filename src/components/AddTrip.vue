<template>
    <div>
        <div>
            <nav-bar></nav-bar>
        </div>
        <div>
            <h1>Add Trip</h1>
        </div>
        <div class="SavedTrips">
            <h1>Scheduled Trips</h1>
            <ul>
                <li v-for="trip in this.scheduledTrips" :key="trip.tripId">{{trip.name}}: {{trip.startLocation}} -> {{trip.endLocation}} ({{trip.distance}} km) [{{trip.time}}]</li>
            </ul>
                <button>Add Scheduled Trip</button>
            <button>Remove Scheduled Trip</button>
        </div>
        <div>
            <button>Upload Data</button>
        </div>
        <div>
            <label v-on:click="submit" for="location">Manual Entry</label>

            <input id="location" placeholder="Location" type="text" v-model="location">
            <!-- Add map here-->
            <GoogleMap></GoogleMap>
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

            /**
             * Calculates the carbon distance given two points.
             *
             */
            carbonDistance() {
                console.log("Implement me");
                this.distance = 0;
            },

            /**
             * Handles submission of location data.
             *
             **/
            submit() {
                this.carbonDistance();
                console.log("Implement me");
            },


        }
    }
</script>

<style scoped>

</style>
