let team = [
{name:"Rohit",runs:0},
{name:"Gill",runs:0},
{name:"Virat",runs:0},
{name:"Rahul",runs:0},
{name:"Hardik",runs:0}
];

let batsman = 0;
let total = 0;
let history = [];

function updateBoard(){

document.getElementById("totalScore").innerHTML = total;

let table = "";

for(let i=0;i<team.length;i++){

table += `
<tr>
<td>${team[i].name}</td>
<td>${team[i].runs}</td>
</tr>
`;

}

document.getElementById("playersTable").innerHTML = table;

if(history.length==0){
document.getElementById("history").innerHTML="No Balls Yet";
}
else{
document.getElementById("history").innerHTML=history.join(" ");
}

}

function addBall(){

let run = parseInt(document.getElementById("runs").value);

if(isNaN(run) || run<0 || run>6){
alert("Enter runs between 0 and 6");
return;
}

history.push(run);

total += run;

team[batsman].runs += run;

if(run==0){
batsman++;
if(batsman>=team.length){
batsman=team.length-1;
}
}

document.getElementById("runs").value="";

updateBoard();

}

updateBoard();
