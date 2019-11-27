Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 15;
var ctx = document.getElementById("myChart4").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "pie",

  // The data for our dataset
  data: {
    labels: [
      "Да, интересуюсь регулярно",
      "Интересуюсь время от времени",
      "Скорее не интересуюсь"
    ],
    datasets: [
      {
        label: "Процент",
        data: [19.7, 54, 26.3],
        backgroundColor: ["rgb(190, 81, 100)", , "rgb(0, 102, 96)",]
      }
    ]
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text: ["Вы интересуетесь политикой в целом?", "(% респондентов)"]
    }
  }
});
