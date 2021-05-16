
// Gold chart

function loadChart() {
    var options = {
        bullion: 'gold',
        currency: 'GBP',
        timeframe: '5y',
        containerDefinedSize: false,
        switchCurrency: true,
        displayLatestPriceLine: true,
        switchTimeframe: true
    };
    
    var chartBV = new BullionVaultChart(options, 'chartContainer');
    
    // return document.getElementById("chartContainer").innerHTML = chartBV;

} 


