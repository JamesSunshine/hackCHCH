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
            <h1 class="text-2xl border-b-2 mx-5">Add a Trip</h1>
            <div class="my-5">
                <input id="fileUpload" type="file" hidden>

                <div v-if="!finalValid">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 m-10 w-56"
                        @click="chooseFile()">
                    Upload Data
                </button>
                </div>
                <div v-else>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5 m-10 w-56">
                        You gained 4 leaf points!
                    </button>
                </div>


                <div>

                    <GoogleMap v-bind:kml-upload="uploaded" class="m-auto" ref="map"></GoogleMap>

                </div>
                <div v-if="fileSubmitted" class="text-lg mx-10 mt-2">
                    Distance Travelled: {{distance}}km
                </div>
                <div v-if="!disableSubmit">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 m-10 w-56"
                            v-on:click="submit"
                            v-if="fileSubmitted">Submit
                    </button>
                </div>
                <div v-else>
                    <button class="bg-red-300 hover:bg-red-300 text-white font-bold py-2 px-4 rounded my-5 m-10 w-56"
                            disabled>Submit
                    </button>
                </div>

            </div>
        </div>

        <transition name="fade">
            <!-- Modal from https://tailwindui.com/components/application-ui/overlays/modals-->
            <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModal">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <!--
                      Background overlay, show/hide based on modal state.

                      Entering: "ease-out duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "ease-in duration-200"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->
                    <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <!-- This element is to trick the browser into centering the modal contents. -->
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                    <!--
                      Modal panel, show/hide based on modal state.

                      Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        To: "opacity-100 translate-y-0 sm:scale-100"
                      Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 sm:scale-100"
                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    -->
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                         role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        File Invalid
                                    </h3>
                                    <div class="mt-2">
                                        <p class="text-sm leading-5 text-gray-800">
                                            This file contains invalid data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button v-on:click="closeModal" type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Ok
          </button>
        </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>



        <!--Confirmation-->
        <transition name="fade">
            <!-- Modal from https://tailwindui.com/components/application-ui/overlays/modals-->
            <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showOK">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <!--
                      Background overlay, show/hide based on modal state.

                      Entering: "ease-out duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "ease-in duration-200"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->
                    <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <!-- This element is to trick the browser into centering the modal contents. -->
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                    <!--
                      Modal panel, show/hide based on modal state.

                      Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        To: "opacity-100 translate-y-0 sm:scale-100"
                      Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 sm:scale-100"
                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    -->
                    <div class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-48 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                         role="dialog" aria-modal="true" aria-labelledby="modal-headlineOK">
                        <img src="https://media.discordapp.net/attachments/751284461253033984/751591085763067914/tick.png">
                    </div>
                </div>
            </div>
        </transition>

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
            firstSubmit: false,
            showModal: false,
            disableSubmit: false,
            completed: false,
            co2saved: 0,
            showOK: false,
            finalValid: false,
            scheduledTrips: [
                {
                    tripId: 0,
                    name: "Work",
                    startLocation: "12 Random Street",
                    endLocation: "19 Ilam Road",
                    distance: "1.4",
                    time: "Weekdays",
                },
            ],
        }
    },

    methods: {

        chooseFile() {
            this.upload = document.getElementById("fileUpload").click();
            this.distance = 2.2;
            sessionStorage.setItem("distance", this.distance)
            this.co2saved = this.carbonDistance(this.distance, "walk");
            sessionStorage.setItem("co2saved", this.co2saved);
            // Can come from KML
            this.transportType = "walk";
            setTimeout(() => {
                this.fileSubmitted = true;
                this.disableSubmit = false;
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
            if (sessionStorage.getItem("submittedValues") === 'true') {
                let points = Number.parseInt(sessionStorage.getItem("leafPoints"));
                //works even if points is null
                let convertedDistance = Math.round(this.carbonDistance(this.distance, this.transportType) / 100);
                points += convertedDistance;
                let totalPoints = Number.parseInt(sessionStorage.getItem("totalLeafPoints")) + convertedDistance;
                sessionStorage.setItem("totalLeafPoints", totalPoints.toString());
                //update points
                this.$refs.nav.loadPoints(points);
                sessionStorage.setItem("leafPoints", Math.round(points).toString());
                this.$refs.map.updateMarkers();
                this.completed = true;
                this.showOK = true;
                this.finalValid = true;
                setTimeout(() => {
                    this.showOK = false;
                }, 750);

            } else {
                sessionStorage.setItem("submittedValues", "true");
                this.firstSubmit = true;
                this.showModal = true;
            }
        },

        /**
         * Handles closing the modal and sets disables the submit button until the user reuploads.
         */
        closeModal() {

            this.showModal = false;
            this.disableSubmit = true;
        }


    }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
