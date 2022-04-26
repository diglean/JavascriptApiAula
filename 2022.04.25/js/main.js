function GetClima()
{
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=70e31dbcedd473dff0de10564da57bb1&units=metric&lang=pt_br',
        dataType: 'json',

        success: function(data){
            console.log(data)
            plotarResultados(data);
            localStorage.clima = JSON.stringify(data);
            localStorage.alteracaoClima = new Date().getTime();
        },

        error: function(argument)
        {

        }
    });
}

function plotarResultados(clima){
    let humidade = document.getElementById("humidade");
    let temperaturaMax = document.getElementById("temperaturaMax");
    let temperaturaMin = document.getElementById("temperaturaMin");
    humidade.innerHTML = clima.main.humidity;
    temperaturaMax.innerHTML = clima.main.temp_max;
    temperaturaMin.innerHTML = clima.main.temp_min;
}

function obterDados(){
    let tempoAtual = new Date().getTime() / 1000;
    let tempoCache = parseInt(localStorage.alteracaoClima) / 1000;
    if(tempoAtual - tempoCache >= (5*60))
    {
        GetClima();
    }
    else
    {
        plotarResultados(JSON.parse(localStorage.clima));
    }

}

window.onload = () => {
    obterDados();
}