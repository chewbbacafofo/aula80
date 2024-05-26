var arrayNomeDosEstudantes=[];
var displayArrayNomeDosEstudantes=[];

function submit(){
    for(var j=1;j<=4;j++){
        var nameOfTheStudant=document.getElementById("nameOfTheStudent"+j).value;
        arrayNomeDosEstudantes.push(nameOfTheStudant);
    }
    var comprimentoDoArray=arrayNomeDosEstudantes.length;
    for(var k=0;k<comprimentoDoArray;k++){
        displayArrayNomeDosEstudantes.push("<h4>nome-"+arrayNomeDosEstudantes[k]+"</h4>");
    }
    document.getElementById("displayNameWithCommas").innerHTML=displayArrayNomeDosEstudantes;
    var removerVirgulas=displayArrayNomeDosEstudantes.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML=removerVirgulas;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}

function sorting(){
    arrayNomeDosEstudantes.sort();
    var displayNomeDosEstudantesOrganizado=[];
    var comprimentoNomeDosEstudantes=arrayNomeDosEstudantes.length;
    for(var k=0;k<comprimentoNomeDosEstudantes;k++){
        displayNomeDosEstudantesOrganizado.push("<h4>nome-"+arrayNomeDosEstudantes[k]+"</h4>");
        var removerVirgulas=displayNomeDosEstudantesOrganizado.join(" ");
        document.getElementById("displayNameWithoutCommas").innerHTML=removerVirgulas;
    }
}