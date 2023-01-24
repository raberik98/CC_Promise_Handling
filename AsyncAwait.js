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

//In this case we will fetch data by the use of async functions