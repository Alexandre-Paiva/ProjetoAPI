import fatosHistoricos from './dados.js'; // importação da camada de dados (Array fatosHistoricos, Ano: e Fato: ).

// Função que valida os dados de entrada (no caso o parâmetro ano) como do tipo numerico e limita uma faixa de tempo. 
function servicoValidaAno (ano) {
    if(isNaN(ano))
    {
        return false;
    }
    else
    {
        if(ano >= 1920 && ano <= 2020)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

// Função que recebe o parâmentro ano validado e seleciona a data da array fatosHistoricos e sempara o Fato.
function servicoBuscarFatoPorAno (ano)
{
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
}
// E no final exporta as funções.
export {servicoBuscarFatoPorAno, servicoValidaAno};