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

    async deleteUser () {
        const deleteUser = await fetch(this.url + '/' + this.iD, {
            method: 'DELETE',
        })
        console.log(`user deleted ${this.iD}`)
    }
}