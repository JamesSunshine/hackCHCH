import VueRouter from "vue-router";

import Login from "@/components/Login";
import HelloWorld from "@/components/HelloWorld";

const routes = [
    {path: "/", component: HelloWorld, name: "helloworld"},
    {path: "/login", component: Login, name: "login"}
]

const router = new VueRouter(
    {
        mode: "history",
        routes
    });

export default router;







