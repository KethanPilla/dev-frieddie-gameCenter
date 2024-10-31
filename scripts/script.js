const games = [
  { author: "Jonathan Hall", repoLink: "https://github.com/Jonathan-Hall34/scaling-pancake-dev-david-game", gameLink: "https://jonathan-hall34.github.io/scaling-pancake-dev-david-game/", title: "WOW Game" },
  { author: "Kethan Pilla", repoLink: "https://github.com/KethanPilla/dev-freddie-hw", gameLink: "https://kethanpilla.github.io/dev-freddie-hw/", title: "Rock-Paper-Scissor" },
  { author: "Luke Moats", repoLink: "https://github.com/LMoats11/Dev-David-TicTac", gameLink: "https://lmoats11.github.io/Dev-David-TicTac/", title: "Tic Tac Toe" },
  { author: "Paridhi Malhotra", repoLink: "https://github.com/pmalhotra21//wow-game/", gameLink: "https://pmalhotra21.github.io/wow-game/", title: "Wow Game" },
  { author: "Bailee Strait", repoLink: "https://github.com/baileestrait/dev-david-lab/", gameLink: "https://baileestrait.github.io/dev-david-lab/", title: "Escape the Garden" },
  { author: "Jackson Harvey", repoLink:"https://github.com/jaxn-harvey/dev-david/", gameLink: "https://jaxn-harvey.github.io/dev-david/", title: "Vroom" },
  { author: "Isabella Archer", repoLink:"https://github.com/iarcher444/dev-david-lab/", gameLink: "https://iarcher444.github.io/dev-david-lab/", title: "Catch the Butterfly" },
  { author: "Milly Trejo", repoLink:"https://github.com/mtrejo03/dev-david-hw/", gameLink: "https://mtrejo03.github.io/dev-david-hw/", title: "The Emoji Game" },
  { author: "Janet Martinez", repoLink:"https://github.com/jm-2017/urban-carnival-nuExample/" , gameLink: "https://jm-2017.github.io/urban-carnival-nuExample/", title: "Futbol Mania" },
  { author: "Sean Oliver",repoLink:"https://github.com/basstbone/dev-david-hw/", gameLink: "https://basstbone.github.io/dev-david-hw/", title: "Slides" },
  { author: "Mason Schrader",repoLink:"https://github.com/mlsmason6/improved-computing-machine-colorName/", gameLink: "https://mlsmason6.github.io/improved-computing-machine-colorName/", title: "colorName" },
  { author: "Joshua Bradley",repoLink:"https://github.com/joshuabrad03/scaling-octo-david/", gameLink: "https://joshuabrad03.github.io/scaling-octo-david/", title: "Escape Room" },
  { author: "Evan Sager",repoLink:"https://github.com/mrspartan38/dev-david-hw/", gameLink: "https://mrspartan38.github.io/dev-david-hw/", title: "Meh Game" },
  { author: "Jodi Gambrell",repoLink:"https://github.com/jomlli709/octo-goggles-david-hw/", gameLink: "https://jomlli709.github.io/octo-goggles-david-hw/", title: "Circle Game" },
  { author: "Noah Brown",repoLink:"https://github.com/nbrown2002/Dev-David/", gameLink: "https://nbrown2002.github.io/Dev-David/", title: "Shooting Star" },
  { author: "Whit Brewer",repoLink:"https://github.com/whitb43/UFO-Escape/", gameLink: "https://whitb43.github.io/UFO-Escape/", title: "UFO Game" },
  { author: "Shun Sasaki",repoLink:"https://github.com/ssasaki1/dev-david-lab/", gameLink: "https://ssasaki1.github.io/dev-david-lab/", title: "Battery Charger Game" },
  { author: "Allison Lacy", repoLink:"https://github.com/allisonlacy/alligamerepo/", gameLink: "https://ehttps://allisonlacy.github.io/alligamerepo/xample.com", title: "Square Game" },
  { author: "Alex Nunley",repoLink:"https://github.com/a-nunley/dev-david/", gameLink: "https://a-nunley.github.io/dev-david/", title: "Spongebob vs Doodlebob" },
  { author: "Nick Germann",repoLink:"https://github.com/germannnick/Dev-David-Goliath/", gameLink: "https://germannnick.github.io/Dev-David-Goliath/", title: "David V Goliath" },
  { author: "Tuesday Brown",repoLink:"https://github.com/tuesdayannb/miniature-enigma-david/", gameLink: "https://tuesdayannb.github.io/miniature-enigma-david/", title: "Find the Surprise!" }
];


const gameCardsContainer = document.getElementById("game-cards");

games.forEach(game => {
  const cardHTML = `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text"><strong>Author:</strong> ${game.author}</p>
          ${game.repoLink ? `<a href="${game.repoLink}" class="btn btn-primary" target="_blank">Repo Link</a>` : ""}
          <a href="${game.gameLink}" class="btn btn-primary" target="_blank">Play Game</a>
        </div>
      </div>
    </div>
  `;
  gameCardsContainer.innerHTML += cardHTML;
});      






// let wowGame = {
//   authorName: "Jonathan Hall",
//   gameInfo: "A fun wow game to play when bored.",
//   gameLink: "https://jonathan-hall34.github.io/scaling-pancake-dev-david-game/"
// };
// $('body').append(`<p>Author Name: ${wowGame.authorName}</p>`);
// $('body').append(`<p>Game Info: ${wowGame.gameInfo}</p>`);
// $('body').append(`<a href="${wowGame.gameLink}"
// target="_blank">Jonathan's Fun Wow Game</a>`);