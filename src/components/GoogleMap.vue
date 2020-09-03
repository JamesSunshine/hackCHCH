<template>
    <div id="map" ref="map"></div>
</template>

<script>
    export default {
        name: "GoogleMap",

        props: {
            lat: {
                type: Number,
                default: -43.5320
            },
            long: {
                type: Number,
                default: 172.7097
            },
            zoom: {
                type: Number,
                default: 11,
            },
            markers: {
                type: Array,
                default: () => [],
            }
        },

        data() {
            return {
                map: null,
                markerLat: null,
                markerLong: null,
            }
        },

        mounted() {
            window.checkAndAttachMapScript(this.initMap);

        },
        methods: {

            /**
             * Creates the map object, intialises the map from props given the
             * lat - Latitude value of the center point
             * lng - Longitude value of the center point
             * zoom - initial zoom level
             * markers - a list of markers
             */
            initMap() {

                //Create map
                this.map = new window.google.maps.Map(this.$refs["map"], {
                    center: {lat: this.lat, lng: this.long},
                    zoom: this.zoom
                });

                //Populate with markers
                for (let i = 0; i < this.markers.length; i++) {
                    this.markerPos = this.markers[i];
                    var marker = new window.google.maps.Marker({
                        position: this.markerPos,
                        title: "Hello World!"
                    });
                    marker.setMap(this.map);
                }
            },

        }
    }
</script>

<style scoped>
    #map {
        height: 400px;
        width: 400px;
        background: gray;
    }
</style>
