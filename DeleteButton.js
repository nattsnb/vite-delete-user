export class DeleteButton {
  constructor(userId, userContainer) {
    this.url = "https://jsonplaceholder.typicode.com/users";
    this.userId = userId;
    this.userContainer = userContainer;
    this.createButton(userContainer);
  }

  deleteUser = async () => {
    const deleteUserResponse = await fetch(`${this.url}/${this.userId}`, {
      method: "DELETE",
    });
    if (this.userContainer) {
      this.userContainer.remove();
    }
  };

  createButton = (userContainer) => {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "DELETE";
    userContainer.append(deleteButton);
    deleteButton.addEventListener("click", this.deleteUser);
  };
}
