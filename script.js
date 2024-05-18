let lftArrow = document.querySelector(".a1");
let rgtArrow = document.querySelector(".a2");

function loader() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.height = "100vh";
  wrapper.style.overflow = "hidden";

  let sto = setTimeout(() => {
    document.fonts.ready.then(function () {
      const loader = document.querySelector(".loader");

      let tl = gsap.timeline();

      tl.to(loader, {
        opacity: 0,
        onComplete: () => {
          loader.style.display = none;
        },
        onUpdate: () => {
          wrapper.style.overflow = "visible";
          gsap.to(".sec1 .img-box img", {
            height: "100%",
          });
          gsap.to(".anim-elem1", {
            opacity: 1,
            delay: 1,
          });
          gsap.to(".anim-elem2", {
            opacity: 0.4,
            delay: 1.2,
          });
        },
      });

      tl.to(loader.children[0], {
        display: "none",
      });
    });
  }, 1500);
}

loader();
