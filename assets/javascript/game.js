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
    var characterAtt = 8;
    var characterIncAtt = characterAtt;
    var enemyHP = 0;
    var enemyCounter = 0;
    var stats = {
        obi: { hp: 120, counter: 15 },
        luke: { hp: 100, counter: 20},
        maul: { hp: 150, counter: 12 },
        vader: { hp: 180, counter: 10 }
    };

    displayStartingStats(stats);

    $("#button-Obi").on("click", function () {
        setStats(stats.obi);
        // var img = document.getElementById("button-Obi").style.display = "none";
    });

    $("#button-Luke").on("click", function () {
        setStats(stats.luke);
    });

    $("#button-Maul").on("click", function () {
        setStats(stats.maul);
    });

    $("#button-Vader").on("click", function () {
        setStats(stats.vader);
    });

    $("#button-attack").on("click", function () {
        if ((characterHP !== 0) && (enemyHP !== 0)) {
            characterHP = characterHP - enemyCounter;
            enemyHP = enemyHP - characterIncAtt;
            console.log("Your HP: " + characterHP);
            console.log("Your Att: " + characterIncAtt);
            console.log("Enemy's HP: " + enemyHP);
        }

        if (characterHP <= 0) {
            console.log("You Lose");
        } else if (enemyHP <= 0) {
            console.log("You Win")
            enemyHP = 0;
        }

        if (enemyHP === 0) {
            $("#chosenEnemy").remove();
        }
        characterIncAtt = characterIncAtt + characterAtt;
    });

    function setStats(name) {
        if (characterHP === 0) {
            characterHP = name.hp;

            if (name === stats.obi) {
                document.getElementById("button-Obi").style.display = "none";
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="200" height="150" src="assets/images/ObiWan.jpg"></button>');
                $("#displayCharacter").append(r);
                setButtonRed();
            } else if (name === stats.luke) {
                document.getElementById("button-Luke").style.display = "none";
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="200" height="150" src="assets/images/LukeSkywalker.jpg"></button>');
                $("#displayCharacter").append(r);
                setButtonRed();
            } else if (name === stats.maul) {
                document.getElementById("button-Maul").style.display = "none";
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="200" height="150" src="assets/images/DarthMaul.jpg"></button>');
                $("#displayCharacter").append(r);
                setButtonRed();
            } else if (name === stats.vader) {
                document.getElementById("button-Vader").style.display = "none";
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="200" height="150" src="assets/images/DarthVader.jpg"></button>');
                $("#displayCharacter").append(r);
                setButtonRed();
            }
        }
        else if (characterHP !== 0 && enemyHP === 0) {
            enemyHP = name.hp;
            enemyCounter = name.counter;

            if (name === stats.obi) {
                document.getElementById("button-Obi").style.display = "none";
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="200" height="150" src="assets/images/ObiWan.jpg"></button>');
                $("#displayEnemy").append(r);
            } else if (name === stats.luke) {
                document.getElementById("button-Luke").style.display = "none";
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="200" height="150" src="assets/images/LukeSkywalker.jpg"></button>');
                $("#displayEnemy").append(r);
            } else if (name === stats.maul) {
                document.getElementById("button-Maul").style.display = "none";
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="200" height="150" src="assets/images/DarthMaul.jpg"></button>');
                $("#displayEnemy").append(r);
            } else if (name === stats.vader) {
                document.getElementById("button-Vader").style.display = "none";
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="200" height="150" src="assets/images/DarthVader.jpg"></button>');
                $("#displayEnemy").append(r);
            }
        }
    }

    function setButtonRed() {
        $("#button-Obi").removeClass("btn btn-success").addClass("btn btn-danger");
        $("#button-Luke").removeClass("btn btn-success").addClass("btn btn-danger");
        $("#button-Maul").removeClass("btn btn-success").addClass("btn btn-danger");
        $("#button-Vader").removeClass("btn btn-success").addClass("btn btn-danger");
    }

    function displayStartingStats(stats) {
        var obi = stats.obi.hp;
        $("#button-Obi").append("<br>HP: " + obi);
        var luke = stats.luke.hp;
        $("#button-Luke").append("<br>HP: " + luke);
        var maul = stats.maul.hp;
        $("#button-Maul").append("<br>HP: " + maul);
        var vader = stats.vader.hp;
        $("#button-Vader").append("<br>HP: " + vader);
    }
});