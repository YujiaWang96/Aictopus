import * as echarts from "echarts";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    //保证dom可用后再进行图表渲染

    //获取渲染图表的dom节点
    const chartDom = document.getElementById("main");
    //图表初始化生成的一个实例对象
    const myChart = echarts.init(chartDom);
    //图表参数
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    //如果图表存在，则使用图表参数完成渲染
    option && myChart.setOption(option);
  }, []);
  return (
    <div>
      {/* //这个dom元素必须有宽高，图表才能显示 */}
      <div id="main" style={{ width: "500px", height: "400px" }}>
        123
      </div>
    </div>
  );
};
export default Home;
