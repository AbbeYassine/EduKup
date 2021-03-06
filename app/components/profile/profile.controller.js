/**
 * Created by Abbes on 30/10/2016.
 */
angular
    .module("eduKup")
    .controller("ProfileController", ProfileController);

ProfileController.$inject = ["$scope"];
function ProfileController($scope) {

    $scope.comment = {};
    $scope.comments = [
        {
            user: {
                firstName: "Abbes",
                lastName: "Yassine"
            },
            rate: 5,
            date: "Il y a une heure",
            content: "Great times playing here, great staff & friendly crew, welcoming personalities all around. Haven’t had a problem with the bouncers, sorry to hear about others. The sound system & lighting " +
            "duo add to the memorable moments. Venue fills up at around 11-12, then it’s a party."
        },
        {
            user: {
                firstName: "Abbes",
                lastName: "Yassine"
            },
            rate: 4,
            date: "Il y a une heure",
            content: "Great times playing here, great staff & friendly crew, welcoming personalities all around. Haven’t had a problem with the bouncers, sorry to hear about others. The sound system & lighting " +
            "duo add to the memorable moments. Venue fills up at around 11-12, then it’s a party."
        }
    ];

    $scope.addComment = function () {
        $scope.comment.rate = 3;
        $scope.comment.date = "À l'instant";
        $scope.comments.push($scope.comment);
    };
    Highcharts.chart('taux-admis', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Taux de réussite'
        },
        subtitle: {
            text: 'Source: data.gov.tn'
        },
        xAxis: {
            categories: [
                '2007-2008',
                '2008-2009',
                '2009-2010',
                '2010-2011',
                '2011-2012',
                '2012-2013',
                '2013-2014',
                '2014-2015',
                '2015-2016'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: "Taux d'admission général ",
            data: [49.9, 71.5, 89, 56, 34, 77, 86, 45, 77]

        }, {
            name: "Taux d'admission pilote",
            data: [14, 11, 9, 18, 9, 10, 9, 15, 16]

        }]
    });


    Highcharts.chart('taux-admis', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Taux de réussite'
        },
        subtitle: {
            text: 'Source: data.gov.tn'
        },
        xAxis: {
            categories: [
                '2007-2008',
                '2008-2009',
                '2009-2010',
                '2010-2011',
                '2011-2012',
                '2012-2013',
                '2013-2014',
                '2014-2015',
                '2015-2016'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: "Taux d'admission général ",
            data: [49.9, 71.5, 89, 56, 34, 77, 86, 45, 77]

        }, {
            name: "Taux d'admission pilote",
            data: [14, 11, 9, 18, 9, 10, 9, 15, 16]

        }]
    });

    Highcharts.chart('taux-reussite-niveau', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Taux de réussite par niveau'
        },
        subtitle: {
            text: 'Source: data.gov.tn'
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'pourcentage'
            },
            labels: {
                
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' pourcentage'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: '9éme',
            data: [20, 30, 35, 48, 63, 70, 88]
        }, {
            name: '8éme',
            data: [43, 55, 66, 88, 92,95, 98]
        },
            {
                name: '7éme',
                data: [23, 33, 55, 66, 88, 99, 99]
            }]
    });
}