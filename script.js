// ---------- Players (Array) ----------

let players = [
    { name: "Rohit", runs: 0 },
    { name: "Gill", runs: 0 },
    { name: "Virat", runs: 0 },
    { name: "Rahul", runs: 0 },
    { name: "Hardik", runs: 0 }
];

// ---------- Linked List ----------

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

function addHistory(data) {

    let newNode = new Node(data);

    if (head == null) {
        head = newNode;
    } else {

        let temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }
}

function showHistory() {

    let temp = head;
    let output = "";

    while (temp != null) {
        output += temp.data + " ";
        temp = temp.next;
    }

    document.getElementById("history").innerHTML =
        output === "" ? "No Balls Yet" : output;
}

// ---------- Match Variables ----------

let score = 0;
let wickets = 0;
let balls = 0;

let striker = 0;
let nonStriker = 1;

// ---------- Update UI ----------

function updateUI() {

    document.getElementById("score").innerHTML = score;
    document.getElementById("wicket").innerHTML = wickets;

    document.getElementById("overs").innerHTML =
        Math.floor(balls / 6) + "." + (balls % 6);

    let over = balls / 6;

    let rr = over == 0 ? 0 : (score / over).toFixed(2);

    document.getElementById("rr").innerHTML = rr;

    document.getElementById("striker").innerHTML =
        players[striker].name;

    document.getElementById("strikerRuns").innerHTML =
        players[striker].runs;

    document.getElementById("nonStriker").innerHTML =
        players[nonStriker].name;

    document.getElementById("nonRuns").innerHTML =
        players[nonStriker].runs;

    let table = "";

    for (let i = 0; i < players.length; i++) {

        let status = "";

        if (i == striker)
            status = "⭐ Striker";
        else if (i == nonStriker)
            status = "Non-Striker";

        table += `
        <tr>
            <td>${players[i].name}</td>
            <td>${players[i].runs}</td>
            <td>${status}</td>
        </tr>
        `;
    }

    document.getElementById("players").innerHTML = table;

    showHistory();
}

// ---------- Change Strike ----------

function changeStrike() {

    let temp = striker;
    striker = nonStriker;
    nonStriker = temp;
}

// ---------- Run Button ----------

function addRun(run) {

    score += run;

    balls++;

    players[striker].runs += run;

    addHistory(run);

    if (run % 2 == 1)
        changeStrike();

    if (balls % 6 == 0)
        changeStrike();

    updateUI();
}

// ---------- Wicket ----------

function wicket() {

    wickets++;

    balls++;

    addHistory("W");

    if (striker < players.length - 1) {
        striker++;
    }

    updateUI();
}

// ---------- Wide ----------

function wide() {

    score++;

    addHistory("WD");

    updateUI();
}

// ---------- No Ball ----------

function noBall() {

    score++;

    addHistory("NB");

    updateUI();
}

// ---------- Reset ----------

function resetMatch() {

    score = 0;
    wickets = 0;
    balls = 0;

    striker = 0;
    nonStriker = 1;

    head = null;

    players = [
        { name: "Rohit", runs: 0 },
        { name: "Gill", runs: 0 },
        { name: "Virat", runs: 0 },
        { name: "Rahul", runs: 0 },
        { name: "Hardik", runs: 0 }
    ];

    updateUI();
}

// ---------- Start ----------

updateUI();
