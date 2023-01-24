//Here we will simulate how we can handle a promise or multiple promises with a fake fetch function.
//IMPORTANT! Please read the README.md file first.


//First let's understand what happens here. As a normal fetch would do, this function returns a promise.
//And in that promise it returns some data as well, or if it's rejected, as a fetch would when it is unsuccessful it will return an error message.
//We can manipulate this fake fetch function's outcome by passing an even number as argument when we want it to succeed,
//or we can pass it an odd number when we want it to fail.
const fakeFetchData = (number) => {
  const data = {
        name: "Professor",
        skills: ["IT","Math","Communication"],
        age: 35
  }
  const error = "This is an error message!"

  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
        resolve({data:data, number: number})
    }
    else {
        reject(`\t${error} ${number}`)
    }
  });
}


//Ok as you can see when the "fetch" was successful, meaning that the promise was resolved we got the data we wanted,
// but when we the "fetch" was unsuccessful meaning that the promise was rejected we got the error message.
console.log("Simple non nested fake fetch requests.");

fakeFetchData(2)
.then((resp) => {console.log(resp);})
.catch((error) => {console.log(error);})

fakeFetchData(3)
.then((data) => {console.log(data);})
.catch((error) => {console.log(error);}).then(() => {
    console.log("");
    console.log("-----------------------------------------");
    console.log("These are the nested fake fetch requests.");  
})

//Now let's see what happens when we want to handle nested promises, with then and catch branches.
fakeFetchData(2).then((resp1) => {
    //Here I can do what ever calculation I want.
    fakeFetchData(3).then((resp2) => {
        //This will never run.
    })
    .catch((error) => {console.log(error + " second catch branch.");})
})
.catch((error) => {console.log(error + " first catch branch.");}).then(() => {
    console.log("");
    console.log("-----------------------------------------");
    console.log("But hold on and what happens if there is only one catch branch?");
    console.log(`\t For the sake of avoiding errors in my code, I commented the previous part. Uncomment it and see for yourself what happens.`);
    console.log("Now please take a look at the code again, and keep reading the explanation.");
})
//But hold on and what happens if there is only one catch branch?
//As you can see every then branch have to have a catch branch as well otherwise if we get an error it can potentially remain unhandled. 

// fakeFetchData(2).then((resp1) => {
//     fakeFetchData(3).then((resp2) => {
//         //This will never run.
//     })
// })
// .catch((error) => {console.log(error + " This is the outer catch branch.");})

