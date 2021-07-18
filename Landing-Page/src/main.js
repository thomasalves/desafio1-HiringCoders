function salvarDados() {
   let name = document.getElementById("name").value;
   let email = document.getElementById('email').value;

   console.log(name, email)

   let dados = {
       name,
       email
   }

   console.log(dados)
   if(name === '' || email === ' '){
        alert("Preencha todos campos corretamente")
   } else{
       localStorage.setItem('dados', JSON.stringify(dados));
       alert("Cadastro realizado com sucesso!")

   }

}