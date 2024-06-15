export class UserList {
    constructor() {
        this.fetchedData ={}
        this.fetchData()
        // this.initializeList()
    }
    async fetchData() {
        await Promise.all([
            fetch(
                "https://jsonplaceholder.typicode.com/users",
            ),
        ])
            .then((responsesArray) =>
                Promise.all(responsesArray.map((res) => res.json())),
            )
            .then((data) => (this.fetchedData = data))
            .then((data) => console.log(data));
    }
    // initializeList(){
    //     for(let i = 0; i < this.userData.length; i ++){
    //         const userContainer = document.createElement("div");
    //         document.body.append(userContainer);
    //         userContainer.classList.add('userContainer');
    //         userContainer.innerHTML = "USERNAME"
    //     }
    //
    // }
}