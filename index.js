    let button = document.querySelector("#submit");
    let poidsInput = document.querySelector("#poids");
    let tailleInput = document.querySelector("#taille");
    let result = document.querySelector("#result");
    let noData = document.querySelector("#noData");

function calculateIMC(){
    let poids = poidsInput.value;
    let taille = tailleInput.value;

    if(poids === "" || isNaN(poids))

        alert ("Les données du poids ne sont pas correctes") ;
    else if (taille === "" || isNaN(taille))

        alert ("Les données de la taille ne sont pas correctes");
     
    else {
        let IMC = Math.round(poids /((taille*taille)/10000));
        
        if(IMC<18.5)
            result.innerHTML = `Insuffisance pondérale: votre IMC est de <span>${IMC}</span>`;
        if (18.5<IMC<25)
            result.innerHTML = `Normal: votre IMC est de <span> ${IMC}</span>`;
        if (IMC>25)
            result.innerHTML = `Surpoids: votre IMC est de <span> ${IMC}</span>, attiontion, si votre IMC dépasse 40, vous êtes en obésité morbide.`;
        
        noData.style.display = "none";


    }
}


button.addEventListener("click", calculateIMC);

