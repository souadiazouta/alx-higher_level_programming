#!/usr/bin/node
// prints "My number: <first argument converted in integer>" 
// if the argument can't be converted to an integer, print "Not a number

if (isNaN(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
