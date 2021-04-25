const authRouter = [
    {
        path: '/',
        alias: '/login',
        name: 'SignIn',
        component: () => import('@/views/pages/SignIn'),
      },
      {
        path: 'signUp',
        alias: '/register',
        name: 'SignUp',
        component: () => import('@/views/pages/SignUp'),
        hidden: true,
      },
]

export default authRouter;