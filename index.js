// Themes begin
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 4;
chart.yAxisRadius = am4core.percent(25);
chart.yAxisInnerRadius = am4core.percent(-25);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chart.data = [{
    "category": "Ropa",
    "start": "2020-01-01",
    "end": "2020-01-06",
    "color": colorSet.getIndex(0),
    "task": "PED_19827445"
}, {
    "category": "Ropa",
    "start": "2020-01-09",
    "end": "2020-01-11",
    "color": colorSet.getIndex(0),
    "task": "PED_108900565"
}, {
    "category": "Ropa",
    "start": "2020-01-20",
    "end": "2020-01-27",
    "color": colorSet.getIndex(0),
    "task": "PED_168282645"
}, {
    "category": "Ropa",
    "start": "2020-01-28",
    "end": "2020-01-31",
    "color": colorSet.getIndex(0),
    "task": "PED_197973685"
}, {
    "category": "Especializado",
    "start": "2020-01-02",
    "end": "2020-01-03",
    "color": colorSet.getIndex(5),
    "task": "PED_34672965"
}, {
    "category": "Especializado",
    "start": "2020-01-04",
    "end": "2020-01-06",
    "color": colorSet.getIndex(5),
    "task": "PED_64364005"
}, {
    "category": "Especializado",
    "start": "2020-01-06",
    "end": "2020-01-09",
    "color": colorSet.getIndex(5),
    "task": "PED_94055045"
}, {
    "category": "Especializado",
    "start": "2020-01-11",
    "end": "2020-01-13",
    "color": colorSet.getIndex(5),
    "task": "PED_138591605"
}, {
    "category": ""
}, {
    "category": "Mascotas",
    "start": "2020-01-03",
    "end": "2020-01-05",
    "color": colorSet.getIndex(9),
    "task": "PED_49518485"
}, {
    "category": "Mascotas",
    "start": "2020-01-10",
    "end": "2020-01-28",
    "color": colorSet.getIndex(9),
    "task": "PED_123746085"
}, {
    "category": "Multiusos",
    "start": "2020-01-05",
    "end": "2020-01-12",
    "color": colorSet.getIndex(15),
    "task": "PED_79209525"
}, {
    "category": "Multiusos",
    "start": "2020-01-13",
    "end": "2020-01-20",
    "color": colorSet.getIndex(15),
    "task": "PED_153437125"
}, {
    "category": "Multiusos",
    "start": "2020-01-22",
    "end": "2020-01-30",
    "color": colorSet.getIndex(15),
    "task": "PED_183128165"
}];

chart.dateFormatter.dateFormat = "yyyy-MM-dd";
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
chart.fontSize = 13;
chart.tooltipContainer.fontSize = 10;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -300;
categoryAxis.renderer.radius = 300;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = {
    count: 1,
    timeUnit: "day"
};
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.5;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
dateAxis.tooltip.label.paddingTop = 7;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.4;
labelTemplate.background.fill = am4core.color("#000");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(5);
series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color"; // get color from data
series.columns.template.propertyFields.stroke = "color";
series.columns.template.strokeOpacity = 0;

var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 3;
bullet.circle.strokeOpacity = 0;
bullet.propertyFields.fill = "color";
bullet.locationX = 0;


var bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.circle.radius = 3;
bullet2.circle.strokeOpacity = 0;
bullet2.propertyFields.fill = "color";
bullet2.locationX = 1;


var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "image1";

var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet2.disabled = true;
imageBullet2.propertyFields.disabled = "disabled2";
imageBullet2.locationX = 0;
imageBullet2.circle.radius = 20;
imageBullet2.propertyFields.stroke = "color";
imageBullet2.background.propertyFields.fill = "color";
imageBullet2.image = new am4core.Image();
imageBullet2.image.propertyFields.href = "image2";


var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = "eventDate";
eventSeries.dataFields.categoryY = "category";
eventSeries.data = [
    {
        category: "",
        eventDate: "2020-01-05",
        letter: "MA",
        description: "Mantenimiento"
    },
    {
        category: "",
        eventDate: "2020-01-07",
        letter: "DE",
        description: "Desabasto"
    },
    {
        category: "",
        eventDate: "2020-01-11",
        letter: "DE",
        description: "Desabasto"
    },
    {
        category: "",
        eventDate: "2020-01-16",
        letter: "MA",
        description: "Mantenimiento"
    },
    {
        category: "",
        eventDate: "2020-01-18",
        letter: "DE",
        description: "Desabasto"
    },
    {
        category: "",
        eventDate: "2020-01-20",
        letter: "MA",
        description: "Mantenimiento"
    },
    {
        category: "",
        eventDate: "2020-01-23",
        letter: "DE",
        description: "Desabasto"
    }
];
eventSeries.strokeOpacity = 0;

var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
flagBullet.label.propertyFields.text = "letter";
flagBullet.locationX = 0;
flagBullet.tooltipText = "{description}";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center"
chart.scrollbarX.width = am4core.percent(85);

var cursor = new am4plugins_timeline.CurveCursor();
chart.cursor = cursor;
cursor.xAxis = dateAxis;
cursor.yAxis = categoryAxis;
cursor.lineY.disabled = true;
cursor.lineX.strokeDasharray = "1,4";
cursor.lineX.strokeOpacity = 1;

dateAxis.renderer.tooltipLocation2 = 0;
categoryAxis.cursorTooltipEnabled = false;
