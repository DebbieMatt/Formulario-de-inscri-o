function extrairEscolaridade(form){
    if(form.escolaridade.value=="EF"){
            return "Ensino Fundamental";
    }else if(form.escolaridade.value=="EM"){
            return "Ensino Medio";
    }else if(form.escolaridade.value=="ES"){
            return"Ensino Superior";
    }
}

//Função que controla os destinatários da solicitação.
function funcDestinatario(Escolaridade){
    if(Escolaridade.value=="EF"){
            document.getElementById("email").action="deboramateusdec@gmail.com.br";
    }else if(Escolaridade.value=="EM"){
            document.getElementById("email").action="deboramateusdec@gmail.com.br";
    }else if(Escolaridade.value=="ES"){
            document.getElementByid("email").action="deboramateusdec@gmail.com.br";
    }
}

//Controla exibição da divSituação
function funcMotivo(motivo){
    if(motivo.value!="vazio"){
            document.getElementById('divSituação').style.display='block';
    }else{
            document.getElementById('divSituação').style.display='none';
    }
}

function verificarSenhas(){
    if (document.form.senha.value == document.form.Confsenha.value){
          alert ("As duas senhas conferem")
    }else{
          alert ("As duas senhas não conferem")
    }
}