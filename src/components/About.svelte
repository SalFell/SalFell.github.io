<script>
  export let name; // receive props ```name```
  import frank from "../assets/selfie.jpg";
</script>

<section>
  <div class="container__about" id="About">
    <img width={200} height={225} src={frank} alt="Headshot of Salvador" />
   <!-- We're using the props here -->
    <p class="header--small">Hi, I'm {name}</p>
    <p class="header--big">WELCOME TO MY GAME DEVELOPMENT PORTFOLIO</p>
    <p class="header--small">
      I'm a Computer Science graduate from CSU Fullerton. I'm passionate about
      game systems design and development. I'm always looking for new
      opportunities to learn and grow.
    </p>
  </div>
</section>

<style>
  .container__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }
  .header--small {
    font-size: 1.5rem;
    color:aliceblue;
    margin: 2rem 0 0 0;
    font-weight: 600;
  }

  .header--big {
    font-size: 2rem;
    color: #2C91C6;
    font-weight: 700;
  }
</style>
