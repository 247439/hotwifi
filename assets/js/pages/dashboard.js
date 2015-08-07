/*
 *  Document   : base_pages_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dashboard Page
 */

var BasePagesDashboard = function() {
    // Chart.js Chart, for more examples you can check out http://www.chartjs.org/docs
    var initDashChartJS = function(data){
        // Get Chart Container
        var $dashChartLinesCon  = jQuery('.js-dash-chartjs-lines')[0].getContext('2d');

        // Set Chart and Chart Data variables
        var $dashChartLines;

        data.datasets[0] = $.extend({
                fillColor: 'rgba(44, 52, 63, .1)',
                strokeColor: 'rgba(44, 52, 63, .55)',
                pointColor: 'rgba(44, 52, 63, .55)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(44, 52, 63, 1)'
            }, data.datasets[0] );

        // Init Lines Chart
        $dashChartLines = new Chart($dashChartLinesCon).Line(data, {
            scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            scaleFontColor: '#999',
            scaleFontStyle: '600',
            tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            tooltipCornerRadius: 3,
            maintainAspectRatio: false,
            responsive: true,
        });
    };

    return {
        init: function () {
            // Init ChartJS chart
            initDashChartJS(chartsData[0]);
            $(document).on('click', '[data-show-chart]', function () {
                var $elem = $(this);
                initDashChartJS( chartsData[ parseInt($elem.data('showChart') - 1 ) ]);
            });
            
        }
    };
}();

// Initialize when page loads
jQuery(function(){
    var data = 
    BasePagesDashboard.init();
    
    $('#connected-today-list')
        .slimScroll({
            height: 440,
            color: '#000',
            size: '5px',
            opacity : .15,
            wheelStep : 15,
            distance : '2px',
            visible: true,
            // railOpacity: 0.35
        })
        .scrollLock();
});