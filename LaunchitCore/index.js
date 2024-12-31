import u from 'https://cdn.jsdelivr.net/npm/umbrellajs@3.3.3/+esm'

const apps = [
  { name: "YouTube", icon: "assets/YTLogo.png", url: "https://youtube.com/" },
  { name: "Netflix", icon: "assets/NETFLIXLogo.png", url: "https://netflix.com/" },
  { name: "Hulu", icon: "assets/HULULogo.png", url: "https://hulu.com/" },
  { name: "Prime Video", icon: "assets/PRIMELogo.png", url: "https://primevideo.com/" }
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
u('#app img').addClass("w-28 h-28 rounded-3xl")
u('#app span').addClass("text-center mt-4")

