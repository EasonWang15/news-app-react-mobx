import { observable, action } from 'mobx'

class store {
    @observable isLogged = false
    @observable name = ""
    @observable lists = []
    @action.bound login(name) {
        this.isLogged = true
        this.name = name
    }
    @action.bound addList(list) {
        this.lists.push(list)
    }
}

export default new store()