$(document).ready(function(){
	$("#formOne").submit(function(event) {
		event.preventDefault();
		var userNumber = parseInt($("#userNumber").val());
		console.log(userNumber);

		total = 1;
		function compute(num) {
		for (i=num; i >=1; i--) {
			total *= i;
		}
		return total;
		};

		$("#output").empty().append(compute(userNumber));
	});
});