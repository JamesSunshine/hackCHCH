<template>
    <div id="map" ref="map"></div>
</template>

<script>
    export default {
        name: "GoogleMap",

        props: {
            kmlUpload: null,
            lat: {
                type: Number,
                default: -43.5320
            },
            long: {
                type: Number,
                default: 172.6097
            },
            zoom: {
                type: Number,
                default: 13,
            },
            markers: {
                type: Array,
                default: () => [{lat: -43.5320, lng: 172.6197}, {lat: -43.5320, lng: 172.5897}],
            }
        },

        data() {
            return {
                map: null,
                markerLat: null,
                markerLong: null,
                kmlLayer: null,
                actualMarkers: [],
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

                this.kmlLayer = new window.google.maps.KmlLayer(this.kmlUpload, {
                    suppressInfoWindows: true,
                    preserveViewport: false,
                    map: this.map
                });
                this.kmlLayer.addListener('click', function(event) {
                    let content = event.featureData.infoWindowHtml;
                    let testimonial = document.getElementById('capture');
                    testimonial.innerHTML = content;
                });

                //Populate with markers
                for (let i = 0; i < this.markers.length; i++) {
                    this.markerPos = this.markers[i];
                    var marker = new window.google.maps.Marker({
                        position: this.markerPos,
                        animation: window.google.maps.Animation.DROP,
                        title: "Hello World!"
                    });
                    marker.setVisible(false);
                    this.actualMarkers.push(marker);
                    marker.setMap(this.map);
                }
            },


            /**
            * Repopulates the map with markers.
             */
            updateMarkers() {

                console.log("updating!");
                for (let i = 0; i < this.actualMarkers.length; i++) {
                    let marker = this.actualMarkers[i];
                    marker.setVisible(true);
                }

            }

        }
    }
</script>

<style scoped>
    #map {
        height: 300px;
        width: 300px;
        background: gray;
    }
</style>
