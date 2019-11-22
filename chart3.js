var ctx = document.getElementById("myChart3").getContext("2d");
var chart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["Да, таких большинство",
    "Да, один или несколько человек",
    "Таких нет", "Затр.отв."],
    datasets: [
      {
        label: "Низкий ПП",
        backgroundColor: "rgb(0, 102, 96)",
        data: [36, 226, 390, 238]
      },
      {
        label: "Высокий ПП",
        backgroundColor: "rgb(190, 81, 100)",
        data: [40, 129, 99, 91]
      }
    ]
  },
  options: {
    title: {
      display: true,
      position: "top",
      fontSize: 14,
      text:
        "Среди Ваших сокурсников есть те,\nкто принимал участие в протестных акциях? (число респондентов)"
    }
  }
});
