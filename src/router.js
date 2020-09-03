import VueRouter from "vue-router";

import Login from "@/components/Login";
import Profile from "@/components/Profile";
import HelloWorld from "@/components/HelloWorld";
import AddTrip from "./components/AddTrip";

const routes = [
    {path: "/", component: HelloWorld, name: "helloworld"},
    {path: "/login", component: Login, name: "login"},
    {path: "/profile", component: Profile, name: "profile"},
    {path: "/addTrip", component: AddTrip, name: "addTrip"}
];

const router = new VueRouter(
    {
        mode: "history",
        routes
    });

export default router;
