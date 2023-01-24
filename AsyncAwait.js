//Here we will simulate how we can handle a promise or multiple promises with a fake fetch function.
//IMPORTANT! Please read the README.md file first.

//The fake fetch is unchanged since our last example.
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

//In this case we will fetch data by the use of async functions, let's see how it is done.
//I will repeate the same fake requests I did in the ThenAndCatch.js file. Let's see...
let requestOne = async function() {
    try {
        console.log("These are the simple non nested fake fetch requests, done in this way.");
        const hereIGetTheData = await fakeFetchData(2)
        console.log(hereIGetTheData);
    } catch (error) {
        console.log(error);
    }
}
requestOne()

requestOne = async function() {
    try {
        const hereIGetTheData = await fakeFetchData(3)
        console.log(hereIGetTheData);
    } catch (error) {
        console.log(error);
        console.log("");
        console.log("-----------------------------------------");
        console.log("These are the nested fake fetch requests, done in this way."); 
    }
}
requestOne()
//Here what I basically did is that I stored the async function that I wanted to execute in a variable and I keep overwriting it,
// but in practice we will mostly use anonim functions for this.

requestOne = async function() {
    try {
        const data1 = await fakeFetchData(2)
        //Here I can do what ever calculation I want with data 1
        const data2 = await fakeFetchData(3)
        console.log(data2);
        //I will never get data2 as it will return a promise reject
    } catch (error) {
        console.log(error + " this is what we logged last time in the second catch branch.");
    }
}
//Noticed that here it was enough for us to use only one catch branch by putting our code inside of a try catch.
//Because of this we do not have to write multiple catch branches, we can simply catch what ever error we get in one branch.