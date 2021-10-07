let arguments = process.argv;
arguments.splice(0,2);

let pinRegex = RegExp('^[0-9]{6}$');

arguments.forEach(element => {
    console.log("UC1 :" +element+": ", pinRegex.test(element));
});

 pinRegex = RegExp('^[0-9]{6}$');

arguments.forEach(element => {
    console.log("UC2 :" +element+": ", pinRegex.test(element));
});

pinRegex = RegExp('^[0-9]{6}$');

arguments.forEach(element => {
    console.log("UC3 :" +element+": ", pinRegex.test(element));
});

pinRegex = RegExp("(^[0-9]{3})([\s]?)([0-9]{3}$)");

arguments.forEach(element => {
    console.log("UC4 :" +element+": ", pinRegex.test(element));
});

