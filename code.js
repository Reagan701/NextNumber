const numbers = [1,4,7,2,5,9,3];

let iterate = numbers.entries();

document.write('<p>List of numbers =>' + numbers);
document.write("</p><br><br><h4>Next Number</h4><br>")
document.write(`<p>${iterate.next().value}</p>`);
document.write("<br><br><h4>Next Number</h4><br>")
document.write(`<p>${iterate.next().value}</p>`);
document.write("<br><br><h4>Next Number</h4><br>")
document.write(`<p>${iterate.next().value}</p>`);