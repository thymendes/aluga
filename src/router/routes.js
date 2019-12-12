
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'produto', component: () => import('pages/Produto.vue') },
      { path: 'checkout', component: () => import('pages/Checkout.vue') },
      { path: 'vender', component: () => import('pages/Vender.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'cadastre', component: () => import('pages/Cadastre.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
