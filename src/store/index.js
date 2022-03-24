import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productPosts: [],
    postLoaded: null,
    productHTML: 'Write your product description here...',
    productTitle: '',
    productPhotoName: '',
    productPhotoFileURL: null,
    productPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileCountry: null,
    profileCity: null,
    profilePhone: null,
    profileDOB: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    productPostsFeed(state) {
      return state.productPosts.slice(0, 2)
    },
    productPostsCards(state) {
      return state.productPosts.slice(2, 6)
    },
  },
  mutations: {
    newProductPost(state, payload) {
      state.productHTML = payload
    },
    updateProductTitle(state, payload) {
      state.productTitle = payload
    },
    fileNameChange(state, payload) {
      state.productPhotoName = payload
    },
    createFileURL(state, payload) {
      state.productPhotoFileURL = payload
    },
    openPhotoPreview(state) {
      state.productPhotoPreview = !state.productPhotoPreview
    },
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    setProductState(state, payload) {
      state.productTitle = payload.productTitle
      state.productHTML = payload.productHTML
      state.productPhotoFileURL = payload.productCoverPhoto
      state.productPhotoName = payload.productCoverPhotoName
    },
    filterProductPost(state, payload) {
      state.productPosts = state.productPosts.filter(
        (post) => post.productID !== payload
      )
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id
      state.profileEmail = doc.data().email
      state.profileFirstName = doc.data().firstName
      state.profileLastName = doc.data().lastName
      state.profileUsername = doc.data().username
      state.profileCountry = doc.data().country
      state.profileCity = doc.data().city
      state.profilePhone = doc.data().phone
      state.profileDOB = doc.data().dob
      console.log(state.profileId)
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') +
        state.profileLastName.match(/(\b\S)?/g).join('')
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload
    },
    changeLastName(state, payload) {
      state.profileLastName = payload
    },
    changeUsername(state, payload) {
      state.profileUsername = payload
    },
    changeCountry(state, payload) {
      state.profileCountry = payload
    },
    changeCity(state, payload) {
      state.profileCity = payload
    },
    changePhone(state, payload) {
      state.profilePhone = payload
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get()
      commit('setProfileInfo', dbResults)
      commit('setProfileInitials')
    },
    async getPost({ state }) {
      const dataBase = await db
        .collection('productPosts')
        .orderBy('date', 'desc')
      const dbResults = await dataBase.get()
      dbResults.forEach((doc) => {
        if (!state.productPosts.some((post) => post.productID === doc.id)) {
          const data = {
            productID: doc.data().productID,
            productHTML: doc.data().productHTML,
            productCoverPhoto: doc.data().productCoverPhoto,
            productTitle: doc.data().productTitle,
            productDate: doc.data().date,
            productCoverPhotoName: doc.data().productCoverPhotoName,
          }
          state.productPosts.push(data)
        }
      })
      state.postLoaded = true
    },
    async updatePost({ commit, dispatch }, payload) {
      commit('filterProductPost', payload)
      await dispatch('getPost')
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection('productPosts').doc(payload)
      await getPost.delete()
      commit('filterProductPost', payload)
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection('users').doc(state.profileId)
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
        country: state.profileCountry,
        city: state.profileCity,
        phone: state.profilePhone,
        dob: state.profileDOB,
      })
      commit('setProfileInitials')
    },
  },
  modules: {},
})
