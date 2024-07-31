
vista1.style.display = 'block';
vista2.style.display = 'none';

function limpiarTexto() {
    document.getElementById("textoUsuario").value = "";
}
    
function encriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let img= document.getElementById("imagen");
    let resultado=document.getElementById("resultado");
    const condiciones = /^[a-z\s]+$/;

    if(texto!=0)
    {
        if(condiciones.test(texto))
        {
            let textoEncriptado= texto.replace(/e/gi, "enter").replace(/i/gi,"imes")
            .replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");

            vista1.style.display = 'none';
            vista2.style.display = 'block';

            resultado.textContent = textoEncriptado;
            limpiarTexto();
            
        }
        else{
            alert("El texto no cumple con las condiciones: Debe estar escrito en minusculas y no contener acentos");
            vista1.style.display = 'block';
            vista2.style.display = 'none';
        }
    }
    else{

        alert("No se encontro ningun texto para encriptar");
        vista1.style.display = 'block';
        vista2.style.display = 'none';
    }
}

function desencriptar(){
    let texto= document.getElementById("textoUsuario").value;
    let img= document.getElementById("imagen");
    let resultado=document.getElementById("resultado");
    const condiciones = /^[a-z\s]+$/;

    if(texto!=0)
        {
            if(condiciones.test(texto))
            {
                let textoEncriptado= texto.replace(/enter/gi, "e").replace(/imes/gi,"i")
                .replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    
                vista1.style.display = 'none';
                vista2.style.display = 'block';
    
                resultado.textContent = textoEncriptado;
                limpiarTexto();

                
            }
            else{
                alert("El texto no cumple con las condiciones: Debe estar escrito en minusculas y no contener acentos");
                vista1.style.display = 'block';
                vista2.style.display = 'none';
            }
        }
        else{
    
            alert("No se encontro ningun texto para encriptar");
            vista1.style.display = 'block';
            vista2.style.display = 'none';
        }
}

function copiar() {
    let resultado = document.getElementById("resultado");
    let textoACopiar = resultado.textContent; // Obtener el texto del elemento

    navigator.clipboard.writeText(textoACopiar)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
  
