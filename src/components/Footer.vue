<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >Kin-Bech</router-link
          >
          <ul>
            <li>
              <a href="https://www.facebook.com/groups/MICNepal/"
                ><facebook class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCIPkqrM7-W84rR2Z-ZfDh0g"
                ><youTube class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="https://twitter.com/allentuladhar"
                ><twitter class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/edheba_superapp/?hl=en"
                ><instagram class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/unlimited-technology"
                ><linkedin class="svg-icon"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Products' }"
              >Shop Now</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'CreatePost' }"
              >Upload Products</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >LogIn / Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="center">
        <div class="col-3">
          <ul>
            <router-link class="link" :to="{ name: 'About' }"
              >About Us</router-link
            >
            <router-link class="link" :to="{ name: 'Testimonial' }"
              >User Testimonials</router-link
            >
            <router-link class="link" :to="{ name: 'Contact' }"
              >Contact Us</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>
          Kin-Bech is a new venture for the e-dheba superapp. It aims to bring
          buyers and sellers closer for the easier purchase of pre-owned goods.
        </p>
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import facebook from '../assets/Icons/icons8-facebook.svg'
import youTube from '../assets/Icons/icons8-youtube.svg'
import twitter from '../assets/Icons/icons8-twitter.svg'
import instagram from '../assets/Icons/icons8-instagram.svg'
import linkedin from '../assets/Icons/icons8-linkedin.svg'
export default {
  name: 'footer-vue',
  components: {
    facebook,
    youTube,
    twitter,
    instagram,
    linkedin,
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 50px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .center {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-3 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
    }
    p {
      margin-top: auto;
      text-align: right;
      @media (max-width: 800px) {
        text-align: center;
      }
    }
  }
}
</style>
