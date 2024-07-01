export class DeleteButton {
    constructor(id, userContainer) {
        this.url = 'https://jsonplaceholder.typicode.com/users'
        this.id = id + 1;
        this.createButton(userContainer)
    }

    async deleteUser() {
        const deleteUser =  await fetch(`${this.url}/${this.id}`, {
            method: 'DELETE',
        })
    }

    createButton = (userContainer) => {
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = "DELETE"
        userContainer.append(deleteButton);
        deleteButton.addEventListener("click", this.deleteUser)
    }
}