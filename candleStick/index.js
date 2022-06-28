var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

const upColor = "red";
const upBorderColor = "red";
const downColor = "blue";
const downBorderColor = "blue";
// Each item: open，close，lowest，highest
const data0 = splitData([
  ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
  ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
  ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
  ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],
  ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],
  ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],
  ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],
  ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],
  ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99],
  ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43],
  ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51],
  ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03],
  ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11],
  ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12],
  ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62],
  ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12],
  ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63],
  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
  ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
  ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
  ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
  ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
  ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
  ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
  ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
  ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
  ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
]);
function splitData(rawData) {
  const categoryData = [];
  const values = [];
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
  }
  return {
    categoryData: categoryData,
    values: values,
  };
}
function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += +data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}
option = {
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: "10%",
    right: "10%",
    bottom: "15%",
  },
  xAxis: {
    type: "category",
    data: data0.categoryData,
    show: false,
    boundatyGap: ["1%", "1%"],
    nameGap: 10,
    // axisLine: { onZero: false },
    // splitLine: { show: false },
    // min: "dataMin",
    // max: "dataMax",
  },
  yAxis: {
    scale: true,
    show: false,
  },
  dataZoom: [
    {
      type: "inside",
      start: 50,
      end: 100,
    },
  ],
  series: [
    {
      name: "카카오",
      type: "candlestick",
      data: data0.values,
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor,
      },
      markPoint: {
        symbolSize: 5,
        symbol: "circle",
        // symbolOffset: [0, 20],
        label: {
          show: true,
          position: "outside",
          fontSize: 8,
          color: "#8f8e8e",
          verticalAlign: "bottom",
          textBorderColor: "black",
          backgroundColor: "#f1f1f1",
          padding: 5,
          borderRadius: 10,
          verticalAlign: 20,
          formatter: function (param) {
            const getSymbolName = () => {
              if ("max" === param.data.type) return "최고";
              if ("min" === param.data.type) return "최저";
            };

            return (
              param !== null && `${getSymbolName()} ${Math.round(param.value)}`
            );
          },
        },
        data: [
          {
            name: "highest value",
            type: "max",
            valueDim: "highest",
            symbolOffset: [0, -15],
            label: { color: "red" },
          },
          {
            name: "lowest value",
            type: "min",
            valueDim: "lowest",
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
      markLine: {
        lineStyle: {
          opacity: 0,
        },
        data: [
          [
            {
              type: "min",
              valueDim: "lowest",
            },
            {
              type: "max",
              valueDim: "highest",
            },
          ],
        ],
      },
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
