// ===========================================================================
/// <summary>
/// index.js
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 06.06.2023
/// </summary>
/// <created>ʆϒʅ, 06.06.2023</created>
/// <changed>ʆϒʅ, 21.11.2023</changed>
// ===========================================================================

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/ContactView.vue"),
        },
        {
            path: "/component",
            name: "component",
            component: () => import("../views/ComponentView.vue"),
        },
    ],
});

export default router;
