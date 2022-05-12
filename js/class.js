alert("Welcome to GeekOfLeague \n\A game that consist in fighting a random boss between the mighty : \n\Sauron-Chronos-Lilith ")


export class Warrior{
    constructor(rage){
        this.name = prompt("Enter a name for the warrior");
        this.health = Number(prompt("Enter health depending on the difficulty you want : 500 - 700 - 900"));
        this.strength = Number(prompt("Enter strength depending on the difficulty you want : 10 - 50 - 75"));
        this.rage = rage; 
    }
    positionNormal = () => {
        this.health = this.health;
        this.strength = this.strength;
        
    }
    positionAttack = () => {
        this.health = this.health * 0.75;
        this.strength = this.strength * 1.4;
        
    }
    positionDefense = () => {
        this.health = this.health * 2.5;
        this.strength = this.strength * 0.5;
    }
    combat = (boss) => {
        if  (this.rage >= 4){
            this.strength = this.strength * 1.25;
            boss.health = boss.health - this.strength;
            this.rage = this.rage - 4;

        }else if (this.rage <= 4){
            boss.health = boss.health - this.strength;
            this.rage = this.rage + 1;
        }
    }
}



export class Mage{
    constructor(mana){
        this.name = prompt("Enter a name for the mage");
        this.health = Number(prompt("Enter health depending on the difficulty you want : 300 - 500 - 700"));
        this.strength = Number(prompt("Enter strength depending on the difficulty you want : 25 - 60 - 100"));
        this.mana = mana;
        let randomMana = Math.floor(Math.random() * (3 - 1) +1);
        switch(randomMana){
            case 0:
                this.mana = 7;
                break;
            case 1:
                this.mana = 9;
                break;
            case 2:
                this.mana = 11;
                break;
        }
        }
        positionNormal = () => {
            this.health = this.health;
            this.strength = this.strength;
        }
        positionAttack = () => {
            this.health = this.health * 0.75;
            this.strength = this.strength * 1.4;
        }
        positionDefense = () => {
            this.health = this.health * 2.5;
            this.strength = this.strength * 0.5;
        }   
        combat = (boss) => {
            if (this.mana >= 2){
                boss.health = boss.health - this.strength;
            }else if (this.mana < 2)
            this.mana = this.mana + 7;
        }
}

export class Archer{
    constructor(arrow){
        this.name = prompt("Enter a name for the archer");
        this.health = Number(prompt("Enter health depending on the difficulty you want : 200 - 400 - 600"));
        this.strength = Number(prompt("Enter strength depending on the difficulty you want : 20 - 45 - 80"));
        this.arrow = arrow;
        let randomArrows = Math.floor(Math.random() * 5);
        switch(randomArrows){
            case 0:
                this.arrow = 7;
                break;
            case 1:
                this.arrow = 8;
                break;
            case 2:
                this.arrow = 9;
                break;
            case 3:
                this.arrow = 10;
                break;
            case 4:
                this.arrow = 11;
                break;
        }
        }
        positionNormal = () => {
            this.health = this.health;
            this.strength = this.strength;
        }
        positionAttack = () => {
            this.health = this.health * 0.75;
            this.strength = this.strength * 1.4;
        }
        positionDefense = () => {
            this.health = this.health * 2.5;
            this.strength = this.strength * 0.5;
        }
        combat = (boss) => {
            if (this.arrow >= 2){
                boss.health = boss.health - this.strength;
                this.arrow = this.arrow + 1;
            }else if (this.arrow < 2){
                this.arrow = this.arrow + 6;
            }
        }
}



export class Boss{
    constructor(name, health,strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    combat = (enemy) => {
        alert(`${this.name} attack the hero ${enemy.name} and inflict ${this.strength} damage`)
        enemy.health = enemy.health - this.strength
    }

    riddle = () => {
        let randomRiddle = Math.floor(Math.random() * (3 - 1) +1);

        switch (randomRiddle) {
            case 0: 
            let riddle1 = prompt("What month of the year has 28 days?");
            let answer1 = "all";
            let numberTry1 = 1;
            
            while (numberTry1 < 3 && riddle1 != answer1){
                riddle1 = prompt(`Wrong try again`);
                numberTry1 = numberTry1 + 1;
            }
            if (riddle1 != answer1){
                prompt("Game over !")
            } else if (riddle1 == answer1){
                alert("Congratz you won !!")
            }
            break;
            case 1: 
            let riddle2 = prompt("What can you break, even if you never pick it up or touch it?");
            let answer2 = "promise";
            let numberTry2 = 1;
            
            while (numberTry2 < 3 && riddle2 != answer2){
                riddle2 = prompt(`Wrong try again`);
                numberTry2 = numberTry2 + 1;
            }
            if (riddle2 != answer2){
                alert("Game over !")
            } else if (riddle2 == answer2){
                alert("Congratz you won !!")
            }
            break;
            case 2: 
            let riddle3 = prompt("What goes up but never comes down?");
            let answer3 = "age";
            let numberTry3 = 1;
            
            while (numberTry3 < 3 && riddle3 != answer3){
                riddle3 = prompt(`Wrong try again`);
                numberTry3 = numberTry3 + 1;
            }
            if (riddle3 != answer3){
                prompt("Game over !")
            } else if (riddle3 == answer3){
                alert("Congratz you won !!")
            }
        }

    }

}

