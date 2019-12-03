function realizarBusca(){
    // pegando o valor digitado no INPUT
    var user=document.getElementById("buscador").value;

    if (user === '') {
        alert("Você precisa digitar um código!");
      } else {
        
    console.log("Digite o código do usuário = "+user);
    
    // vou montar uma URL com o padrao do json
    var URL = "https://jsonplaceholder.typicode.com/users/"+user;
    console.log("URL montada:");
    console.log(URL);

    // agora... quero buscar os detalhes do usuario
    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));
      }
}

function preencheHTML(json){
   var result = document.getElementById("conteudo");
   result.innerHTML="<h5> Suas informações: </h5>";
   //result.innerHTML = JSON.stringify(json);
   result.innerHTML += "<b>ID de usuário:</b> "+json.id + "<br/>";
   result.innerHTML += "<b>Nome de usuário:</b> "+json.username + "<br/>";
   result.innerHTML += "<b>E-mail:</b> "+json.email + "<br/>";
   result.innerHTML += "<b>Rua:</b> "+json.address.street+"<br/>";
   result.innerHTML += "<b>Apartamento:</b> "+json.address.suite+"<br/>";
   result.innerHTML += "<b>Cidade:</b> "+json.address.city+"<br/>";
   result.innerHTML += "<b>CEP:</b> "+json.address.zipcode+"<br/>";
   result.innerHTML += "<b>Telefone:</b> "+json.phone+"<br/>";
   result.innerHTML += "<b>Site:</b> "+json.website+"<br/>";
   result.innerHTML += "<b>Empresa:</b> "+json.name+"<br/>";

}