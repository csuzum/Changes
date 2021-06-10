<template>
  <div class="support-grid">
    <div class="support-grid__hero">    
      <img class="support-grid__hero__img" src="../assets/seedling-hands.jpg"> 
      <div class="support-grid__title">
        <h1 class="support-grid__title__h1">Be a changemaker for families</h1>
      </div>   
    </div>
  </div>   
</template>

<script>
  export default {
    name: 'SupportContent',
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

  .support-grid {
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
        max-width: 100%;
        max-height: 100%;
      }
    }

  &__title {
      color: $white;

      &__h1 {
        width: 95%;
        font-size: 5rem;
        font-weight: $light;
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