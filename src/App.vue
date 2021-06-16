<template>
  <main>
    <header class="header-grid">
      <div class="header-grid__logo">
        <img class="header-grid__logo__img" src="./assets/cpsn-logo.png" alt="Changes Parent Support Network logo">
      </div>
      <p class="header-grid__call">Need help? <span class="header-grid__call__phone">Call 1-888-000-0000</span></p>
      <div class="header-grid__donate">
        <p class="header-grid__donate__p">Donate</p>
      </div>
      <div class="header-grid__nav" id="mainNavApp">
        <nav class="header-grid__nav__items" v-bind:class="active" v-on:click.prevent>
          <a href="#" class="home header-grid__nav__items__item" v-on:click="makeActive('home')">
            <router-link to="/" class="home">Home</router-link>
          </a>
          <a href="#" class="about header-grid__nav__items__item" v-on:click="makeActive('about')">
            <router-link to="/about" class="about">About</router-link>
          </a>
          <a href="#" class="get-help header-grid__nav__items__item" v-on:click="makeActive('get-help')">
            <router-link to="/get-help" class="get-help">Get Help</router-link>
          </a>
          <a href="#" class="news-events header-grid__nav__items__item" v-on:click="makeActive('news-events')">
            <router-link to="/news-events" class="news-events">News & Events</router-link>
          </a>
          <a href="#" class="support header-grid__nav__items__item" v-on:click="makeActive('support')">
            <router-link to="/support" class="support">Support Changes</router-link>
          </a>
          <a href="#" class="contact header-grid__nav__items__item" v-on:click="makeActive('contact')">
            <router-link to="/contact" class="contact">Contact</router-link>
          </a>
        </nav>
      </div>
    </header>
    <router-view />
    <footer class="footer-grid">
      <div class="footer-grid__changes">
        <img class="footer-grid__changes__logo" src="./assets/cpsn-logo-rev.png" alt="Changes Parent Support Network logo">
        <p>4401 2nd Ave NE<br>Seattle, WA 98105</p>
        <p class="footer-grid__changes__address">office@cpsn.org</p>
      </div>
      <div class="footer-grid__phone">
        <h1 class="footer-grid__phone__help">Need help?</h1>
        <h2 class="footer-grid__phone__call">Call<br>1-888-000-0000</h2>
      </div>
      <div class="footer-grid__signup">
        <h1 class="footer-grid__signup__heading">Sign up</h1>
        <p class="footer-grid__signup__p">for the latest news from Changes</p>
        <form class="footer-grid__signup__form" id="signup" name="signupForm" method="GET">
          <div class="footer-grid__signup__form__email">
            <input class="footer-grid__signup__form__input" type="text" name="emailAddress" required id="emailAddress" placeholder="name@example.com">
          </div>
        </form>
      </div>
      <div class="footer-grid__connect">
        <h1 class="footer-grid__connect__heading">Let's Connect!</h1>
        <div class="footer-grid__connect__social">
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </div>
        <p class="footer-grid__connect__copyright">
          <span>
            <font-awesome-icon :icon="['far', 'copyright']" />
          </span>
          2021 Changes Parent Support Network. All rights reserved.
        </p>
      </div>
    </footer>
  </main>
</template>

<script>
  export default {
    data() {
      return {
      active: 'home'
      }
    },
    methods: {
      makeActive: function(item){
        this.active = item;
      }
    }
  }

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

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

