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