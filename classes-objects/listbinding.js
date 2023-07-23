class listBinding{
    constructor (element){
        this.listElement = element;
        this.textList = []
    }
    static createListItem(text){
        const li = document.createElement('li')
        li.textContent = text;
        return li
    }
    update(){
        while (this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }

        for (const text of this.textList){
            this.listElement.appendChild(listBinding.createListItem(text))
        }
    }
    add(text){
        this.textList.push(text)
        this.update()
    }
    remove(index){
        this.textList.splice(index,1)
        this.update();
    }
}