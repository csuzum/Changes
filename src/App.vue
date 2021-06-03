<template>
  <main>
    <header class="header-grid">
        <div class="header-grid__logo">
          <img class="header-grid__logo__img" src="./assets/cpsn-logo.png">
        </div>
        <p class="header-grid__call">Need help? <span class="header-grid__call__phone">Call 1-888-000-0000</span></p>
        <div class="header-grid__donate">
          <p class="header-grid__donate__p">Donate</p>
        </div>
        <div class="header-grid__nav" id="mainNavApp">
          <nav class="header-grid__nav__items" v-bind:class="active" v-on:click.prevent>
            <a href="#" class="home header-grid__nav__items__item" v-on:click="makeActive('home')"><router-link to="/" class="home">Home</router-link></a>
            <a href="#" class="about header-grid__nav__items__item" v-on:click="makeActive('about')"><router-link to="/about" class="about">About</router-link></a>

            <a href="#" class="get-help header-grid__nav__items__item" v-on:click="makeActive('get-help')"><router-link to="/get-help" class="get-help">Get Help</router-link></a>

            <a href="#" class="news-events header-grid__nav__items__item" v-on:click="makeActive('news-events')"><router-link to="/news-events" class="news-events">News & Events</router-link></a>

            <a href="#" class="support header-grid__nav__items__item" v-on:click="makeActive('support')"><router-link to="/support" class="support">Support Changes</router-link></a>

            <a href="#" class="contact header-grid__nav__items__item" v-on:click="makeActive('contact')"><router-link to="/contact" class="contact">Contact</router-link></a>

          </nav>
        </div>
    </header>

    <router-view />

    <footer class="footer-grid">
      <div class="footer-grid__changes">
        <img class="footer-grid__changes__logo" src="./assets/cpsn-logo-rev.png">
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
          <p class="footer-grid__connect__copyright"><span><font-awesome-icon :icon="['far', 'copyright']" /></span>
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
  height: 8.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 7.5fr 1fr;
  grid-template-areas: "logo . call call" "logo . nav donate";
  @include mobile {
    margin: auto;
    height: auto;
    grid-template-areas: "logo logo logo logo" "call call call call" "donate donate donate donate" "nav nav nav nav"
  }
  
  &__logo {
    grid-area: logo;
    padding: 1.7rem 0rem 0rem 5.5rem;
    @include mobile {
      margin: auto;
      padding: 3rem 0rem 0rem 0rem;
    }

  &__img {
    width: 12rem;
      @include mobile {
        width: 18rem;
      }
    }
  }

  &__call {
    grid-area: call;
    font-size: 1.5rem;
    font-weight: $medium;
    color: $changes-blue;
    text-align: right;
    margin: 0;
    padding: 1.3rem 1.5rem 0rem 0rem;
    @include mobile {
      font-size: 2rem;
      text-align: center;
      padding: 1rem 3rem;
    }
    &__phone {
      font-weight: $bold;
    }
  }

  &__donate {
    grid-area: donate;
    display: flex;
    align-items: center;
    height: 3.5rem;
    margin-top: 2rem;
    background-color: $orange;
    color: white;
    @include mobile {
      font-size: 1.5rem;
      height: 4rem;

    }
    &__p {
        font-size: 1.2rem;
        font-weight: $bold;
        padding-bottom: 0rem;
        margin-left: auto;
        margin-right: auto;
      }
    }

  &__nav {
    grid-area: nav;
    text-align: right;
    padding: 2rem 0rem 1rem 0rem;
    @include mobile {
      padding: 0rem;
    }
    &__items {
      font-size: 1.2rem;
      display: flex;
      justify-content: flex-end;
      list-style-type: none;
      @include mobile {
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
a, a:visited {
	// outline:none;
	// color:white;
}

a:hover{
	text-decoration: none;
} 

nav{
	display:inline-block;
  color: black;
	// margin:60px auto 45px;
	// background-color: $white;
	// box-shadow:0 1px 1px #ccc;
	// border-radius:2px;
}

nav a{
	display:inline-block;
	padding: .5rem .5rem;
  font-weight: $bold;
	color:black;
	text-decoration:none;
	// line-height:1;
	// background-color:transparent;
	// -webkit-transition:background-color 0.25s;
	// -moz-transition:background-color 0.25s;
	// transition:background-color 0.25s;
}

// nav a:first-child{
// 	border-radius:2px 0 0 2px;
// }

// nav a:last-child{
// 	border-radius:0 2px 2px 0;
// }

nav.home .home,
nav.about .about,
nav.get-help .get-help,
nav.news-events .news-events,
nav.support .support,
nav.contact .contact {
  color: white;
  background-color: $changes-blue;
}


.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.5fr;
  grid-template-areas: "changes phone signup connect";
  grid-column-gap: 3rem;;
  background-color: $dark-gray;
  font-weight: $light;
  font-size: 1.2rem;
  color: white;
  height: auto;
  padding: 3rem 5rem 2rem 5rem;
  @include mobile {
    text-align: center;
    grid-template-areas: "changes changes changes changes" "phone phone phone phone" "signup signup signup signup" "connect connect connect connect";
    padding: 2rem 1rem 0rem 1rem;
  }
  &__changes {
    grid-area: changes;
    padding-top: .8rem;
    &__logo {
      width: 12rem;
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
      font-weight: $light;
      margin-top: 0rem;
      margin-bottom: -.8rem;
    }
    &__call {
      font-weight: $light;
      color: $white;
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
      font-weight: $light;
      color: $orange;
      margin-top: 0rem;
      margin-bottom: -.8rem;
    }
    &__p {
      font-size: 1.7rem;
    }
    &__form__input {
      width: 16rem;
      height: 2.77rem;
      background-color: $lt-gray;
      padding-left: 1.5rem;
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
      font-weight: $light;
      color: $orange;
      margin-top: 0rem;
      margin-bottom: .7rem;
    }
    &__social {
      display: flex;
      justify-content: space-around;
      font-size: 2rem;
      color: $lt-gray;
      padding: 1rem 0rem;
      margin-top: -.7rem;
    }
    &__copyright {
      font-size: 1rem;
      margin-top: 0rem;
      @include mobile {
        padding-bottom: 2rem;
      }
    }
  }
}
</style>
