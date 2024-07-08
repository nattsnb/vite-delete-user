import { DeleteButton } from "./DeleteButton.js";

export class UserList {
  constructor() {
    this.users = {};
    this.startButton = null;
    this.fetchData();
    this.initializeStartButton();
  }
  async fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.users = await response.json();
  }
  initializeStartButton() {
    const startButton = document.createElement("button");
    startButton.innerHTML = "INITIALIZE LIST";
    startButton.setAttribute("id", "start-button");
    this.startButton = startButton;
    const listContainer = document.querySelector("#app");
    listContainer.append(startButton);
    this.initializeEventListener();
  }

  initializeEventListener = () => {
    this.startButton.addEventListener("click", this.initializeList);
  };

  initializeList = () => {
    const listContainer = document.querySelector("#app");
    for (let i = 0; i < this.users.length; i++) {
      const userContainer = document.createElement("div");
      listContainer.append(userContainer);
      userContainer.classList.add("user-container");
      userContainer.innerHTML = this.users[i].name;
      new DeleteButton(this.users[i].id, userContainer);
    }
  };
}
