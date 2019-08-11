var ctx = document.getElementById("myChart1").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: ["Готов участвовать в массовых протестных акциях ",
     "Готов заниматься политической агитацией",
      "Готов написать жалобу",
       "Готов подать в суд", 
       "Готов на самые решительные действия (вплоть до силовых)", 
       "Затрудняюсь ответить"],
    datasets: [
      {
        label: "Процент",
        backgroundColor: "rgb(190, 81, 100)",
        borderColor: "rgb(190, 81, 100)",
        data: [24.3, 13.6, 29.8, 20.0, 6.6, 38.5]
      }
    ]
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text:
        "На какие действия Вы готовы для защиты своих интересов и политических взглядов?", 
    },
    legend: {
      display: false,
  }
  }
});
