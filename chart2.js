Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 15;
var ctx = document.getElementById("myChart2").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: ["Время от времени", "Да, постоянно", "Практически нет"],
    datasets: [
      {
        label: "Низкий ПП",
        backgroundColor: "rgb(0, 102, 96)",
        borderColor: "rgb(0, 102, 96)",
        data: [391, 59, 440]
      },
      {
        label: "Высокий ПП",
        backgroundColor: "rgb(190, 81, 100)",
        borderColor: "rgb(190, 81, 100)",
        data: [169, 47, 143]
      }
    ]
  },
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text:
        "Испытываете ли Вы агрессивность\nк каким-либо людям, группам, объединениям? (число респондентов)"
    }
  }
});
