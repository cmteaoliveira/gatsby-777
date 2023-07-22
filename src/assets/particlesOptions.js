const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 120,
  particles: {
    color: {
      value: ["#03dac6", "#ff0266", "#000000"],
    },
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
      blink: false,
      color: "random",
      consent: false
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
}

export default particlesOptions
