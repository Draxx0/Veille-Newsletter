const navAnim = document.querySelector(".nav-anim");

new Typewriter(navAnim, {
  delay: 200,
})
  .typeString("SITE.")
  .start();

const articlesText = document.querySelectorAll(".text");

new Typewriter(
  articlesText.forEach((text) => {
    new Typewriter(text, {
      delay: 15,
    }).typeString(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolores, provident! Nulla alias molestiae adipisci ex optio
    harum atque mollitia sapiente odit vel, doloremque repellendus
    nisi possimus quia corporis veniam iusto?`).start();
  })
);
