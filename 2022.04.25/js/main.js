function GetClima()
{
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=70e31dbcedd473dff0de10564da57bb1&units=metric&lang=pt_br',
        dataType: 'json',

        success: function(data){
            console.log(data)
        },

        error: function(argument){

        }
    });
}