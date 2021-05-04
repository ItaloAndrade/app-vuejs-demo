import 
  SignIn
 from "@/views/pages/SignIn"

const authRouter = [{
    path: '/',
    alias: '/login',
    name: 'SignIn',
    component: SignIn,
    hidden: true,
    meta: {
      title: `Login | Marvel`,icon: 'mdi-view-dashboard',
      roles : [],
      isAuth:false,
      isChild: false,
    }
  },
  {
    path: '/signUp',
    alias: '/register',
    name: 'SignUp',
    component: () => import('@/views/pages/SignUp'),
    hidden: true,
    meta: {
      title: ` Registro | Marvel`,icon: 'mdi-view-dashboard', roles : [],
      isAuth:false,
      isChild: false,
    }
  }
]

export default authRouter;