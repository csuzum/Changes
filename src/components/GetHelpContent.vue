<template>
  <div class="get-help-grid">
    <div class="get-help-grid__hero">    
      <img class="get-help-grid__hero__img" src="../assets/support-group.jpg"> 
      <div class="get-help-grid__title">
        <h1 class="get-help-grid__title__h1">We're here for you!</h1>
      </div>   
    </div>
  </div>   
</template>

<script>
  export default {
    name: 'GetHelpContent',
  }
</script>

<style lang="scss">

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

  .get-help-grid {
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
        max-height: 100%;
      }
    }

  &__title {
      background-color: $orange;
      color: $white;

      &__h1 {
        // width: 100%;
        // color: $white;
        font-size: 5rem;
        font-weight: $light;
        line-height: 5rem;
        text-align: center;
        text-shadow: 2px 2px 10px $black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include mobile {
          font-weight: $medium;
          font-size: 2rem;
          line-height: 2rem;
        }        
      }
    }  
  }

</style> 