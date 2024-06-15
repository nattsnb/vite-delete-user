export class UserList {
    constructor() {
        this.fetchedData ={}
        this.fetchData()
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
            .then((data) => console.log(data))
            .then((this.initializeList()))
    }
    initializeList(){
        const listContainer = document.querySelector('#app')
        for(let i = 0; i < this.fetchedData.length; i ++){
            const userContainer = document.createElement("div");
            console.log("creating list")
            listContainer.append(userContainer);
            userContainer.classList.add('userContainer');
            userContainer.innerHTML = "USERNAME"
        }

    }
}
