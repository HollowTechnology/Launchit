// import u from 'https://cdn.jsdelivr.net/npm/umbrellajs@3.3.3/+esm'
import u from '/umbrella.js'

u('body').addClass("select-none bg-zinc-950 text-white tracking-wide font-mono text-center m-0 flex flex-col items-center justify-center h-screen")
u('h1').addClass("text-3xl mb-8 font-extrabold")
u('button').addClass('rounded bg-blue-600 hover:bg-blue-800 px-6 pb-2 pt-2.5 mt-16 text-2xs font-semibold text-white')


function styles() {
  u('#app').addClass("inline-block m-4 text-center cursor-pointer hover:scale-125 hover:translate-x-2 transition duration-200")
  u('#app img').addClass("w-28 h-28 rounded-3xl")
  u('#app span').addClass("text-center mt-4")
}

async function inner(type) {
  u('#app').remove()
  const response = await fetch(`public/${type}.json`);
  const apps = await response.json();

  apps.forEach(app => {
    u('#apps')
    .append(`
    <div id="app">
      <a href="${app.url}">
        <img src="${app.icon}" alt="${app.name}"><span>${app.name}</span>
      </a>
    </div>
  `)})
  styles()
}

// Load Launchit Version
u('#core').on("click", async () => {
  inner("core")
})
u('#gamers').on("click", async () => {
  inner("gamers")
})
