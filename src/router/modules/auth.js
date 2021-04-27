const authRouter = [
    {
        path: '/',
        alias: '/login',
        name: 'SignIn',
        component: () => import('@/views/pages/SignIn'),
        meta: { title: ` Login | Marvel` }
      },
      {
        path: '/signUp',
        alias: '/register',
        name: 'SignUp',
        component: () => import('@/views/pages/SignUp'),
        hidden: true,
        meta: { title: ` Registro | Marvel` }
      },
]

export default authRouter;