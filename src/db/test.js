const { insert, findBy, differenceBetween } = require('./setup.js')


// insert("discord#1111")
//     .then((data) => console.log(data))

differenceBetween("discord#1111", "discord#0000").then((data) => console.log(data))