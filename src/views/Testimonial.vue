<template>
  <div>
    <section id="testimonials">
      <h1>Customer Testimonials</h1>
      <div class="col">
        <p>
          Very essential site for buying,selling necessary items such as
          car,bikes,houses etc.
        </p>
        <p>Great job, guys, keep up the great work!</p>
        <p class="person">Ramesh Karki</p>
      </div>

      <div class="col">
        <p>
          It's the best site where we can buy and sell goods.
        </p>

        <p class="person">Anchal Basnet</p>
      </div>
      <div class="col">
        <p>
          Its huge platform for those buyers and suppliers who want to buy and
          sell there goods in notime without any hassel.
        </p>

        <p class="person">Subash Yadav</p>
      </div>
      <div class="col">
        <p>
          Easy nice app to sell and buy all the materials and good way to know
          the market price of materials. Best buy and sell with Kin-Bech.
        </p>

        <p class="person">Padam Khadka</p>
      </div>
      <div class="col">
        <p>
          I was worried the first time I tried the app but it is very easy to
          use app and simple. Very good.
        </p>

        <p class="person">Vijay Limbu</p>
      </div>
      <div class="col">
        <p>
          Nice online system from where you can purchase the things which you
          want.
        </p>

        <p class="person">Aashish Magar</p>
      </div>
      <div class="col">
        <p>
          Kin-Bech is one of the best platforms I have used till now. Can even
          pay with the edheba app.
        </p>

        <p>Thanks to the everyone involved, and keep up the great work guys!</p>

        <p class="person">Bikram Khatiwada</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin-top: 20px;
  padding: 0;
}

section#testimonials {
  overflow: visible;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-family: Raleway, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 2.3em;
  text-align: center;
  color: #a55959;
  transition: font-size 0.5s ease;
}

.col {
  width: 100%;
  border-bottom: 1px solid #a55959;
  overflow: visible;
  position: relative;
  padding: 3em;
}

p,
li {
  font-size: 1em;
  line-height: 1.3em;
}
p.person {
  text-align: right;
  color: #4cb6c1;
  font-weight: 700;
  font-size: 1.5em;
}

@media (min-width: 960px) {
  h1 {
    font-size: 3em;
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 1.8em;
    transition: font-size 0.5s ease;
  }
}
</style>
