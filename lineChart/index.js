const dom = document.getElementById("chart-container");
const myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

const option = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    show: false,
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
      "6",
      "7",
    ],
  },
  yAxis: {
    type: "value",
    show: false,
  },
  series: [
    {
      symbol: "image://http://127.0.0.1:5500/chart_mark_icon.svg",
      symbolSize: 15,
      name: "Highest",
      type: "line",
      lineStyle: {
        color: "black",
        width: 1,
      },
      itemStyle: {
        color: "#1CE7AA",
      },
      stack: "confidence-band",
      showSymbol: false,
      data: [
        -20000, 11, 13000, 11, 12, 12, 9, 11, 13, 11, 12, -20000, 9, 11, 13, 11, 12,
        12, 9, 11, 13, 11, 13000, 12, 13000, 11, 13, 11, 12, 12, 9, 11, 13, -20000, 12, 12,
        9, -20000, 13, 11, 12, 12, 9, 11, 13, 11, 13000, 12, 9,
      ],
      markPoint: {
        symbolSize: 0,
        showSymbol: "none",
        label: {
          show: true,
          position: "outside",
          fontSize: 12,
          color: "#8f8e8e",
          verticalAlign: "bottom",
          textBorderColor: "black",
          //   backgroundColor: "#f1f1f1",
          padding: 5,
          borderRadius: 10,
          verticalAlign: 20,
          formatter: function (param) {
            const getSymbolName = () => {
              if ("max" === param.data.type) return "최고";
              if ("min" === param.data.type) return "최저";
            };

            return (
              param !== null &&
              `${getSymbolName()} ${param.value.toLocaleString("en")}`
            );
          },
        },
        data: [
          {
            type: "max",
            name: "Max",
            symbolOffset: [0, -15],
            label: { color: "red" },
          },
          {
            type: "min",
            name: "Min",
            symbolOffset: [0, 5],
            label: { color: "blue" },
          },
        ],
        tooltip: {
          formatter: function (param) {
            return param.name + "<br>" + (param.data.coord || "");
          },
        },
      },
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
