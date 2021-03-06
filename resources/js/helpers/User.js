class User{
    storeUser(user){
        localStorage.setItem('user', user)
    }
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    }
    isLoggedIn(){
        return this.getUser() !== null? this.getUser() : false
    }
    logout(){
        localStorage.removeItem('user')
    }
}

export default User = new User();