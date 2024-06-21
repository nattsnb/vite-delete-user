export class DeleteButton {
    constructor(iD, userContainer) {
        this.url = 'https://jsonplaceholder.typicode.com/users'
        this.iD = iD + 1;
        console.log(this.iD)
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = "DELETE"
        userContainer.append(deleteButton);
        deleteButton.addEventListener("click", this.deleteUser)
    }

    deleteUser = () => {
        const deleteUser =  fetch(this.url + '/' + this.iD, {
            method: 'DELETE',
        })
        console.log(`${this.iD} user deleted`)
    }
}