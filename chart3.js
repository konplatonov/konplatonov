var ctx = document.getElementById("myChart3").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45]
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
        "Говорят, что «как Новый год встретишь — так его и проведешь». Верите ли вы в эту примету?"
    }
  }
});
