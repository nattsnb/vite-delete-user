export class UserList {
    constructor() {
        this.fetchedData ={}
        this.startButton = null
        this.fetchData()
        this.wait()
        this.initializeStartButton()
    }
    async fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
            .then((data) => (this.fetchedData = data))
    }
    initializeStartButton() {
        const startButton = document.createElement("button");
        startButton.innerHTML = "INITIALIZE LIST"
        startButton.setAttribute("id","start-button");
        this.startButton = startButton
        const listContainer = document.querySelector('#app')
        listContainer.append(startButton)
        this.initializeEventListener()
    }

    initializeEventListener = () => {
        this.startButton.addEventListener('click', this.initializeList());
        console.log("click event initialized")
    };

    initializeList(){
        console.log("initialising list")
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
    wait () {

    }
}
