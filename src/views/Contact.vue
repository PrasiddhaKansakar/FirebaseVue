<template>
  <div class="container">
    <p>
      For all support issues, please email mail@edheba.com or call
      977-9801212112
    </p>

    <p>
      "We have started to create a series of"
      <strong>HOW TO --- TRAINING videos</strong> "in our Youtube channel to
      ensure that our users know how to use our services better:" <br />
      <a href="https://youtu.be/kGAnSSniVJ8">How to Open e-Dheba Account</a
      ><br />
      <a href="https://youtu.be/SfrSiegkeXU">How to Change Password</a><br />
      <a href="https://youtu.be/XsLYaOa6TIA">Forgot Password</a><br />
      <a href="https://youtu.be/FuEL4ZDTG-E">How to Sign Out</a><br />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-right: 15 px;
  padding-left: 15 px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
}
@media (min-width: 768px) {
  .container {
    max-width: 720 px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540 px;
  }
}
p {
  color: #575962;
  font-size: 16px;
  line-height: 1.5;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
</style>
