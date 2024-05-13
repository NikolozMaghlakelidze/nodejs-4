
console.log(0);

setImmediate(() => {
  console.log(1)
})

setTimeout(() => {
  console.log(2);
}, 10);

setTimeout(() => {

  Promise.resolve().then(() => {
    console.log(3);
  });

  setTimeout(() => {
    console.log(4);
	setTimeout(() => {
		console.log(5);
	});
  }, 10);

  process.nextTick(() => {
    setTimeout(() => {
      console.log(6);
    }, 0)
    console.log(7)
  });

}, 1000);

console.log(8);

process.nextTick(() => {
	console.log(9);
});

// 1. 0
// 2. 8
// 3. 9
// 4. 1
// 5. 2
// 6. 7
// 7. 3
// 8. 4
// 9. 5
// 10. 6