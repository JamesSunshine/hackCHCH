<template>
    <div class="">
        <div class="pt-20 full-height">
            <img src="https://cdn.discordapp.com/attachments/751284461253033984/751561365084438639/lol.png" alt="logo" class=" height-logo-login inline-block"/>
            <label class="inline-block ml-4 text-3xl">CompetiTrees</label>
            <div class="bg-white m-auto general-container-rounded mx-6 shadow">
                <div class="">
                    <div class="">
                        <h2 class="text-2xl">Log In</h2>
                    </div>
                    <div class="mt-3">
<!--                        <div class="">-->
<!--                            <label for="userNameInput" class="">Username</label>-->
<!--                        </div>-->
                        <div>
                            <input type="email" class="custom-input border-b-2 border-blue-400" id="userNameInput" v-model="userName"
                                   placeholder="Username" required>
                        </div>
<!--                        <div>-->
<!--                            <label for="passwordInput" class="tb-input-grid-label tb-label-margin">Password</label>-->
<!--                        </div>-->
                        <div class="input-grid-field">
                            <input type="password" id="passwordInput" class="custom-input mt-2  border-b-2 border-blue-400" v-model="password"
                                   placeholder="Password" required v-on:keyup.enter="submit">

                        </div>

                    </div>

                    <div id="tb-footer" class=" mt-6">
                        <button type="button" class="p-3 bg-green-400 radius-border w-full my-2" v-on:click="submit">Log In</button>
                        <button class="p-3 bg-earth-blue radius-border w-full">Sign up</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                userName: "Ryo Nishikawa",
                password: "Password123",
            }
        },

        methods: {
            async submit() {
                sessionStorage.setItem("userName", this.userName);
                sessionStorage.setItem("totalLeafPoints", 54);
                sessionStorage.setItem("leafPoints", 54);
                sessionStorage.setItem("badgeEarnt", "false");
                sessionStorage.setItem("distance", "0");
                sessionStorage.setItem("co2saved", "0");
                sessionStorage.setItem("submittedValues", "false");
                await this.$router.push({name: "profile"});
            }
        }
    }
</script>

<style scoped>

    .custom-input {
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        color: black;
    }

    .height-logo-login {
        height: 100px;
        margin: auto;
        margin-bottom: 2em;
        margin-left: 2.5em;
    }



</style>
