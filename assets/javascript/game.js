$(document).ready(function () {

    // declare variables
    // set the values of each character in an object that was NOT picked (Hp, Att, counter, att)
    // create a function that allows you to select you character and enemy
    // inputs button values into HP (option 1 and 2)
    // create a function that activates when you click attack
    // set your charactersAtt += 6; make sure its global and maintains its value across all 3 fights
    // if your charachter hp is <= 0 make the game end
    // else if the enemy's hp is <= 0 make the enemy's picture/buttons dissapear and allow them to select another enemy
    
    var characterHP = 0;
    var characterAtt = 5;
    var enemyHP = 0;
    var enemyCounter = 0;
    var obi = { hp: 120, counter: 10}
    var luke = { hp: 100, counter: 5}
    var maul = { hp: 150, counter: 15}
    var vader = { hp: 180, counter: 20}

    $("#button-Obi").on("click", function (){
        setStats(obi);
    });

    $("#button-Luke").on("click", function (){
        setStats(luke);
    });

    $("#button-Maul").on("click", function (){
        setStats(maul);
    });

    $("#button-Vader").on("click", function (){
        setStats(vader);
    });

    $("#button-attack").on("click", function (){
        if (characterHP !== 0 && enemyHP !== 0){
            characterHP = characterHP - enemyCounter;
            enemyHP = enemyHP - characterAtt;
            console.log("Your HP: " + characterHP);
            console.log("Your Att: " + characterAtt);
            console.log("Enemy's HP: " + enemyHP);
        }
        characterAtt = characterAtt + 5;
    });

    function setStats(name){
        if (characterHP === 0) {
            characterHP = name.hp;            
        }
        else if (characterHP !== 0){
            enemyHP = name.hp;
            enemyCounter = name.counter;
        }
    }
});