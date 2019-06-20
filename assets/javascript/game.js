$(document).ready(function() {
    
    // declare variables
    // var charactersHP;
        // set the values of each character in an object that was NOT picked (Hp, Att, counter, att)

    // create a function that allows you to select you character and enemy
    $("#button-Obi").on("click", function() {
        var charactersHP = parseInt($("#button-Obi").val());
        console.log(charactersHP);
    });
        // inputs button values into HP (option 1 and 2)

    // create a function that activates when you click attack
        // set your charactersAtt += 6; make sure its global and maintains its value across all 3 fights
        // if your charachter hp is <= 0 make the game end
        // else if the enemy's hp is <= 0 make the enemy's picture/buttons dissapear and allow them to select another enemy

});