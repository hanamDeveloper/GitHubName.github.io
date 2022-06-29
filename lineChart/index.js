import { markPointLabelFontSize } from "../util/chartUtils.js";
import { currentOS } from "../util/getOS.js";

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
      "7",
      "7",
    ],
  },
  yAxis: {
    type: "value",
    show: false,
  },
  backgroundColor: "#FAFAFB",
  series: [
    {
      symbol: "image:///chart_mark_icon.svg",
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
        -2000, 5000, 1300, 511, 12, 12, 9, 11, 13, 11, 12, -2000, 9, 11, 2313,
        11, 12, 12, 9, 5000, 813, 611, 1300, 12, 1300, 112, 1333, 1121, 12222,
        1212, 9222, 11, 13, -2000, 12, 12, 9, -2000, 913, 871, 662, 520, 700,
        1100, 1300, 1100, 1300, 1400, 7000,
      ],
      markPoint: {
        symbolSize: 0,
        showSymbol: "none",
        label: {
          show: true,
          position: "outside",
          fontSize: markPointLabelFontSize(currentOS),
          color: "#8f8e8e",
          verticalAlign: "bottom",
          textBorderColor: "black",
          backgroundColor: "#FAFAFB",
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
