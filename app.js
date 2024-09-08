function pesquisar (){
    let section = document.getElementById
    ("resultado-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value  

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi enconstrado. Não foi digitado algo relacionado ao atleta</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = ""; 
    let titulo = "";
    let descricao = "";
    let tags = "";

    for ( let dado of dados){
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleString();
     /*saber se o campo pesquisa ta dentro do titulo*/
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        resultado += `
        <div class="item-resultado" >
                    <h2> 
                        <a href="#" target="_blank">${dado.titulo}</a> 
                     </h2>
                     <p class="descricao-meta">${dado.descricao}</p>
                          <a href=${dado.link} target="_blank">Mais Informações
                          </a>
        </div>
        `;
        }
    }
    if (!resultado){
        resultado = "<p>Nada encontrado</p>";  
    }
    //atribui resultado dentro do html
    section.innerHTML = resultado;
}
