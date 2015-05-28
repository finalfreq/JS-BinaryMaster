var baseMaster = function(input, base) {
  var finalValue = 0
  input = input.split('').reverse()

  for (var i = 0; i < input.length; i++) {
    finalValue = finalValue + (parseInt(input[i]) * (Math.pow(base, i)));
  };

  return finalValue;

};








//
//
// $(document).ready(function() {
//   $("#calculator").submit(function(event) {
//     var input = ($("input#phrase").val());
//     var phraseCounts = wordCount(input);
//
//     $(".result").text(phraseCounts);
//     $("#result").show();
//     event.preventDefault();
//   });
// });
