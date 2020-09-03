<template>
    <div>
        <div>
            <nav-bar></nav-bar>
        </div>
        <div>
            <h1>Leaf store</h1>
        </div>
        <div class="storeContainers">
            <div v-on:click="confirm" class="">
                <p>{{cost}}</p>
                <img src="https://image.shutterstock.com/image-vector/green-tree-on-white-background-260nw-603174926.jpg" alt="Store image">
                <p>{{name}}</p>
                <p>{{description}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    import NavBar from "./NavBar";
    export default {
        name: "Store",
        components: {NavBar},
        data() {
            return {
                cost: 45,
                name: "Plant a native tree",
                description: "Plant a native tree!"

            }
        },
        methods: {
          confirm() {
              console.log("Implement me!");
            }
        },
    }
</script>

<style scoped>

</style>
