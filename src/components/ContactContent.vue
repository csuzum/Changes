<template>
  <div class="contact-grid">
    <div class="contact-grid__hero">    
      <img class="contact-grid__hero__img" src="../assets/woman-phone.jpg">    
    </div>

    <div class="contact-grid__hero-title">
      <h1 class="contact-grid__hero-title__h1">We're here for you</h1>
    </div>
    <!-- <div class="contact-grid__hero">    
      <img class="contact-grid__hero__img" src="../assets/woman-phone.jpg"> 
      <div class="contact-grid__title">
        <h1 class="contact-grid__title__h1">We're here to help!</h1>
      </div>   
    </div> -->
  </div>   
</template>

<script>
  export default {
    name: 'ContactContent',
  }
</script>

<style scoped lang="scss">

@mixin tablet {
  @media screen and (max-width: 860px) {
    @content;
  }
}

@mixin mobile() {
  @media screen and (max-width: 567px) {
    @content;
  }
}

  .contact-grid {
    margin: auto;
    display: grid;
    grid-template-columns: 3fr 2.25fr 2.25fr 2.25fr 2.25fr;
    grid-template-areas: "hero hero hero hero hero" ". content content content content" ". highlight1 highlight1 highlight2 highlight2";
    @include mobile {
      display: unset;
    }
    
    &__hero {
      grid-area: hero;
      font-family: $sans-serif;
      font-weight: $light;
      &__img {
        object-fit: cover;
        max-width: 100%;
      }
    } 

    &__hero-title {
      grid-area: hero;
      z-index: 1;
      &__h1 {
        color: $white;
        font-size: 3.5rem;
        font-weight: $light;
        text-shadow: 2px 2px 10px $dark-gray;
        text-align: center;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        margin: auto;
      }
    }  
  }
</style> 