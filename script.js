let num = window.document.querySelector('input#num')        // Variável que conecta o script com o input de id 'num', responsável pelo input de valores no documento HTML;
let caixa = document.querySelector('select#caixa')       // Variável que conecta o script com o select de id 'lista', responsável pela caixa de valores no documento HTML;
let res = document.querySelector('div#res')        // Variável que conecta o script com a div de id 'res', responsável pelo resumo dos resultados no documento HTML;
let valores = []         // Lista que receberá os valores inseridos pelo usuário;

function isNumero(n){       // Função que verifica se o valor 'n' é um número e está no intervalo [1,100];
    if (Number(n) >= 1 && Number(n) <= 100){        
        return true
    } else{
        return false
    }
}

function inlista(n, l){      // Função que verifica se o valor 'n' já está presente na lista 'l';
    if (l.indexOf(Number(n)) != -1){  // A posição -1 indica ausência do valor na lista;
        return true 
    } else{
        return false
    }
}

function adicionar(){       // Função que responde ao click do usuário no botão 'Adicionar' do documento HTML;
    if (isNumero(num.value) && !inlista(num.value, valores)){  // Condição para adicionar os valores do input 'num' à caixa e à lista 'valores' se 'isNumero(n)' e 'inlista(n, l)' retornarem o valor 'true';
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''   // Comando para limpar o HTML interno da div 'res';
        

    }

    else{
        window.alert('Entrada inválida! Fora do intervalo ou já presente na lista.')       // Condição para o caso de as funções 'isNumero(n)' e 'inlista(n, l)' retornarem o valor 'false';
    }
    num.value = ''      // Apaga o valor inserido anteriormente no input 'num' ;
    num.focus()     // Define o foco para o input 'num' para que o usuário não precise selecionar a caixa manualmente;
}

function finalizar(){    // Função que mostra os resultados quando o botão 'Finalizar' for acionado pelo usuário;
    if (valores.length == 0){   // Condição para o caso em que o usuário tente finalizar o programa sem inserir nenhum dado;
        window.alert('Por favor, escolha um número entre 1 e 100.')
    }
    else{
        let total = valores.length      // Variável que recebe o total de números adicionados à lista 'valores';
        let maior = valores[0]
        let menor = valores [0]     
        for(let pos in valores){        // Para cada posição da lista 'valores';
            if(valores[pos] > maior){       // Verifica se o valor da posição 'pos' é o maior da lista;
                maior = valores[pos]
            }
            else if (valores[pos] < menor){ // Verifica se o valor da posição 'pos' é o menor da lista;
                menor = valores[pos]
            }
        }
        let soma = 0
        for (let pos in valores){   // Soma todos os valores da lista;
            soma += valores[pos]
        }
        let media = soma/total  // Variável que calcula a média dos valores da lista;

        // Inserção dos resultados sob a forma de parágrafos na div 'res';
        res.innerHTML= ''
        res.innerHTML += `<p> Ao todo, foram digitados ${total} números.</p>`   
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`            
        res.innerHTML += `<p> A soma de todos os valores foi ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores foi ${media}.</p>`            

    }

}
 
function reset(){       // Função que reinicia o programa quando o botão 'Reiniciar' for acionado;
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
    num.value = ''
    num.focus()
}
  
