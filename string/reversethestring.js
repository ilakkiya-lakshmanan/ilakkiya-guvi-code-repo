var string="ilakkiya";
var spstring=string.split("");
var rev=spstring.reverse();

var result =rev.join("");
var final=result.charAt(0).toUpperCase() + result.slice(1);
console.log(final);