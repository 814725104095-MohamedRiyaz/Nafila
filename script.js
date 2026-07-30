let score = 0;
let wickets = 0;
let balls = 0;

let strikerIndex = 0;
let nonStrikerIndex = 1;

let players = [
    { name: "Rohit", runs: 0 },
    { name: "Gill", runs: 0 },
    { name: "Virat", runs: 0 },
    { name: "Rahul", runs: 0 },
    { name: "Hardik", runs: 0 }
];

let history = [];

function updateUI() {

    document.getElementById("score").innerText = score;
    document.getElementById("wicket").innerText = wickets;

    let overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("overs").innerText = overs;

    let completedOvers = balls / 6;
    let rr = completedOvers === 0 ? 0 : (score / completedOvers).toFixed(2);
    document.getElementById("rr").innerText = rr;

    document.getElementById("striker").innerText = players[strikerIndex].name;
    document.getElementById("strikerRuns").innerText = players[strikerIndex].runs;

    document.getElementById("nonStriker").innerText = players[nonStrikerIndex].name;
    document.getElementById("nonRuns").innerText = players[nonStrikerIndex].runs;

    let table = "";

    for (let i = 0; i < players.length; i++) {

        let status = "";

        if (i === strikerIndex)
            status = "⭐ Striker";
        else if (i === nonStrikerIndex)
            status = "Runner";

        table += `
        <tr>
            <td>${players[i].name}</td>
            <td>${players[i].runs}</td>
            <td>${status}</td>
        </tr>`;
    }

    document.getElementById("players").innerHTML = table;

    document.getElementById("history").innerHTML = history.join(" ");
}

function changeStrike() {
    let temp = strikerIndex;
   
