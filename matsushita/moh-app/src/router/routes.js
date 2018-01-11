import Profile from '../components/profile/Index.vue'
import ChatList from '../components/chat/List.vue'
import ChatDetail from '../components/chat/Detail.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
const routes = [
  {
    path: '/profile/index',
    name: 'profileLink',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat/list',
    name: 'chatListLink',
    component: ChatList,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat/detail',
    name: 'chatDetailLink',
    component: ChatDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    name: 'signInLink',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signUpLink',
    component: Signup
  },
  {
    path: '*',
    redirect: '/signin'
  }
];
export default routes
