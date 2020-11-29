7

var BtnEj1 = document.querySelector("#Add");
var BtnEj2 = document.querySelector("#Del");
var BtnEj3 = document.querySelector("#Search");
var BtnEj4 = document.querySelector("#List");
var BtnEj5 = document.querySelector("#Insert");
var BtnEj8 = document.querySelector("#Road");

var nombre = document.querySelector("#nombre");
var min = document.querySelector("#min");


var res = document.querySelector("#Description");

class Base {

  constructor(nombre, min, next, before){
    this.min = min
    this.nombre = nombre
    this.next = next
    this.before = before
  }
}

class Lista {
  constructor()
  {
    this.head = null
    this.size = 0
  }

  check(nombre)
  {
    if(this.head == null){return false}
    let aux=this.head
    do{
      if(aux.nombre==nombre){return true}
      aux = aux.next
    }while(aux!=this.head)
    return false
  }
  
  search(nombre)
  {
    if(this.head == null){return null}
    let aux=this.head
    do{
      if(aux.nombre==nombre){return aux}
      aux = aux.next
    }while(aux!=this.head)
    return null
  }

  agregarFinal(item)
  {
    let nuevo = new Base(item[0], item[1], null, null)
    if(!this.head){
      this.head = nuevo
      this.head.next = this.head
      this.head.before = this.head
    } else{
      let aux = this.head
      while (aux.next!=this.head){
        aux = aux.next
      }
      aux.next = nuevo
      aux.next.next = this.head
      aux.next.before = aux
      this.head.before = aux.next
    }
    this.size++
  }

  eliminarCodigo(item)
  {
    if(this.size==1) { this.head = null}
    else{ 
    let aux = this.head
    while(aux.next!=item)
    {
      aux=aux.next
    }
    if(this.head==item){ this.head = this.head.next}
    aux.next.next.before = aux.next.before
    aux.next = aux.next.next
    
    }
    this.size--;
  }

  recorrer(Base)
  {
    if(Base==null) {return this.head}
    else { return Base.next}
  }




}



const List = new Lista()  

BtnEj1.addEventListener("click", () => {
  if(List.check(nombre.value)==false)
  {
    let v = new Array (nombre.value,min.value)
    List.agregarFinal(v)
    res.innerHTML = v[0]+" "+v[1]+"</br > Agregado con exito"
    }
  else{
  alert("El nombre esta repetido.")
  }

});

BtnEj2.addEventListener("click", () => {
  let xd = List.search(nombre.value)
  if(xd!=null)
  {
    res.innerHTML = xd.nombre+" "+xd.min+" </br > Eliminado con exito"
    List.eliminarCodigo(xd)
  }
  else{
    alert("La base seleccionada no existe")
  }
});

BtnEj3.addEventListener("click", () => {
  let xd = List.search(nombre.value)
  if(xd!=null)
  {
    res.innerHTML = xd.nombre+" "+xd.min+" </br > El producto ha sido encontrado!"
  }
  else{
    alert("La base que busca no existe")
  }
});

BtnEj4.addEventListener("click", () => {
  res.innerHTML = ""
  let aux = null
  for(let i=0;i!=List.size;i++)
  {
    aux = List.recorrer(aux)
    res.innerHTML += aux.nombre+" "+aux.min+"</br >"
  }
  res.innerHTML += "Lista terminada"
});

BtnEj5.addEventListener("click", () => {
  
});

BtnEj8.addEventListener("click", () => {

  
});