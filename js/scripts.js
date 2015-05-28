var baseMaster = function(input, base) {
  var lookup = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f":15}
  var finalValue = 0
  input = input.toLowerCase().split('').reverse()

  for (var i = 0; i < input.length; i++) {
    finalValue = finalValue + ((lookup[input[i]]) * (Math.pow(base, i)));
  };

  return finalValue;

};



$(document).ready(function() {
  $("#calculator").submit(function(event) {
    var number = $("input#number").val();
    var base = parseInt($("select#base").val())
    debugger;
    var output = baseMaster(number, base);


    $(".result").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
