<template>
  <div class="main-grid">
    <div class="main-grid__hero">    
      <img class="main-grid__hero__img" src="../assets/frustrated-mom-son-crop.jpg">    
    </div>

    <div class="main-grid__quote" id="mobileShow">
      <h1 class="main-grid__quote__head">Help for parents</h1>
      <p class="main-grid__quote__p">I was a basket-case when we joined changes. Our son was using drugs, drug dealing and failing school. The group helped me by confronting me about the ways in which I was enabling our son.
      <br><span class="main-grid__quote__p__father">~ father of 15 year-old son</span>
      </p>
    </div>

    <div class="main-grid__content">    
      <h1 class="main-grid__content__h1">Are you struggling to find successful parenting solutions?</h1>
      <h1 class="main-grid__content__h1">Do you want to regain control of your home and guide your children to accept responsibility for their behavior?</h1>
      <p class="main-grid__content__p">Changes Parent Support Network is a structured, peer-led program that provides support to parents struggling with children who are engaging in oppositional and self-destructive behaviors. Changes offers hope, help, support and relief from feeling overwhelmed and alone. We invite you to explore this website for information about our philosophy, our structured approach and meeting schedules.</p>    
    </div>

    <aside class="main-grid__aside" id="mobileHide">
      <h1 class="main-grid__aside__h1">Help for parents</h1>
        <div class="main-grid__aside__box">
          <p class="main-grid__aside__box__p">I was a basket-case when we joined changes. Our son was using drugs, drug dealing and failing school. The group helped me by confronting me about the ways in which I was enabling our son.
            <br><span class="main-grid__aside__box__p__father">~ father of 15 year-old son</span>
          </p>
          <div class="main-grid__aside__box__wrapper">
            <p class="main-grid__aside__box__wrapper__intro">An Introduction to Changes</p>
            <img class="main-grid__aside__box__wrapper__img" src="../assets/father-teen-son-crop.jpg"> 
          </div>
          <div class="main-grid__aside__box__mission">
            <h3 class="main-grid__aside__box__mission__head">Mission</h3>
            <p>Changes Parent Support Network fosters healthy families by equipping parents with tools and support to change their behavior.</p>
            <h3 class="main-grid__aside__box__mission__head">Vision</h3>
            <p>Changes brings hope to parents in our communities by connecting them to strong, sustainable groups.</p>
          </div>
        </div>
      </aside>

      <div class="main-grid__intro" id="mobileShow">
        <p class="main-grid__intro__head">An Introduction to Changes</p>
        <img class="main-grid__intro__img" src="../assets/father-teen-son-crop.jpg"> 
        <h3 class="main-grid__intro__MV">Mission</h3>
        <p class="main-grid__intro__p">Changes Parent Support Network fosters healthy families by equipping parents with tools and support to change their behavior.</p>
        <h3 class="main-grid__intro__MV">Vision</h3>
        <p class="main-grid__intro__p">Changes brings hope to parents in our communities by connecting them to strong, sustainable groups.</p>
      </div>

      <div class="main-grid__highlight">
          <div class="main-grid__highlight__1">
          <img class="main-grid__highlight__1__img" src="../assets/support.jpg">
          <p class="main-grid__highlight__1__p">Taking that first step for help can be difficult, and scary, but most first-night parents leave with a new feeling of hope. New parents meet together in a small group on their first night. </p>
        </div>
        <div class="main-grid__highlight__2">
          <img class="main-grid__highlight__2__img" src="../assets/mom-adult-son.jpg">
          <p class="main-grid__highlight__2__p">One common thread binds us together—we are all parenting a troubled youth or young adult. New attendees find they easily connect with other parents who are in a similar situation to their own.</p>
        </div>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'HomeContent',
  }
</script>

<style scoped lang="scss">
// media queries
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

  // display only on mobile 
#mobileShow {
  display: block;
}
@media screen and (min-width: 500px) {
  #mobileShow {
    display: none;
  }
}

