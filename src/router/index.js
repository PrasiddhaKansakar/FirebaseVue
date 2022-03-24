import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import PostPreview from '../views/PostPreview.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import CreatePost from '../views/CreatePost.vue'
import EditProduct from '../views/EditProduct.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import Testimonial from '../views/Testimonial.vue'
import ViewProduct from '../views/ViewProduct.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      requiresAuth: false,
    },
  },
  {
    path: '/post-preview',
    name: 'PostPreview',
    component: PostPreview,
    meta: {
      title: 'Preview Product Post',
      requiresAuth: true,
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Products',
      requiresAuth: false,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact',
      requiresAuth: false,
    },
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: CreatePost,
    meta: {
      title: 'Create Post',
      requiresAuth: true,
    },
  },
  {
    path: '/edit-product/:productid',
    name: 'EditProduct',
    component: EditProduct,
    meta: {
      title: 'Edit Product Post',
      requiresAuth: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password',
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      requiresAuth: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register',
      requiresAuth: false,
    },
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: Testimonial,
    meta: {
      title: 'Testimonial',
      requiresAuth: false,
    },
  },
  {
    path: '/view-product/:productid',
    name: 'ViewProduct',
    component: ViewProduct,
    meta: {
      title: 'View Product Post',
      requiresAuth: false,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Kin-Bech`
  next()
})

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      return next()
    }
    return next({ name: 'Home' })
  }
  return next()
})

export default router
