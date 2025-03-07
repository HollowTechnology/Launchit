import umbrellajs from "https://cdn.jsdelivr.net/npm/umbrellajs@3.3.3/+esm";

// Initial body setup with transition classes
umbrellajs("body").addClass(
    "opacity-0 select-none bg-zinc-950 text-white tracking-wide font-mono text-center m-0 flex flex-col items-center justify-center h-screen transition-opacity duration-500 ease-in-out",
);
umbrellajs("h1").addClass("text-3xl mb-8 font-extrabold");
umbrellajs("button").addClass(
    "rounded bg-blue-600 hover:bg-blue-800 px-6 pb-2 pt-2.5 mt-16 text-2xs font-semibold text-white",
);

// Fade in body using the same pattern as #app
window.addEventListener('load', async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
    umbrellajs("body").removeClass("opacity-0");
});

function styles() {
    umbrellajs("#app").addClass(
        "inline-block m-4 text-center cursor-pointer hover:scale-125 hover:translate-x-2 transition duration-200 transition-opacity duration-500 ease-in-out",
    );
    umbrellajs("#app img").addClass("w-28 h-28 rounded-3xl");
    umbrellajs("#app span").addClass("text-center mt-4");
}

// Apply initial styles and transitions to existing #app elements
styles();

async function inner(type) {
    // Find all existing apps and fade them out
    umbrellajs("#app").addClass("opacity-0");

    await new Promise(resolve => setTimeout(resolve, 500));

    umbrellajs("#app").remove();

    const response = await fetch(`public/${type}.json`);
    const apps = await response.json();
    apps.forEach((app) => {
        umbrellajs("#apps").append(`
          <div id="app">
            <a href="${app.url}">
              <img src="${app.icon}" alt="${app.name}"><span>${app.name}</span>
            </a>
          </div>
        `);
    });

    styles();

    await new Promise(resolve => setTimeout(resolve, 50));
    umbrellajs("#app").removeClass("opacity-0");
}

umbrellajs("#core").on("click", async () => {
    inner("core");
});

umbrellajs("#gamers").on("click", async () => {
    inner("gamers");
});
