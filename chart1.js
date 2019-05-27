var ctx = document.getElementById("myChart1").getContext("2d");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: "Верю",
        backgroundColor: "rgb(22, 99, 132)",
        data: [34.8, 34.0, 31.2, 30.9]
      },
      {
        label: "Не верю",
        backgroundColor: "rgb(255, 99, 132)",
        data: [58.9, 59.3, 62.6, 60.8]
      },
      {
        label: "Затрудняюсь ответить",
        backgroundColor: "rgb(255, 30, 12)",
        data: [6.3, 6.7, 6.2, 8.3]
      }
    ]
  },
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text:
        "Говорят, что «как Новый год встретишь — так его и проведешь». Верите ли вы в эту примету?"
    }
  }
});
