let arguments = process.argv;
arguments.splice(0,2);

let pinCodeRegex = RegExp('[0-9]{6}');

arguments.forEach(element => {
    console.log("UC1 :" +element+": ", pinCodeRegex.test(element));
});

let pinCodeRegex = RegExp('[0-9]{6}');

arguments.forEach(element => {
    console.log("UC2 :" +element+": ", pinCodeRegex.test(element));
});