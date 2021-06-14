<template>

  <div class="news-grid">
    <div class="news-grid__hero">    
      <img class="news-grid__hero__img" src="../assets/news.jpg">    
    </div>

    <div class="news-grid__hero-title">
      <h1 class="news-grid__hero-title__h1">What's new at Changes</h1>
    </div>
  </div>   
</template>

<script>
  export default {
    name: 'NewsEventsContent',
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

  .news-grid {
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