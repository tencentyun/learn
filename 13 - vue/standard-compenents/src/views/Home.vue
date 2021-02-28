<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FirstComponent :msg="msg" :frame-name="frameName"></FirstComponent>
    <div id="main1" style="width: 600px;height:400px;"></div>
    <div id="main2" style="width: 600px;height:600px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComponent from "@/components/FirstComponent.vue";

import * as echarts from "echarts/index.blank";
import "echarts/lib/component/grid";
import "echarts/lib/chart/line";
import "zrender/lib/canvas/canvas";

import "echarts/lib/chart/gauge";

export default {
  name: "Home",
  components: {
    FirstComponent,
  },
  data() {
    return {
      msg: "这是第一个标准组件",
      frameName: ["Vue", "React", "Angular"],
    };
  },
  mounted() {
    this.line();
    this.gauge();
  },
  methods: {
    line() {
      var myChart = echarts.init(document.getElementById("main1"));
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },

    gauge() {
      var myChart = echarts.init(document.getElementById("main2"));
      var option;

      option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 20,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: "auto",
                width: 5,
              },
            },
            axisLabel: {
              color: "#464646",
              fontSize: 20,
              distance: -60,
              formatter: function (value) {
                if (value === 0.875) {
                  return "优";
                } else if (value === 0.625) {
                  return "中";
                } else if (value === 0.375) {
                  return "良";
                } else if (value === 0.125) {
                  return "差";
                }
              },
            },
            title: {
              offsetCenter: [0, "-20%"],
              fontSize: 30,
            },
            detail: {
              fontSize: 50,
              offsetCenter: [0, "0%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + "分";
              },
              color: "auto",
            },
            data: [
              {
                value: 0.7,
                name: "成绩评定",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
