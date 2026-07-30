// ARRAY (Players)

let players = [

{name:"Rohit",runs:0,balls:0},
{name:"Gill",runs:0,balls:0},
{name:"Virat",runs:0,balls:0},
{name:"KL Rahul",runs:0,balls:0},
{name:"Hardik",runs:0,balls:0}

];

let striker=0;

let total=0;

let wickets=0;

let balls=0;

let stack=[];


// LINKED LIST

class Node{

constructor(data){

this.data=data;
this.next=null;

}

}

class LinkedList{

constructor(){

this.head=null;

}

insert(data){

let node=new Node(data);

if(this.head==null){

this.head=node;

return;

}

let temp=this.head;

while(temp.next!=null)

temp=temp.next;

temp.next=node;

}

display(){

let temp=this.head;

let html="";

while(temp!=null){

html+="<li>"+temp.data+"</li>";

temp=temp.next;

}

document.getElementById("history").innerHTML=html;

}

}

let history=new LinkedList();

displayPlayers();

update();

function displayPlayers(){

let html="";

for(let p of players){

html+=`

<tr>

<td>${p.name}</td>

<td>${p.runs}</td>

<td>${p.balls}</td>

</tr>

`;

}

document.getElementById("players").innerHTML=html;

}

function update(){

document.getElementById("score").innerHTML=

total+"/"+wickets;

let over=Math.floor(balls/6)+"."+(balls%6);

document.getElementById("overs").innerHTML=

"Overs : "+over;

displayPlayers();

history.display();

}

function addRun(run){

players[striker].runs+=run;

players[striker].balls++;

total+=run;

balls++;

history.insert(run+" Run");

stack.push(run);

update();

}

function wicket(){

players[striker].balls++;

balls++;

wickets++;

history.insert("Wicket");

stack.push("W");

striker++;

if(striker>=players.length)

striker=players.length-1;

update();

}

function wide(){

total++;

history.insert("Wide");

stack.push("WD");

update();

}

function noBall(){

total++;

history.insert("No Ball");

stack.push("NB");

update();

}

function undo(){

alert("Undo feature can be added using Stack.");

}
