import './style.css'
import Navbar from './components/nav'
import Header from './components/header'

const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", `
<section class="hero is-medium">
<div class="hero-body">
  <div class="container">
    <h1 class="title is-1 ">Ética profissional</h1>
    <h2 class="subtitle">A simple boilerplate for setting up parallax <br> using the Bulma Hero container.</h2>
    <a href="#" class="button is-white is-medium is-inverted">Learn More&ensp;<i class="fad fa-chevron-right"></i></a>
  </div>
</div>
</section>
<section id="parallax-1" class="hero is-large ">
<div class="hero-body">
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <h1 class="title is-1 ">Lorem Ipsum</h1>
        <hr class="content-divider">
        <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo amet magni illum eum voluptate! Eveniet voluptatem nam magnam necessitatibus.</h2>
        <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</div>
</section>
<section id="parallax-2" class="hero is-large ">
<div class="hero-body">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <h1 class="title is-1 ">Dolor Sit</h1>
        <hr class="content-divider">
        <h2 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque veritatis sequi natus minima distinctio ullam deleniti quasi quisquam autem deserunt.</h2>
        <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</div>
</section>
<section id="parallax-3" class="hero is-large ">
<div class="hero-body">
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-6">
        <h1 class="title is-1 ">Amet Consectetur</h1>
        <hr class="content-divider">
        <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus nam necessitatibus neque in perferendis eveniet dolorum assumenda dolores accusamus.</h2>
        <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</div>
</section>
<section class="cta va">
<div class="container">
  <div class="columns">
    <div class="column is-6">
      <h1 class="title is-1 ">Adipisicing Elit</h1>
      <hr class="content-divider">
      <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores, beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem quisquam? Fugiat!</h2>
    </div>
    <div class="column is-6">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input is-medium" type="text" placeholder="Jon Snow">
        </div>
      </div>
      <br>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input is-medium" type="email" placeholder="jon@winterfell.com">
        </div>
      </div>
      <br>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-white is-rounded is-outlined">Submit</button>
        </div>

      </div>
    </div>
  </div>
</div>

</section>
<footer class="footer">
<div class="content has-text-centered">
  <p>
    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
  </p>
</div>
</footer>
`);