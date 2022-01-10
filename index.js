document.getElementById("btn-cadastrar").addEventListener("click",()=>{
  let nome = document.getElementById("input-name").value;
  if(nome==""){
    alert("Preencha o campo principal")

  } else{
    let element = document.createElement("li");
    element.innerHTML=`
    ${nome}
    `
    let remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "X"
    remove.setAttribute("onclick","removerItem(this)");
    remove.style.width ="25%"
    remove.style.border = "none"
    remove.style.borderRadius = "1rem ,4rem"
    remove.style.backgroundColor = "#07A"
    remove.style.color = "#fff"
    remove.style.height  ="1.4rem"
    element.appendChild(remove)
    document.querySelector(".resultado").appendChild(element)
    document.getElementById("input-name").value=""
  }
})
function removerItem(remover){
  let removendoItem = remover.parentNode;
  document.querySelector(".resultado").removeChild(removendoItem)
}
let promise = Promise.resolve()