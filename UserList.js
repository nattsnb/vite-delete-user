export class UserList {
    constructor() {
        this.fetchedData ={}
        this.fetchData()
        this.initializeList()
    }
    async fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
            .then((data) => (this.fetchedData = data))
    }
    async initializeList(){
        console.log("initialising")
        const listContainer = document.querySelector('#app')
        console.log(listContainer)
        console.log(this.fetchedData.length)
        for(let i = 0; i < this.fetchedData.length; i ++){
            const userContainer = document.createElement("div");
            console.log("creating list")
            listContainer.append(userContainer);
            userContainer.classList.add('userContainer');
            userContainer.innerHTML = "USERNAME"
        }

    }
}
