const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/PeliculaPage.vue") }],
  // },
  {
    path: "/",
    component: () => import("pages/PeliculaPage.vue"),
  },
  {
    path: "/Favoritos",
    component: () => import("pages/FavoritosPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
