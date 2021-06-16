<template>
  <div class="get-help-grid">
    <div class="get-help-grid__hero">    
      <img class="get-help-grid__hero__img" src="../assets/support-group.jpg" alt="group of happy seated support group members">    
    </div>
    <div class="get-help-grid__hero-title">
      <h1 class="get-help-grid__hero-title__h1">We're here for you</h1>
    </div>
    <div class="get-help-grid__intro">
      <h1 class="get-help-grid__intro__h1">Taking that first step for help can be difficult, and scary, but most first-night parents leave with a new feeling of hope.</h1>
      <div class="get-help-grid__intro__columns">
        New parents meet together in a small group on their first night. An experienced member-parent explains the program structure and gives you a chance to talk a bit about your situation and ask questions. You will have an opportunity to watch other parents in small groups and get an idea of how the meetings work. At the end of the evening you will meet a parent who will call you during the week to help you with your issues at home and answer any lingering questions.<br>
        <br><span class="get-help-grid__intro__columns__subhead">Call 1-888-468-2620 for assistance in joining a meeting.</span> You will be asked to leave a message and an experienced member-parent will return your call. This parent will answer your questions and give you information about meeting options.
      </div>
    </div>
    <div class="get-help-grid__locations">
      <div class="get-help-grid__locations__meetings">
        <h1 class="get-help-grid__locations__h1">We're glad you're here, but sorry you had to come</h1>
        <img class="get-help-grid__locations__meetings__img" src="../assets/welcome-group.jpg" alt="four people standing with open welcoming arms">
        <h1 class="get-help-grid__locations__h1">Find your Changes meeting</h1>
        <div class="get-help-grid__locations__meetings__container">
          <p class="get-help-grid__locations__meetings__container__p"><span class="get-help-grid__locations__meetings__container__p__span">Everett, WA </span> | 4634 Alger Ave | Thursdays: 6:30-9pm(PST)</p>
          <p class="get-help-grid__locations__meetings__container__p"><span class="get-help-grid__locations__meetings__container__p__span">Redmond, WA</span> | 6505 176th Ave NE | Tuesdays: 7-9:30pm(PST)</p>
          <p class="get-help-grid__locations__meetings__container__p"><span class="get-help-grid__locations__meetings__container__p__span">Seattle, WA </span> | 4401 2nd Ave NE | Wednesdays: 7-9:30pm(PST)</p>
          <p class="get-help-grid__locations__meetings__container__p"><span class="get-help-grid__locations__meetings__container__p__span">Online</span> | Saturdays: 10am-Noon(PST)</p>
        </div>
      </div>
    </div>
    <div class="get-help-grid__quote">
      <h2 class="get-help-grid__quote__head">While you prepare to change your family dynamics, choose your message of hope.</h2>
      <button class="get-help-grid__quote__button" @click="isShowing ^= true" v-on:click="getHappiness">Happiness</button>
      <button class="get-help-grid__quote__button" @click="isShowing ^= true" v-on:click="getFuture">Future</button>
      <button class="get-help-grid__quote__button" @click="isShowing ^= true" v-on:click="getWisdom">Wisdom</button>
      <button class="get-help-grid__quote__button" @click="isShowing ^= true" v-on:click="getInspirational">Inspirational</button>
      <div v-show="isShowing" class="get-help-grid__quote__box">
        <h2 class="get-help-grid__quote__box__text">{{ list.content }}</h2>
        <h2 class="get-help-grid__quote__box__author">{{ "~" + list.author }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quote',
  data(){
    return {
      list: [],
      isShowing: false,
    }
  },
  methods: {
    getHappiness(){
      fetch('https://api.quotable.io/random?tags=happiness')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.list = json
      })
      .catch((err)=>{alert("Oops! Your requested quote did not load.", err)})
    },

    getFuture(){
      fetch('https://api.quotable.io/random?tags=future')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.list = json
      })
      .catch((err)=>{alert("Oops! Your requested quote did not load.", err)})
    },

    getWisdom(){
      fetch('https://api.quotable.io/random?tags=wisdom')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.list = json
      })
      .catch((err)=>{alert("Oops! Your requested quote did not load.", err)})
    },

    getInspirational(){
      fetch('https://api.quotable.io/random?tags=inspirational')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.list = json
      })
      .catch((err)=>{alert("Oops! Your requested quote did not load.", err)})
    },         
  }
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

