document.getElementById("btn-cadastrar").addEventListener("click",()=>{
  let nome = document.getElementById("input-name").value;
  if(nome==""){
    alert("Preencha o campo principal")

  } else{
    let element = document.createElement("li");
    
    element.innerHTML=`
    <input type="checkbox" id="label">
    <label class="label-check" for="label">${nome}</label>
    `
    let remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "X"
    remove.setAttribute("onclick","removerItem(this)");
    remove.style.width ="30px"
    remove.style.position = "absolute";
    remove.style.right ="1rem"
    remove.style.top="2.5rem"
    remove.style.border = "none"
    remove.style.backgroundColor = "#000"
    remove.style.color = "red"
    remove.style.height  ="1.4rem"
    remove.style.borderRadius = ".4rem  "
    element.appendChild(remove)
    document.querySelector(".container-tarefas").appendChild(element)
    document.getElementById("input-name").value=""
  }
})
function removerItem(remover){
  let removendoItem = remover.parentNode;
  document.querySelector(".container-tarefas").removeChild(removendoItem)
}

