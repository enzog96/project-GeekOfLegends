"use strict";

import  {Boss} from "./class.js";

let sauron = new Boss("Sauron",1000, 50);
let chronos = new Boss("Chronos",1200,100);
let lilith = new Boss("Lilith",900,150);

import {Warrior} from "./class.js";
import {Mage} from "./class.js";
import {Archer} from "./class.js";

let character1 = new Warrior(0) 
let character2 = new Mage() 
let character3 = new Archer() 

console.log(character1, character2, character3)

let randomBoss = Math.floor(Math.random() * (3 - 1) +1)
let CurrentBoss
switch (randomBoss) {
    case 0:
        CurrentBoss = sauron
        alert("Fighting : sauron")
        break;
    case 1:
        CurrentBoss = chronos
        alert("Fighting : chronos")
        break;
    case 2:
        CurrentBoss = lilith
        alert("Fighting : lilith")
        break;

}

let position1 = prompt(`What do you want ${character1.name} to do ? : positionNormal, positionAttack, positionDefense`)
switch (position1) {
    case "positionNormal":
        character1.positionNormal();
        break;
    case "positionAttack":
        character1.positionAttack();
        break;
    case "positionDefense":
        character1.positionDefense();
        break;
}


let position2 = prompt(`What do you want ${character2.name} to do ? : positionNormal, positionAttack, positionDefense`)
switch (position2) {
    case "positionNormal":
        character2.positionNormal();
        break;
    case "positionAttack":
        character2.positionAttack();
        break;
    case "positionDefense":
        character2.positionDefense();
        break;
}

let position3 = prompt(`What do you want ${character3.name} to do ? : positionNormal, positionAttack, positionDefense`)
switch (position3) {
    case "positionNormal":
        character3.positionNormal();
        break;
    case "positionAttack":
        character3.positionAttack();
        break;
    case "positionDefense":
        character3.positionDefense();
        break;
}

let turn = 1;
while (CurrentBoss.health > 0 && character1.health > 0 && character2.health > 0 && character3.health > 0){
    alert(`The game is about to begin, turn : ${turn}`)
    character1.combat(CurrentBoss)
    console.log(CurrentBoss.health)
    console.log(character1, character2, character3)
    character2.combat(CurrentBoss)
    console.log(CurrentBoss.health)
    console.log(character1, character2, character3)
    character3.combat(CurrentBoss)
    console.log(CurrentBoss.health)
    console.log(character1, character2, character3)
    let randomEnemy = Math.floor(Math.random() * (3 - 1) +1)
    switch (randomEnemy){
        case 0:
            CurrentBoss.combat(character1)
            break;
        case 1:
            CurrentBoss.combat(character2)
            break;
        case 2:
            CurrentBoss.combat(character3)
            break;
    }
    if (CurrentBoss.health < (CurrentBoss.health * 0.2)){
        CurrentBoss.riddle()
    }
    alert("End of turn")
    turn = turn + 1
}


console.log(CurrentBoss)
console.log(character1, character2, character3)



// alert("HELLO ADVENTURER !");
// alert("READY FOR AN EXPERIENCE THAT WILL BLOW YOUR MIND ?");



