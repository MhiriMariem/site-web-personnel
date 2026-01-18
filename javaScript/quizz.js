var form = document.getElementById("quizzForm");
var divResultat = document.getElementById("resultat");

function corrigerQuizz() {
    var score = 0;
    var reponsesCorrectes = ["b","b","b","b","b","a","a","b","a","b"];
    
    divResultat.innerHTML = "<h2>Résultats :</h2>";

    for (var i = 1; i <= 10; i++) {
        var radios = document.getElementsByName("q" + i);
        var reponse = "";
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                reponse = radios[j].value;
            }
        }

        var p = document.createElement("p");

        if (reponse == "") {
            p.textContent = "Question " + i + " : Non répondu";
            p.className = "non-repondu";
        } else if (reponse == reponsesCorrectes[i-1]) {
            score++;
            p.textContent = "Question " + i + " : Correcte";
            p.className = "correct";
        } else {
            p.textContent = "Question " + i + " : Incorrecte (Bonne réponse : " + reponsesCorrectes[i-1] + ")";
            p.className = "incorrect";
        }

        divResultat.appendChild(p);
    }

    var scoreFinal = document.createElement("h3");
    scoreFinal.textContent = "Score final : " + score + " / 10";
    divResultat.appendChild(scoreFinal);
}
