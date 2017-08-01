

class Home {
    constructor($state){
        this.$state = $state;
    }
    logOut (){
        localStorage.removeItem('Authorization');
        this.$state.go('login');
    };
}

export default Home;