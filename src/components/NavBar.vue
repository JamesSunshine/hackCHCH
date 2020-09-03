<template>
<!--  https://github.com/fayazara/tailwind-components/blob/master/components/navbar.vue :)  -->
    <nav
            class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
    >
        <div class="flex items-center">
            <button class="mr-2" aria-label="Open Menu" @click="drawer">
                <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-8 h-8"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <label style="">Team One</label>
<!--            <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-24" />-->
        </div>


        <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
        >
            <div
                    @keydown.esc="isOpen = false"
                    v-show="isOpen"
                    class="z-10 fixed inset-0 transition-opacity"
            >
                <div
                        @click="isOpen = false"
                        class="absolute inset-0 bg-black opacity-50"
                        tabindex="0"
                ></div>
            </div>
        </transition>
        <aside
                class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
                :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
      <span
              @click="isOpen = false"
              class="flex w-full items-center p-4 border-b"
      >
          <label>Team One</label>
<!--        <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-32 mx-auto" />-->
      </span>
            <span
                    @click="isOpen = false"
                    v-on:click="goToProfile"
                    class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
            ><span class="mr-2">
          <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
          >

<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />-->
<!--</svg>-->
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

          </svg>
        </span>
        <span>Profile</span></span
            >
            <span
                    @click="isOpen = false"
                    v-on:click="goToAddTrip"
                    class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
            ><span class="mr-2">
          <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
          >
            <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>Add Trip</span></span
            >
            <span
                    @click="isOpen = false"
                    v-on:click="goToLeaderboard"
                    class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
            ><span class="mr-2">
          <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Leaderboard</span></span
            >
            <span
                    @click="isOpen = false"
                    v-on:click="goToStore"
                    class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
            ><span class="mr-2">
          <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
          >
            <path
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>Store</span></span
            >
            <span
                    @click="isOpen = false"
                    v-on:click="goToLogout"
                    class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
            ><span class="mr-2">
        </span>
        <span>Log out</span></span
            >

        </aside>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",

        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            drawer() {
                this.isOpen = !this.isOpen;
            },


            goToProfile() {
                this.$router.push({name: "profile"})
            },

            goToAddTrip() {
                this.$router.push({name: "addTrip"})
            },

            goToLeaderboard() {
                this.$router.push({name: "leaderboard"})
            },

            goToStore() {
                this.$router.push({name: "store"})
            },

            goToLogout() {
                this.$router.push({name: "login"})
            }




        },
        watch: {
            isOpen: {
                immediate: true,
                handler(isOpen) {
                    if (process.client) {
                        if (isOpen) document.body.style.setProperty("overflow", "hidden");
                        else document.body.style.removeProperty("overflow");
                    }
                }
            }
        },
        mounted() {
            document.addEventListener("keydown", e => {
                if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
            });
        },
    }
</script>

<style scoped>

</style>
