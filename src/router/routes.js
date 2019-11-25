
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'produto', component: () => import('pages/Produto.vue') },
      { path: 'checkout', component: () => import('pages/Checkout.vue') },
      { path: 'vender', component: () => import('pages/Vender.vue') }
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
