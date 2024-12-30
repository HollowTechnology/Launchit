import u from 'https://cdn.jsdelivr.net/npm/umbrellajs@3.3.3/+esm'

const apps = [
  { name: "Amazon Luna", icon: "assets/AmazonLuna.png", url: "https://luna.amazon.ca/" },
  { name: "Boosteroid", icon: "assets/Boosteroid.png", url: "https://boosteroid.com/" },
  { name: "GeForce NOW", icon: "assets/GEForceNOW.png", url: "https://play.geforcenow.com/" },
  { name: "Shadow PC", icon: "assets/ShadowPC.png", url: "https://shadow.tech/" },
  { name: "Xbox Cloud", icon: "assets/XCloud.png", url: "https://www.xbox.com/play" }
];

apps.forEach(app => {
  u('#apps')
  .append(`
  <div id="app">
    <a href="${app.url}">
      <img src="${app.icon}" alt="${app.name}"><span>${app.name}</span>
    </a>
  </div>
`)})

u('body').addClass("bg-zinc-950 text-white tracking-wide font-mono text-center m-0 flex flex-col items-center justify-center h-screen")
u('h1').addClass("text-3xl mb-8 font-bold")
u('#app').addClass("inline-block m-4 text-center cursor-pointer hover:scale-125 hover:translate-x-2 transition duration-200")
u('#app img').addClass("w-28 h-28 rounded-3xl p-3")
u('#app span').addClass("text-center mt-4 font-mono")
