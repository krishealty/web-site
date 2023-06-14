gsap.registerPlugin(ScrollTrigger);

function playnavbarsound() {
  var audio = document.getElementById("navbar-sound");
  audio.play();
}

function playnavbarbuttonsound() {
  var audio = document.getElementById("navbar-button-sound");
  audio.play();
}

function playmaintheme() {
  var audio = document.getElementById("main-theme");
  audio.play();
}

function playthemetwo() {
  var audio = document.getElementById("theme-two");
  audio.play();
}

function playthemethree() {
  var audio = document.getElementById("theme-three");
  audio.play();
}
var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline();
menuBar.to('.bar-1', 0.5, {
  attr: {
    d: "M8,2 L2,8"
  },
  x: 1,
  ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5, {
  autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5, {
  attr: {
    d: "M8,8 L2,2"
  },
  x: 1,
  ease: Power2.easeInOut
}, 'start')

menuBar.reverse();

var tl = gsap.timeline({
  paused: true
});

tl.to('.fullpage-menu', {
  duration: 0,
  display: "block",
  ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
  duration: 1,
  x: "100%",
  stagger: 0.1,
  ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
  duration: 1,
  y: "100%",
  stagger: 0.1,
  ease: 'Expo.easeInOut'
}, "-=0.5");

tl.from('.social-links li', {
  duration: 0.9,
  y: "-100%",
  opacity: 0,
  stagger: 0.1,
  ease: 'Expo.easeInOut'
}, "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function() {
  menuBar.reversed(!menuBar.reversed());
  tl.reversed(!tl.reversed());
});
/* GSAP */
gsap.from('.scan', {
  duration: 5,
  y: '-100%'
});
gsap.from('#layer1', {
  x: '-170vw',
  scrollTrigger: {
    Trigger: '#layer1',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#layer2', {
  x: '-210vw',
  scrollTrigger: {
    Trigger: '#layer2',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#layer3', {
  x: '-170vw',
  scrollTrigger: {
    Trigger: '#layer3',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#layer4', {
  x: '170vw',
  scrollTrigger: {
    Trigger: '#layer4',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('.project-links', {
  x: '170vw',
  scrollTrigger: {
    Trigger: '.project-links',
    scrub: 1,
    start: '7000px 60%',
    end: '7500px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#layer5', {
  x: '210vw',
  scrollTrigger: {
    Trigger: '#layer5',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#layer6', {
  x: '170vw',
  scrollTrigger: {
    Trigger: '#layer6',
    scrub: 1,
    start: '750px 60%',
    end: '1300px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('#introduction-text', {
  x: '100vw',
  scrollTrigger: {
    Trigger: '#introduction-text',
    scrub: 2,
    start: '600px 70%',
    end: '900px 85%',
    ease: 'elastic.out(1, 0.3)',
    toggleActions: "restart reverse none none"
  }
});
gsap.from('#about-special', {
  x: '100vw',
  scrollTrigger: {
    Trigger: '#about-special',
    scrub: 2,
    start: '3300px 70%',
    end: '3700px 90%',
    ease: 'elastic.out(1, 0.3)',
    toggleActions: "restart reverse none none"
  }
});
gsap.from('#introduction-video', {
  opacity: 0,
  scrollTrigger: {
    Trigger: '#introduction-video',
    scrub: 2,
    start: '600px 70%',
    end: '900px 85%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('.scene-change', {
  x: '170vw',
  scrollTrigger: {
    Trigger: '.scene-change',
    scrub: 2,
    start: '4000px 60%',
    end: '5000px 90%',
    toggleActions: "restart pause reverse pause"
  }
});
gsap.from('.error-art', {
  opacity: 0,
  scrollTrigger: {
    Trigger: '.error-art',
    toggleActions: "restart pause reverse pause"
  }
});
/* krish animation */
const textArr = document.querySelectorAll('.text')
const colorArr = ["#fefefe", "#ff9b00", "#ff3434", "#db38f0", "#0096fb", "#00c500", "#ffd200"]
textArr.forEach((text, index) => {
  text.style.color = colorArr[index]
})
/* occupation animation */
async function init() {
  const node = document.querySelector("#type-text")

  await sleep(1000)
  node.innerText = ""
  await node.type('I am ')

  while (true) {
    await node.type('a web developer')
    await sleep(2000)
    await node.delete('a web developer')
    await node.type('an ai programmer')
    await sleep(2000)
    await node.delete('an ai programmer')
    await node.type('a cybersecurity expert')
    await sleep(2000)
    await node.delete('a cybersecurity expert')
    await node.type('an app developer')
    await sleep(2000)
    await node.delete('an app developer')
  }
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, {
  extends: 'span'
})
init()

/* heading animation */
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
anime({
  targets: '.row svg',
  translateY: 10,
  autoplay: true,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

anime({
  targets: '#zero',
  translateX: 10,
  autoplay: true,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate',
  scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
});
var textTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 2.5,
  defaults: { ease: "power2.inOut" } });

textTl.set(".word.in, .word.too, .word.deep", { opacity: 0 });
// textTl.set(".bottom-side", )

const bgColor = "hsl(190, 100%, 75%)";

// Lines
textTl.fromTo(
".left-side",
{
  height: 0,
  immediateRender: false,
  autoRound: false },

{
  duration: 2.3,
  height: "100%",
  ease: "power3.in" },

0);

textTl.fromTo(
".bottom-side",
{
  width: 0,

  immediateRender: false,
  autoRound: false },

{
  duration: 2.3,
  width: "100%",
  ease: "power3.out" },

2.3);


// TOO
textTl.fromTo(
".in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, stagger: 0.06 },
"-=1");

textTl.fromTo(
".too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, stagger: 0.06 },
"-=0.6");

textTl.fromTo(
".deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, stagger: 0.06 },
"-=0.6");


// Rotate
textTl.to(
".text",
{
  transform: "rotate(-20deg) skew(0deg, 0deg)",
  duration: 1.5,
  ease: "slow(0.2, 0.4, false)" },

"+=1");


// Fade Out
textTl.to(".text", 0.6, { opacity: 0, stagger: 0.06 }, "+=2");
