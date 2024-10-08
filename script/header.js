document.addEventListener("DOMContentLoaded", function () {
  let header = `
    <div></div> <button class="overlay svelte-19r4np0" id="opacity"></button>
   <div class="menu svelte-19r4np0">
      <div class="menu__wrapper svelte-19r4np0">
        <footer class="svelte-79dz0t foot">
          <div class="container svelte-8p0mpe">
            <div class="layout svelte-79dz0t">
              <ul class="raw svelte-79dz0t">
                <li><a href="../page/About.html" data-sveltekit-reload class="svelte-79dz0t">About us</a></li>
                <li><a href="../page/Contact.html" data-sveltekit-reload class="svelte-79dz0t">Contacts</a></li>
                <li><a href="../page/Services.html" data-sveltekit-reload class="svelte-79dz0t">Services</a></li>
                <li><a href="../page/Portfolio.html" data-sveltekit-reload class="svelte-79dz0t">Portfolio</a></li>

                <!-- <li><a href="./page/Contact.html" data-sveltekit-reload class="svelte-79dz0t">Career</a></li>
                              <li><a href="#" data-sveltekit-reload class="svelte-79dz0t">Blog</a></li> -->
              </ul>
              <ul class="raw svelte-79dz0t">
                <!-- <li><a href="../page/Portfolio.html" data-sveltekit-reload class="svelte-79dz0t">Portfolio</a></li> -->
                <!-- <li><a href="#" data-sveltekit-reload class="svelte-79dz0t">Commercials</a></li>
                              <li><a href="#" data-sveltekit-reload class="svelte-79dz0t">Architectural design</a></li>
                              <li><a href="#" data-sveltekit-reload class="svelte-79dz0t">Residential interiors</a></li> -->
              </ul>
              <ul class="policy svelte-79dz0t">
                <li><a href="#" data-sveltekit-reload class="svelte-79dz0t">Privacy Policy</a></li>
              </ul>
              <div class="logo svelte-79dz0t">
                <!-- <img src="../img/logo.png" alt="" width="175.6" height="24"> -->


                <p class="date svelte-79dz0t">© 2024 — 2025 ANC-Company Interior Design and Engineering</p>
                <ul class="locales svelte-79dz0t">
                  <li><a href="#" data-sveltekit-preload-data="off" data-sveltekit-noscroll class="svelte-79dz0t">AR</a>
                  </li>
                  <li><a href="#" data-sveltekit-preload-data="off" data-sveltekit-noscroll
                      class="svelte-79dz0t active">en</a></li>
                </ul>
                <ul class="socials svelte-79dz0t">

                  <li><a href="#" rel="nofollow" class="svelte-79dz0t"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-facebook" viewBox="0 0 16 16">
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg></a> </li>




                  <li><a href="#" rel="nofollow" class="svelte-79dz0t"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>

                    </a> </li>


                  <li><a href="#" rel="nofollow" class="svelte-79dz0t"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path
                          d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>

                    </a> </li>




                  <li><a href="#" rel="nofollow" class="svelte-79dz0t"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pinterest" viewBox="0 0 16 16">
                        <path
                          d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                      </svg></a> </li>






                  <li><a href="#" rel="nofollow" class="svelte-79dz0t">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-snapchat" viewBox="0 0 16 16">
                        <path
                          d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1 1 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.4 3.4 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.3.3 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.4 1.4 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.8 1.8 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.3 4.3 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0s-1.76.216-2.505.641c-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.8 1.8 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.4 1.4 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.4.4 0 0 1 .109.11c.026.053.027.11-.012.217a3.4 3.4 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075q.18.189.409.31a4.4 4.4 0 0 0 1 .4.7.7 0 0 1 .202.09c.118.104.102.26.259.488q.12.178.296.3c.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.6.6 0 0 1 .19-.087 4.5 4.5 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047m-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082s-2.045-.801-2.904-1.084c-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a1 1 0 0 1 .197.022c.396.086.78.285 1.002.338q.04.01.082.011c.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.4.4 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a1 1 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464" />
                      </svg>

                    </a> </li>



                  <li><a href="#" rel="nofollow" class="svelte-79dz0t">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path
                          d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>

                    </a> </li>







                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    
    <header class="svelte-15esu0b">
      <div class="container svelte-8p0mpe">
        <div class="wrapper svelte-15esu0b">
          <div class="logo">
            <a href="../index.html"><img src="../img/logo.png" alt="ANC-Company" width="40%"></a>
          </div>
          <ul class="links svelte-15esu0b">
            <li><a href="../page/About.html" class="svelte-15esu0b">about</a></li>
            <li><a href="../page/Portfolio.html" class="svelte-15esu0b">portfolio</a></li>
            <li><a href="../page/Contact.html" class="svelte-15esu0b">contacts</a></li>
            <li><a href="../page/Services.html" class="svelte-15esu0b">services</a></li>
          </ul>
          <ul class="locales svelte-15esu0b">
            <li><a href="#" data-sveltekit-preload-data="off" data-sveltekit-noscroll class="svelte-15esu0b">AR</a></li>
            <li><a href="#" data-sveltekit-preload-data="off" data-sveltekit-noscroll
                class="svelte-15esu0b active">en</a></li>
          </ul>
        </div>
      </div>
    </header>
    <button class="menu-button svelte-15esu0b"></button>
    `;

  let header_nav = document.getElementById("header_nav");
  header_nav.innerHTML = header;

  // القائمة المخفية
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  var body = document.getElementById("body");

  var opacity = document.getElementById("opacity");

  menu.style.display = "none";

  menuButton.addEventListener("click", function () {
    if (menu.style.display === "none") {
      menu.style.display = "block";
      body.style.overflow = "hidden";
      opacity.style.opacity = 1;
    } else {
      menu.style.display = "none";
      body.style.overflow = "auto";
      opacity.style.opacity = 0;
    }
  });

  var hamburger = document.querySelector(".hamburger");
  var responsiveMenu = document.getElementById("responsive_menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
      responsiveMenu.style.right = "0";
      body.style.overflow = "hidden";
    } else {
      responsiveMenu.style.right = "-100%";
      body.style.overflow = "auto";
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero_text_title li", {
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".hero_text_title",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  gsap.from(".hero_text_tagline span", {
    y: "100%",
    scrollTrigger: {
      trigger: ".hero_text_tagline",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
});
