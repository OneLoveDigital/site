<template>
  <section class="container">
    <div class="onelove-intro">
      <img src="../assets/img/logo.svg" alt="One Love Logo" class="logo" />
      <h1 class="title tk-proxima-soft">onelove</h1>
      <p class="intro title tk-proxima-soft">We are an all volunteer digital agency working with various non-profits to create engaging experiences which help drive social change.</p>
      <a href="mailto:hello@onelove.digital" class="email-link tk-proxima-soft">Get in touch</a>
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 100vh;
}
.onelove-intro {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.title
{
  font-weight: bold;
  margin: 25px 0;
}
.intro {
  width: 75%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: normal;
}
.email-link {
  display: inline-block;
  margin-top: 25px;
  font-size: 16px;
  color: #e32559;
  text-decoration: none;
}
</style>
