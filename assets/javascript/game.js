$(document).ready(function () {

    // declare variables
    // set the values of each character in an object that was NOT picked (Hp, Att, counter, att)
    // create a function that allows you to select you character and enemy
    // inputs button values into HP (option 1 and 2)
    // create a function that activates when you click attack
    // set your charactersAtt += 6; make sure its global and maintains its value across all 3 fights
    // if your charachter hp is <= 0 make the game end
    // else if the enemy's hp is <= 0 make the enemy's picture/buttons dissapear and allow them to select another enemy

    var characterHP = -1;
    var characterAtt = 8;
    var characterIncAtt = characterAtt;
    var enemyHP = -1;
    var enemyCounter = 0;
    var winCount = 0;
    var stats = {
        obi: { hp: 120, counter: 19 },
        luke: { hp: 100, counter: 23 },
        maul: { hp: 160, counter: 9 },
        vader: { hp: 180, counter: 7 }
    };

    console.log(Object.keys(stats).length);

    displayStartingStats(stats);

    $("#button-Obi").on("click", function () {
        setStats(stats.obi);
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
        if ((characterHP > 0) && (enemyHP > 0)) {
            characterHP = characterHP - enemyCounter;
            enemyHP = enemyHP - characterIncAtt;
            if (characterHP > 0) {
                $("#showCharacterStats").text("HP: " + characterHP + " Att: " + characterIncAtt);
            }
            $("#showEnemyStats").text("HP: " + enemyHP + " Att: " + enemyCounter);
            characterIncAtt = characterIncAtt + characterAtt;
        }

        if (enemyHP <= 0) {
            if(winCount === Object.keys(stats).length - 1 ){
                $("#winOrLose").text("Congratulations, You Win");
                $("#button-attack").remove();
            }
            enemyHP = 0;
        } else if (characterHP <= 0) {
            characterHP = 0;
            $("#showCharacterStats").text("HP: " + characterHP + " Att: " + characterIncAtt);
            $("#winOrLose").text("Sorry, You Lose");
        }

        if (enemyHP === 0) {
            $("#chosenEnemy").remove();
        }
    });

    function setStats(name) {
        if (characterHP === -1) {
            characterHP = name.hp;

            if (name === stats.obi) {
                // document.getElementById("button-Obi").style.display = "none";
                $(".obi").remove();
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="150" height="115" src="assets/images/ObiWan.jpg"></button>');
                appendChosenCharacterStats(r);
                setButtonRed();
            } else if (name === stats.luke) {
                // document.getElementById("button-Luke").style.display = "none";
                $(".luke").remove();
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="150" height="115" src="assets/images/LukeSkywalker.jpg"></button>');
                appendChosenCharacterStats(r);
                setButtonRed();
            } else if (name === stats.maul) {
                // document.getElementById("button-Maul").style.display = "none";
                $(".maul").remove();
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="150" height="115" src="assets/images/DarthMaul.jpg"></button>');
                appendChosenCharacterStats(r);
                setButtonRed();
            } else if (name === stats.vader) {
                // document.getElementById("button-Vader").style.display = "none";
                $(".vader").remove();
                var r = $('<button id="chosenCharacter" class="btn btn-success"><img width="150" height="115" src="assets/images/DarthVader.jpg"></button>');
                appendChosenCharacterStats(r);
                setButtonRed();
            }
        }
        else if (characterHP > 0 && enemyHP <= 0) {
            enemyHP = name.hp;
            enemyCounter = name.counter;
            winCount++;

            if (name === stats.obi) {
                // document.getElementById("button-Obi").style.display = "none";
                $(".obi").remove();
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="150" height="115" src="assets/images/ObiWan.jpg"></button>');
                appendChosenEnemyStats(r)
            } else if (name === stats.luke) {
                // document.getElementById("button-Luke").style.display = "none";
                $(".luke").remove();
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="150" height="115" src="assets/images/LukeSkywalker.jpg"></button>');
                appendChosenEnemyStats(r)
            } else if (name === stats.maul) {
                // document.getElementById("button-Maul").style.display = "none";
                $(".maul").remove();
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="150" height="115" src="assets/images/DarthMaul.jpg"></button>');
                appendChosenEnemyStats(r)
            } else if (name === stats.vader) {
                // document.getElementById("button-Vader").style.display = "none";
                $(".vader").remove();
                var r = $('<button id="chosenEnemy" class="btn btn-danger"><img width="150" height="115" src="assets/images/DarthVader.jpg"></button>');
                appendChosenEnemyStats(r)
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

    function appendChosenCharacterStats(r) {
        $("#displayCharacter").append(r);
        $("#chosenCharacter").append('<div id="showCharacterStats"></div>');
        $("#showCharacterStats").text("HP: " + characterHP + " Att: " + characterIncAtt);
    }

    function appendChosenEnemyStats(r) {
        $("#displayEnemy").append(r);
        $("#chosenEnemy").append('<div id="showEnemyStats"></div>');
        $("#showEnemyStats").text("HP: " + enemyHP + " Att: " + enemyCounter);
    }
});