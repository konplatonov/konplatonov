var ctx = document.getElementById("myChart2").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: ["2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: "Сильно выросла",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [42.6,39.9,27.6,29.5]
      },
      {
        label: "Незначительно выросла",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [20.5,24.3,18.9,20.6]
      },
      {
        label: "Осталась на том же уровне",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [15.6,18.9,20.2,16.1]
      },
      {
        label: "Незначительно уменьшилась",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [4.0,2.7,3.4,2.6]
      },
      {
        label: "Сильно уменьшилась",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [1.4,1.8,0.3,1.5]
      },
      {
        label: "Затрудняюсь ответить",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [15.9,12.5,29.6,29.7]
      }
    ]
  },
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text:
        "Если сравнивать с прошлым годом, стоимость основного набора продуктов для Вашего новогоднего стола выросла, осталась на том же уровне или уменьшилась?"
    }
  }
});
