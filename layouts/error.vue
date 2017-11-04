<template>
  <section class="container">
    <img src="../assets/img/logo.svg" alt="One Love Logo" class="logo" />
    <h1 class="title tk-proxima-soft">{{ error.statusCode }}</h1>
    <h2 class="info tk-proxima-soft">{{ error.message }}</h2>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}
.info {
  font-weight: normal;
}
.title
{
  color: #505153;
  font-weight: bold;
  font-size: 2.5em;
  margin: 0;
}
</style>
