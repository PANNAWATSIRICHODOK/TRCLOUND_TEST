function calculateRatios() {
  var ratio = [];
  var num = [];
  var ratios = []
  
  $(".topNum").each(function() {
    var value = $(this).text()
    ratios.push(parseInt(value))
  })

  for (i = 0; i < ratios.length; i++) {
    var userinputs = document.getElementsByClassName("input")[i].value;
    if (userinputs !== "") {
      num.push(userinputs);
      ratio.push(ratios[i]);
    }
  }

  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = (ratios[i] * num[0]) / ratio[0];
  }
}

function clearInputs() {
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
