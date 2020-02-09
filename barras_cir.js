/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
chart.innerRadius = am4core.percent(50);
chart.startAngle = -80;
chart.endAngle = 260;

chart.data = [
    {
        country: "ORDC_48599",
        visits: 4200
    },
    {
        country: "ORDC_48603",
        visits: 11000
    },
    {
        country: "ORDC_48605",
        visits: 6000
    },
    {
        country: "ORDC_48593",
        visits: 8300
    },
    {
        country: "ORDC_48601",
        visits: 4200
    },
    {
        country: "ORDC_48594",
        visits: 2800
    },
    {
        country: "ORDC_48596",
        visits: 4000
    },
    {
        country: "ORDC_48598",
        visits: 6000
    },
    {
        country: "ORDC_48600",
        visits: 25350
    },
    {
        country: "ORDC_48595",
        visits: 4000
    },
    {
        country: "ORDC_48602",
        visits: 11000
    },
    {
        country: "ORDC_48604",
        visits: 9000
    },
    {
        country: "ORDC_48597",
        visits: 11000
    }


];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.grid.template.strokeOpacity = 0.08;
categoryAxis.renderer.tooltipLocation = 0.5;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.labels.template.bent = true;
categoryAxis.renderer.labels.template.padding(0, 0, 0, 0);
categoryAxis.renderer.labels.template.radius = 7;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 30000;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 30;
valueAxis.renderer.grid.template.strokeOpacity = 0.08;
valueAxis.tooltip.disabled = true;

// axis break
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 15000;
axisBreak.endValue = 20000;
axisBreak.breakSize = 0.5;

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

var series = chart.series.push(new am4charts.RadarColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.columns.template.tooltipText = "{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;

chart.seriesContainer.zIndex = -1;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
});

let cursor = new am4charts.RadarCursor();
cursor.innerRadius = am4core.percent(50);
cursor.lineY.disabled = true;

cursor.xAxis = categoryAxis;
chart.cursor = cursor;
