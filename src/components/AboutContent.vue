<template>
  <div class="about-grid">
    <div class="about-grid__hero">    
      <img class="about-grid__hero__img" src="../assets/concerned-woman.jpg"> 
      <div class="about-grid__title">
        <h1 class="about-grid__title__h1">Changes brings hope to struggling parents</h1>
      </div>   
    </div>
    <!-- parent stories grid section -->
      <div class="Stories">
        <h1 class="Stories__title">Our Parent Stories</h1>
        <div class="Stories__title__cols">
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/mom-two-daughters.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p"> Angie
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">I feel good every time that I help another family in crisis, knowing that I may have made the world a little better place that day.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/parents-group.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p">Melissa & Bill
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">I feel good every time that I help another family in crisis, knowing that I may have made the world a little better place that day.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/father-teen-son-crop.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p">Gerald
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">I was a basket case when we joined Changes. Our son was using drugs, drug dealing and failing school. The group helped me by confronting me about the ways in which I was enabling our son.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/mom-adult-son-vert.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p">Christina
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">I tried everything I could think of on my own, but nothing worked… Joining Changes and seeking solutions with other parents has been a lifesaver.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/frustrated-mom-son.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p">Vaughnetta
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Stories__title__cols__col" onclick="this.classList.toggle('hover');">
            <div class="Stories__title__cols__col__container">
              <div class="Stories__title__cols__col__container__front" src="../assets/mom-daughter-hug.jpg">
                <div class="Stories__title__cols__col__container__front__inner">
                  <p class="Stories__title__cols__col__container__front__inner__p">Maryanne
                  </p>
                </div>
              </div>
              <div class="Stories__title__cols__col__container__back">
                <div class="Stories__title__cols__col__container__back__inner">
                  <p class="Stories__title__cols__col__container__back__inner__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'AboutContent',
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

  .about-grid {
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-template-areas: "hero hero hero hero" "stories stories stories stories";
    @include mobile {
      display: unset;
    }
    
    &__hero {
      grid-area: hero;
      font-family: $sans-serif;
      font-weight: $light;
      text-align: center;
      display: block;
      &__img {
        object-fit: scale-down;
        max-width: 100%;
        // max-height: 100%;
      }
    }

  &__title {
      color: $white;

      &__h1 {
        width: 95%;
        font-size: 4rem;
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

  .Stories__title__cols__col__container__front {
    background-image: url(../assets/mom-two-daughters.jpg);
  }

  .Stories {
  grid-area: stories;
  width: 80%;
  margin: 0 auto;
  max-width: 80rem;
  padding-bottom: 4rem;
  &__title {
    font-size: 3rem;
    font-weight: $light;
    color: $changes-blue;
    text-align: center;
    margin: 2rem 0rem 1rem;
    // parent stories grid
    &__cols {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      &__col {
        width: calc(33% - 2rem);
        margin: 1rem;
        cursor: pointer;
        @include tablet {
          width: calc(50% - 2rem);
        }
        @include mobile {
          width: 100%;
          margin: 0 0 2rem 0;
        }
        // styling & animation for photo blocks, front & back 
        &__container {
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          -webkit-perspective: 1000px;
          perspective: 1000px;
          
          &__front,
          &__back {
            background-size: cover;
            box-shadow: 0 4px 8px 0 $gray;
            border-radius: 10px;
            background-position: center;
            -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            text-align: center;
            min-height: 320px;
            height: auto;
            border-radius: 10px;
            color: $white;
            font-size: 1.2rem;
          }
          &__back {
            background: $orange;
            // background: -webkit-linear-gradient(45deg, $lt-orange 0%, $orange 100%);
            // background: -o-linear-gradient(45deg, $lt-orange 0%, $orange 100%);
            // background: linear-gradient(45deg, $lt-orange 0%, $orange 100%);
          }
          &__front:after {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            // width: 100%;
            // height: 100%;
            // content: '';
            // display: block;
            // opacity: .4;
            // background-color: $dark-gray;
            // -webkit-backface-visibility: hidden;
            // backface-visibility: hidden;
            border-radius: 10px;
          }
          &:hover &__front,
          &:hover &__back {
            -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
            transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
          }
          &__back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          &__front__inner {
            -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
            transform: translateY(-50%) translateZ(60px) scale(0.94);
            top: 50%;
            position: absolute;
            left: 0;
            width: 100%;
            // padding: 1rem;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: 1px solid transparent;
            -webkit-perspective: inherit;
            perspective: inherit;
            z-index: 2;
          }
          .Stories__title__cols__col__container &__back {
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          .Stories__title__cols__col__container &__front {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          &:hover &__back {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          &:hover &__front {
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          &__front &__front__inner &__front__inner__p {
            background-color: $changes-blue;
            opacity: .8;
            color: $white;
            font-family: $sans-serif;
            font-size: 2rem;
            font-weight: $light;
            margin-top: 12rem;
            padding: .5rem 1rem .5rem;
            position: relative;
          }
          &__back &__back__inner &__back__inner__p {
            color: $white;
            font-weight: $medium;
            font-size: 1.2rem;
            line-height: 2rem;
            margin-top: .5rem;
            padding: 2rem 2rem 0rem;
            position: relative;
          }
        }
      }
    }
  }
}</style> 