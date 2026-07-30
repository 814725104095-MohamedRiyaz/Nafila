let team=[

{name:"Rohit",runs:0},
{name:"Gill",runs:0},
{name:"Virat",runs:0},
{name:"Rahul",runs:0},
{name:"Hardik",runs:0}

];

let striker=0;

let total=0;

let wickets=0;

let balls=0;

let history=[];

function update(){

document.getElementById("score").innerHTML=total;

document.getElementById("wickets").innerHTML=wickets;

let over=Math.floor(balls/6)+"."+(balls%6);

document.getElementById("overs").innerHTML=over;

let data="";

for(let i=0;i<team.length;i++){

let status="";

if(i==striker)
status="🏏 Striker";

data+=`

<tr>

<td>${team[i].name}</td>

<td>${team[i].runs}</td>

<td>${status}</td>

</tr>

`;

}

document.getElementById("players").innerHTML=data;

document.getElementById("history").innerHTML=history.join(" ");

}

function addBall(run){

history.push(run);

total+=run;

team[striker].runs+=run;

balls++;

update();

}

function wicket(){

history.push("W");

wickets++;

balls++;

striker++;

if(striker>=team.length)

striker=team.length-1;

update();

}

update();
