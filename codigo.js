var numeros = [];
for(var i=0; i<=10; i++){
numeros . push(i);
}
var numero=3
var texto = "tres"
var nombreFrutas = ["fresa","melocotón","pera"];
nombreFrutas.push ("limón")
nombreFrutas.unshift("patata")
nombreFrutas[2] = "higo"
for(var i=0; i < nombreFrutas. length; i++){
    alert(nombreFrutas[i]);
}

var j = 0
while(  j < nombreFrutas.length   ){
alertt(nombreFrutas[1]);
}

function seEencuentranEnListaElemento(lista, elemento)
for(var i=0; i <lista, length; 1++){
    if(lista[i] == elemento){
        return true;
    }
}
return false;

function listaMenorElemento(lista){
    lista.sort();
    return lista.shift ()
}
