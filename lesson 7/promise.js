function add(value, callback) {
  return callback(value + 5, false)
}
function addP(value) {
  return new Promise((resolve, reject) => {
    resolve(value + 5)
  })
}

function sub(value, callback) {
  return callback(value - 3, false)
}

function subP(value) {
  return new Promise((resolve, reject) => {
    resolve(value - 3)
  })
}

function mul(value, callback) {
  return callback(value * 5, false)
}

function mulP(value) {
  return new Promise((resolve, reject) => {
    resolve(value * 5)
  })
}

// add(5, function (addRes, err) {
//   if (!err) {
//     sub(addRes, function (subRes, err) {
//       if (!err) {
//         mul(subRes, function (mulRes, err) {
//           if (!err) {
//             console.log("callback: " + mulRes)
//           }
//         })
//       }
//     })
//   }
// })

// addP(5)
//   .then((addRes) => subP(addRes))
//   .then((subRes) => mulP(subRes))
//   .then((mulRes) => {
//     console.log("Promise: " + mulRes)
//   })
//   .catch((err) => console.log(err))

async function main() {
  try {
    const addRes = await addP(5)
    console.log("*")
    const subRes = await subP(addRes)
    console.log("*")
    const mulRes = await mulP(subRes)
    console.log("***")
    console.log("async/await: " + mulRes)
  } catch (error) {
    console.log(error)
  }
}

main()