// does not display on mobile
#mobileHide {
  display: block;
}
@media only screen and (min-width: 320px) and (max-width: 567px) {
  #mobileHide {
    display: none;
  }
}

  .main-grid {
    display: grid;
    grid-template-columns: 3fr 2.25fr 2.25fr 2.25fr 2.25fr;
    grid-template-areas: "hero hero hero hero hero" ". content content content content" ". hilight hilight hilight hilight";
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

    // main content section
    &__content {
      grid-area: content;
      width: 90%;
      font-family: $sans-serif;
      font-weight: $light;
      padding: 1rem 3rem 2rem 1.5rem;
      @include mobile {
        width: 100%;
        text-align: center;
        padding: 0rem 2.5rem 1rem 2.5rem;
      }
      &__h1 {
        font-size: 1.9rem;
        font-weight: $medium;
        color: $changes-blue;
        margin-top: 1rem;
        @include mobile {
          font-size: 1.7rem;
        }
      }
      &__p {
        font-size: 1.2rem;
        line-height: 2rem;
        @include mobile {
          font-size: 1.4rem;
          // line-height: 1.5rem;
          text-align: center;
        }       
      }
    }

    // aside only appears on desktop
    &__aside {
      width: 23rem;
      padding-top: 3rem;
      grid-row-start: hero-start;
      grid-row-end: highlight1-end;
      grid-column-start: hero-start;
      z-index: 1;

      &__h1 {
        color: $white;
        font-size: 4rem;
        font-weight: $light;
        line-height: 4rem;
        text-align: center;
        padding: 2rem 0 3rem 0;
        margin: 0;
      }
      &__box {
        background-color: $orange;
        border-top: 1rem solid white;
        border-right: 1rem solid white;
        padding: 1rem 0rem;
        &__p {
          font-size: 1.6rem;
          line-height: 2.3rem;
          font-weight: $light;
          color: $white;
          text-align: center;
          padding: .5rem 2rem 1rem 2rem;
          &__father {
            font-size: 1.3rem;
            font-style: italic;
          }
        }
        &__wrapper {
          &__intro {
            background-color: $dark-gray;
            height: 3rem;
            color: $white;
            font-weight: $light;
            font-size: 1.4rem;
            text-align: center;
            padding-top: .5rem;
            margin: 0;
          }
          &__img {
            width: 22rem;
          }
        }
        &__mission {
          font-size: 1.6rem;
          line-height: 2.3rem;
          font-weight: $light;
          color: $white;
          text-align: center;
          padding: 0rem 2rem 0rem 2rem;
          &__head {
            font-weight: $medium;
            line-height: .1rem;
            text-transform: uppercase;
            padding-top: 1rem;
          }
        }
      }
    }

    // quote section only appears on mobile
    &__quote {
      background-color: $orange;
      color: $white;
      &__head {
        font-weight: $light;
        font-size: 2.3rem;
        text-align: center;
        padding-top: 2rem;
        margin-top: -1rem;
      }
      &__p {
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
        padding: 0rem 3rem 2rem 3rem;
        margin-top: -1rem;
      }
    }

    // intro only appears on mobile
    &__intro {
      grid-area: intro;
      background-color: $orange;
      padding-bottom: 2rem;
      &__head {
        background-color: $dark-gray;
        height: 8rem;
        color: $white;
        font-weight: $light;
        font-size: 2rem;
        text-align: center;
        padding-top: 1.5rem;
        margin: 0;
      }
      &__img {
        width: 100%;
      }
      &__MV {
        font-size: 2.5rem;
        font-weight: $light;
        color: $white;
        text-align: center;
        padding: 0rem;
        margin: 1.5rem 0rem -1rem 0rem;
      }
      &__p {
        color: $white;
        font-size: 1.5rem;
        line-height: 2.3rem;
        text-align: center;
        padding: 0rem 2rem;
      }
    }

    // highlight image/text sections
    &__highlight {
      grid-area: hilight;
      width: 90%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include mobile {
        width: 100%;
      }
      &__1 {
        width: 29rem;
        padding-left: 1.5rem;
        margin-right: 4rem;
        @include mobile {
          padding: 0rem;
          margin: 0rem;
        }
        &__img {
          width: 29rem;
          @include mobile {
            width: 100%;
          }
        }
        &__p {
          font-size: 1.2rem;
          font-weight: $light;
          line-height: 1.8rem;          
          padding: 1rem 0rem;
          @include mobile {
            text-align: center;
            font-size: 1.4rem;
            line-height: 2rem;
            padding: 0rem 2rem;
          }
        }
      }
      &__2 {        
        width: 29rem;
        margin-right: 4rem;
        @include mobile {
          padding: 0rem;
          margin: 0rem;
        }
        &__img {
          width: 29rem;
          @include mobile {
            width: 100%;
          }
        }
        &__p {
          font-size: 1.2rem;
          font-weight: $light;
          line-height: 1.8rem;
          padding: 1rem 0rem;
          @include mobile {
            text-align: center;
            font-size: 1.4rem;
            line-height: 2rem;
            padding: 0rem 2rem;
          }
        }
      }
    }
  }
</style>