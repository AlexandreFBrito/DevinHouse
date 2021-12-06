function inserirDados(){
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var residencial = document.getElementById("comercial").value;

    var td = document.createElement("<tr><td>"+nome+"</td><td>"+endereco+"</td><td>"+residencial+"</td></tr>");

    var tab = document.getElementById('lista');
    tab.appendChild(tab);

   
}


