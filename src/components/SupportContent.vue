<template>
  <div class="support-grid">
    <div class="support-grid__hero">    
      <img class="support-grid__hero__img" src="../assets/seedling-hands.jpg" alt="two people holding seedling in their hands">    
    </div>
    <div class="support-grid__hero-title">
      <h1 class="support-grid__hero-title__h1">Help bring Changes to families</h1>
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
  @include tablet {
    width: 100%;
  }
  &__hero {
    grid-area: hero;
    font-family: $sans-serif;
    font-weight: $light;
    &__img {
      object-fit: cover;
      max-width: 100%;
      @include mobile {
        margin: -1rem 0;
      }
    }
  }
  &__hero-title {
    grid-area: hero;
    z-index: 1;
    @include mobile {
      position: relative;
    }
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
      @include tablet {
        top: 23%;
      }
      @include mobile {
        font-weight: $medium;
        font-size: 2rem;
        margin-top: -3rem;
      }
    }
  }
}
</style> 