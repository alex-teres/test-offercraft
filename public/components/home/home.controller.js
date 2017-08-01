class HomeCtrl{
    constructor($scope, User, Auth, Home,$state){

        this.localStorage = localStorage;
        this.Home = Home;
        this.$state = $state;

    };
}
export default HomeCtrl;