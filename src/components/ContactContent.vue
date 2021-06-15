<template>
  <div class="contact-grid">
    <div class="contact-grid__hero">    
      <img class="contact-grid__hero__img" src="../assets/woman-phone.jpg">    
    </div>
    <div class="contact-grid__hero-title">
      <h1 class="contact-grid__hero-title__h1">We're here for you</h1>
    </div>

    <!-- accordian FAQs -->
    <div class="contact-grid__faq">
      <h1 class="contact-grid__faq__heading display-2 text-center pt-3">FAQs</h1>
      <div class="accordion-collapse" id="accordionExample">        
        <div class="accordion-item">
          <p class="accordion-header" id="headingOne">
            <button class="button-lt-gray accordion-button collapsed  text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Is Changes right for me?</button>
          </p>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              Members attend because their children are engaging in behaviors that are disrupting the home. Members include:
              <ul>
                <li>Couples</li>
                <li>Single Parents</li>
                <li>Step-Parents</li>
                <li>Guardians</li>
                <li>Grandparents</li>
                <li>Anyone who is parenting a child is welcome</li>
              </ul>
              Although some parents attend for help with their adult children, most have children between ages 13 and 22.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header" id="headingTwo">
            <button class="button-gray accordion-button collapsed  text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What behaviors can Changes help me address?</button>
          </p>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              Typical problem behaviors can be:
              <ul>
                <li>Violent or abusive</li>
                <li>Oppositional and defiant</li>
                <li>Failing grades or not attending school</li>
                <li>Substance abuse</li>
                <li>Stealing at home or shoplifting</li>
                <li>Gang involvement</li>
                <li>Running away</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header" id="headingThree">
            <button class="button-lt-gray accordion-button collapsed  text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What makes Changes unique from other support groups?</button>
          </p>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              One common thread binds us together—we are all parenting a troubled youth. New attendees find they easily connect with other parents who are in a similar situation to their own. Our groups encourage members to meet outside of weekly meetings and support each other in person or over the phone. Each week we call each other to check on how the week is going.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header" id="headingFour">
            <button class="button-gray accordion-button collapsed text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How are meetings structured?</button>
          </p>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              Meetings are structured to help us create both short-term and long-term goals.
              <ul>
                <li>At meetings we form in groups of four to discuss the previous week.</li>
                <li>Each of us reports on the progress we have made toward our goal during the previous week.</li>
                <li>We provide support to each other by listening, asking questions and showing them empathy.</li>
                <li>We also use this small group to form our short-term goal for the upcoming week.</li>
                <li>We also use this small group to form our short-term goal for the upcoming week.</li>
                <li>Focusing on these goals provides manageable and reachable milestones for the parent.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header" id="headingFive">
            <button class="button-lt-gray accordion-button collapsed text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What can I expect when I attend my first Changes meeting?</button>
          </p>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              Taking that first step for help can be difficult, and scary, but most first-night parents leave with a new feeling of hope. New parents meet together in a small group on their first night. An experienced member-parent explains the program structure and gives you a chance to talk a bit about your situation and ask questions. You will have an opportunity to watch other parents in small groups and get an idea of how the meetings work. At the end of the evening you will meet a parent who will call you during the week to help you with your issues at home and answer any lingering questions.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <p class="accordion-header" id="headingSix">
            <button class="button-gray accordion-button collapsed text-dark px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">What is a Changes Team?</button>
          </p>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body px-5">
              Teams are an important element of the Changes program and a very powerful tool.
              <ul>
                <li>After about six weeks, we pick four to six members to be on our team.</li>
                <li>In addition to our weekly meetings teams gather at a time and place that works for all team members.</li>
                <li>Team members support the parent/s who created the team.</li>
                <li>The team will thoroughly examine the family’s issues and help develop an action plan.</li>
                <li>Team participation benefits all those involved.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- contact form -->
    <form class="contact-grid__form p-5" id="contactForm" name="contactForm" method="GET">
      <h1 class="contact-grid__form__heading">Talk to us.<br>We'd love to help!</h1>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="At least first name required" required>
      </div>
      <div class="form-check pb-3">
        <input class="form-check-input" type="checkbox" value="yes" id="callback" name="callback">
        <label class="form-check-label" for="callback" >Please have a parent volunteer call me at:
        </label>
        <div class="mb-3 pt-2">
          <input type="text" class="form-control" id="phone" name="phone" placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        </div>
        <div class="pb-2">
          <select class="form-select" aria-label="Default select example" name="timeOfDay" id="timeOfDay">
            <option selected>Best time to call:</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div class=""></div>
        <select class="form-select" aria-label="Default select example" name="timeZone" id="timeZone">
          <option selected>Time zone</option>
          <option value="pacific">Pacific</option>
          <option value="mountain">Mountain</option>
          <option value="central">Central</option>
          <option value="eastern">Eastern</option>
          <option value="hawaii">Hawaii</option>
          <option value="alaska">Alaska</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" name="signUp" id="signUp" value="yes">
        <label class="form-check-label" for="signUp">Sign me up for Changes news and events
        </label>
      </div>
      <div class="mb-3 pt-3">
        <label for="message" class="form-label">Tell us a little about yourself, your child, and the behaviors you would like help with. (200 character limit)</label>
        <textarea class="form-control" name="message" id="message" rows="6" maxlength="2000"></textarea>
      </div>
      <button class="btn text-light" type="submit">Submit</button>
    </form>
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
    grid-template-columns: 3fr 2fr 2fr 2fr 2fr;
    grid-template-areas: "hero hero hero hero hero" "faq faq form form form";
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
        padding-top: 6rem;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        margin: auto;
      }
    }

    &__faq {
      grid-area: faq;
      &__heading {
        color: $changes-blue;
      }
    }
    
    &__form {
      grid-area: form;
      color: $white;
      background-color: $changes-blue;
      &__heading {
        font-weight: $light;
        text-align: center;
        margin-top: -.5rem;
      }
    }
    button {
      background-color: $orange;
    }

    .button-lt-gray {
      background-color: $lightest-gray;
    }
    .button-gray {
      background-color: $lt-gray;
    }
    input {
      background-color: $lt-gray;
    }
    textarea {
      background-color: $lt-gray;
    }
    .form-select {
      color: $dark-gray;
      background-color: $lt-gray;
    }
  }
</style> 