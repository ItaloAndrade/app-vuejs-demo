import 
  SignIn
 from "@/views/pages/SignIn"

const authRouter = [{
    path: '/',
    alias: '/login',
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: ` Login | Marvel`
    }
  },
  {
    path: '/signUp',
    alias: '/register',
    name: 'SignUp',
    component: () => import('@/views/pages/SignUp'),
    hidden: true,
    meta: {
      title: ` Registro | Marvel`
    }
  },
]

export default authRouter;