.header-grid {
  margin: auto;
  height: 5.5rem;
  display: grid;
  grid-template-columns: 2fr .5fr 8fr 1.5fr;
  grid-template-areas: "logo . call donate" "logo . nav nav";
  @include mobile {
    height: 40rem;
    grid-template-areas: "logo logo logo logo" "call call call call" "donate donate donate donate" "nav nav nav nav";
  }
  &__logo {
    grid-area: logo;
    padding: 1rem 0rem 0rem 3rem;
    @include mobile {
      margin: auto;
      padding: 0;
    }
    &__img {
      width: 8rem;
      @include mobile {
        width: 12rem;
      }
    }
  }
  &__call {
    grid-area: call;
    font-size: 1.2rem;
    font-weight: $medium;
    color: $changes-blue;
    text-align: right;
    margin: 0;
    padding: .7rem 1.5rem 0rem 0rem;
    @include mobile {
      font-size: 2rem;
      text-align: center;
      padding: 1rem 3rem 0 3rem;
    }
    &__phone {
      font-weight: $bold;
    }
  }
  &__donate {
    grid-area: donate;
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 1rem 1rem 0 1rem;
    background-color: $orange;
    color: white;
    &__p {
      font-size: .8rem;
      font-weight: $bold;
      padding-bottom: 0rem;
      margin-left: auto;
      margin-right: auto;
      @include mobile {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
  }
  &__nav {
    grid-area: nav;
    text-align: right;
    @include mobile {
      margin-top: -.6rem;
      padding: 0rem;
    }
    &__items {
      height: 3rem;
      font-size: .8rem;
      display: flex;
      justify-content: flex-end;
      list-style-type: none;
      @include mobile {
        height: 14rem;
        flex-direction: column;
        font-weight: $bold;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
      }
    }
  }
}

// Vue navbar
a,
a:visited {}

a:hover {
  text-decoration: none;
}

nav {
  display: inline-block;
  color: black;
}

nav a {
  display: inline-block;
  padding: .3rem .3rem;
  font-weight: $bold;
  color: black;
  text-decoration: none;
}

nav.home .home,
nav.about .about,
nav.get-help .get-help,
nav.news-events .news-events,
nav.support .support,
nav.contact .contact {
  color: white;
  background-color: $changes-blue;
  padding: .3rem .52rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.5fr;
  grid-template-areas: "changes phone signup connect";
  grid-column-gap: 1rem;
  ;
  background-color: $dark-gray;
  font-weight: $light;
  font-size: .8rem;
  color: white;
  height: auto;
  padding: 3rem 3rem 2rem 3rem;
  @include mobile {
    font-size: 1.3rem;
    text-align: center;
    grid-template-areas: "changes changes changes changes" "phone phone phone phone" "signup signup signup signup" "connect connect connect connect";
    padding: 2rem 1rem 0rem 1rem;
  }
  &__changes {
    grid-area: changes;
    &__logo {
      width: 12rem;
      padding-bottom: 1rem;
    }
  }
  &__phone {
    grid-area: phone;
    text-align: center;
    color: $orange;
    @include mobile {
      padding-top: 1rem;
    }
    &__help {
      font-size: 1.3rem;
      font-weight: $light;
      margin-top: 0rem;
      @include mobile {
        font-size: 2rem;
      }
    }
    &__call {
      font-size: 1rem;
      font-weight: $light;
      color: $white;
      @include mobile {
        font-size: 1.5rem;
      }
    }
  }
  &__signup {
    grid-area: signup;
    text-align: center;
    padding: 0rem 1rem;
    @include mobile {
      padding-top: 1rem;
    }
    &__heading {
      font-size: 1.3rem;
      font-weight: $light;
      color: $orange;
      margin-top: 0rem;
      @include mobile {
        font-size: 2rem;
      }
    }
    &__p {
      font-size: 1rem;
      @include mobile {
        font-size: 1.3rem;
      }
    }
    &__form__input {
      width: 10rem;
      height: 2rem;
      background-color: $lt-gray;
      padding-left: .5rem;
      margin-top: -.5rem;
    }
  }
  &__connect {
    grid-area: connect;
    text-align: center;
    padding: 0rem 1rem;
    @include mobile {
      padding-top: 2rem;
    }
    &__heading {
      font-size: 1.3rem;
      font-weight: $light;
      color: $orange;
      margin-top: 0rem;
      margin-bottom: .7rem;
      @include mobile {
        font-size: 2rem;
      }
    }
    &__social {
      display: flex;
      justify-content: space-around;
      font-size: 1.5rem;
      color: $lt-gray;
      padding: 1rem 0rem;
      margin-top: -.7rem;
      @include mobile {
        font-size: 2.5rem;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &__copyright {
      font-size: .6rem;
      margin-top: 0rem;
      @include mobile {
        font-size: 1rem;
        padding-bottom: 2rem;
      }
    }
  }
}
</style>
