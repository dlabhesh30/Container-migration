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
            name: 'Applications',
            colorByPoint: true,
            data: [{
                name: 'Application 1',
                y: 56.33
            }, {
                name: 'Application 2',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Application 3',
                y: 10.38
            }, {
                name: 'Application 4',
                y: 4.77
            }, {
                name: 'Application 5',
                y: 0.91
            }, {
                name: 'Undetectable',
                y: 0.2
            }]
        }]
    });
});