.get-help-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-template-areas: "hero hero hero hero" "intro intro intro intro" "locations locations locations locations" "quote quote quote quote";
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
  &__intro {
    grid-area: intro;
    width: 100%;
    margin: auto;
    color: $white;
    background-color: $orange;
    @include mobile {
      padding: 1.5rem 0;
    }
    &__h1 {
      font-size: 1.9rem;
      font-weight: $light;
      text-align: center;
      margin: auto;
      padding-top: 2rem;
      width: 80%;
      @include mobile {
        font-size: 1.7rem;
      }
    }
    &__columns {
      width: 80%;
      margin: auto;
      column-count: 2;
      column-gap: 2rem;
      font-size: .9rem;
      line-height: 1.6rem;
      padding: 1rem 0 2.5rem 0;
      @include mobile {
        font-size: 1.1rem;
        line-height: 1.8rem;
        column-count: 1;
        text-align: center;
        padding-bottom: 1rem;
      }
      &__subhead {
        font-weight: $xbold;
        color: $white;
      }
    }
  }
  &__locations {
    grid-area: locations;
    background-color: $changes-blue;
    text-align: center;
    padding: 1rem 0 0 0;
    @include mobile {
      grid-area: unset;
    }
    &__h1 {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: $light;
      text-align: center;
      color: $white;
      margin-top: 1rem;
      @include mobile {
        font-size: 2rem;
        margin-top: 0rem;
        padding: 0 2rem;
      }
    }
    &__meetings {
      width: 80%;
      margin: auto;
      font-size: 1rem;
      line-height: 1.7rem;
      padding-bottom: 2rem;
      @include mobile {
        display: unset;
      }
      &__img {
        display: block;
        width: 600px;
        margin: auto;
        @include mobile {
          width: 100%;
          height: 100%;
          padding-bottom: 1rem;
        }
      }
      &__container {
        padding-bottom: 1rem;
        &__p {
          color: $white;
          margin-top: -.5rem;
          @include mobile {
            font-size: 1.3rem;
            // text-align: center;
            padding: 0rem 2rem;
          }
          &__span {
            font-weight: $bold;
          }
        }
      }
    }
  }
  &__quote {
    grid-area: quote;
    text-align: center;
    padding: 2rem 0rem;
    @include mobile {
      // padding-top: .5rem;
    }
    &__head {
      font-size: 1.9rem;
      // font-weight: $medium;
      font-weight: $light;
      color: $changes-blue;
      width: 70%;
      margin: auto;
      @include mobile {
        font-size: 1.7rem;
        font-weight: $medium;
        padding-bottom: 1rem;
      }
    }
    &__button {
      background-color: $orange;
      border: none;
      height: 2.5rem;
      color: $white;
      font-size: 1.2rem;
      font-weight: $medium;
      padding: 0rem 1rem;
      margin: 1rem 1rem;
      box-shadow: 3px 3px 15px $lt-gray;
      @include mobile {
        height: 3rem;
        font-size: 1.7rem;
        margin: .7rem 2rem;
      }
    }
    &__box {
      width: 50%;
      margin: auto;
      background-color: $changes-blue;
      color: white;
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      margin-top: 1rem;
      box-shadow: 3px 3px 15px $lt-gray;
      @include mobile {
        width: 80%;
        margin-top: 2rem;
      }
      &__text {
        font-size: 1.5rem;
        line-height: 2.2rem;
        font-weight: $light;
        margin-top: 1rem;
        @include mobile {
          font-size: 1.8rem;
          margin-top: .5rem;
        }
      }
      &__author {
        font-size: 1.2rem;
        font-weight: $light;
        font-style: italic;
        margin-top: 1rem;
        @include mobile {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style> 