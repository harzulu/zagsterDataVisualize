const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

var my_dataS = []
var my_dataM = []
var my_dataF = []


function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChartS);
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChartM);
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChartF);
}


function perYear(data) {

    var data2016 = data[2016]
    var data2017 = data[2017]
    var data2018 = data[2018]
    
    console.log(data2016[0][9]) 
    my_dataS.push(data2016[0][9])
    console.log(data2016[1][10])  
    my_dataS.push(data2016[1][10])  
    console.log(data2016[2][11])
    my_dataS.push(data2016[2][11])
    console.log(data2016[3][12])
    my_dataS.push(data2016[3][12])

    console.log(data2017[0][1])
    my_dataM.push(data2017[0][1]) 
    console.log(data2017[1][2])  
    my_dataM.push(data2017[1][2]) 
    console.log(data2017[2][3])
    my_dataM.push(data2017[2][3])
    console.log(data2017[3][4])
    my_dataM.push(data2017[3][4])
    console.log(data2017[4][5])
    my_dataM.push(data2017[4][5])
    console.log(data2017[5][6])
    my_dataM.push(data2017[5][6])
    console.log(data2017[6][7])
    my_dataM.push(data2017[6][7])
    console.log(data2017[7][8])
    my_dataM.push(data2017[7][8])
    console.log(data2017[8][9])
    my_dataM.push(data2017[8][9])
    console.log(data2017[9][10])
    my_dataM.push(data2017[9][10])
    console.log(data2017[10][11])
    my_dataM.push(data2017[10][11])
    console.log(data2017[11][12])
    my_dataM.push(data2017[11][12])

    console.log(data2018[0][1]) 
    my_dataF.push(data2018[0][1]) 
    console.log(data2018[1][2])  
    my_dataF.push(data2018[1][2])  
    console.log(data2018[2][3])
    my_dataF.push(data2018[2][3])
    console.log(data2018[3][4])
    my_dataF.push(data2018[3][4])
    console.log(data2018[4][5])
    my_dataF.push(data2018[4][5])
    console.log(data2018[5][6])
    my_dataF.push(data2018[5][6])
    console.log(data2018[6][7])
    my_dataF.push(data2018[6][7])
    console.log(data2018[7][8])
    my_dataF.push(data2018[7][8])
    console.log(data2018[8][9])
    my_dataF.push(data2018[8][9])
    console.log(data2018[9][10])
    my_dataF.push(data2018[9][10])
    
  }
  
function updateChartS() {
    var ctx = document.getElementById('myChartS').getContext('2d');
    var chart = new Chart(ctx, {
        
        type: 'line',

        data: {
            labels: ['September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2016',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: my_dataS  
            }]
        },
        options: {}
    });
}

function updateChartM() {
    var ctx = document.getElementById('myChartM').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2017',
                backgroundColor: 'rgb(99, 255, 132)',
                borderColor: 'rgb(99, 255, 132)',
                data: my_dataM
            }]
        },

        options: {}
    });
}

function updateChartF() {
    var ctx = document.getElementById('myChartF').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'line',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2018',
                backgroundColor: 'rgb(132, 99, 255)',
                borderColor: 'rgb(132, 99, 255)',

                data: my_dataF 
            }]
        },

        options: {}
    });
}