$(function () {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'CPU Utilisation'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Containers',
            colorByPoint: true,
            data: [{
                name: 'Container 1',
                y: 56.33
            }, {
                name: 'Container 2',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Container 3',
                y: 10.38
            }, {
                name: 'Container 4',
                y: 4.77
            }, {
                name: 'Container 5',
                y: 0.91
            }, {
                name: 'Undetectable',
                y: 0.2
            }]
        }]
    });
});