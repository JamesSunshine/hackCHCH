<template>
    <div>
        <div>
            <nav-bar ref="nav"></nav-bar>
        </div>

        <div class="pt-6">
            <h1>Leaf store</h1>
        </div>
        <transition name="fade">
            <div class="fixed mt-10 mx-6 h-10" v-if="showBadge">
                <img class="inline-block absolute"
                     src="https://media.discordapp.net/attachments/751284461253033984/751297605111382106/badge6.png?width=586&height=671"
                     alt="Badge" width="100px">
                <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24"
                     style="width: 87%">
                    <p class="pl-3 text border-b-2 mr-10">Fantail</p>
                    <p class=" pl-3 text-xs">Redeemed 1000 leaf points</p>
                </div>
            </div>
        </transition>
        <div class="p-3 m-5">
            <div v-for="item in items" :key="item.itemId" class="general-container-rounded bg-white m-8">
                <div v-on:click="confirm(item.cost)" class="">
                    <p class="tb-float-right text-3xl">{{item.cost}}</p>
                    <img class="content-center" src="../assets/treeForStore.png" alt="Store image">
                    <p class="text-center text-xl font-bold">{{item.name}}</p>
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
        <!-- Confirm sales pop up -->
        <transition name="fade">
            <!-- Modal from https://tailwindui.com/components/application-ui/overlays/modals-->
            <div class="fixed z-10 inset-0 overflow-y-auto" v-if="confirmSale">
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
                                        Redeem Leaf Points?
                                    </h3>
                                    <div class="mt-2">
                                        <p class="text-sm leading-5 text-gray-800">
                                            {{currentCost}} leaf points will be removed from your account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button v-on:click="deductPoints(currentCost)" type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Confirm
          </button>
        </span>
                            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button v-on:click="finished()" type="button"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Cancel
          </button>
        </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "Store",
        components: {NavBar},
        data() {
            return {
                items: [
                    {
                        itemId: 0,
                        cost: 950,
                        name: "Plant a native tree",
                        description: "Plant a native tree! And get a discount coffee."
                    },
                    {
                        itemId: 1,
                        cost: 50,
                        name: "Discount Coffee",
                        description: "Discount coffee from a local business."
                    },
                ],
                confirmSale: false,
                showBadge: false,

            }
        },
        methods: {
            confirm(cost) {
                this.currentCost = cost;
                this.confirmSale = true;
            },

            deductPoints(points) {
                this.$refs.nav.spendPoints(points);
                this.showBadge = true;
                let currentPoints = parseInt(sessionStorage.getItem("leafPoints")) - points;
                sessionStorage.setItem("leafPoints", currentPoints.toString())
                sessionStorage.setItem("badgeEarnt", "true");
                setTimeout(() => {
                    this.showBadge = false;
                }, 2500);
                this.finished();
            },
            finished() {
                this.confirmSale = false;
            }
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
