class MainTableCtrl{
    constructor(MainTable,$state, $scope){

        this.MainTable = MainTable;
        this.$state = $state;
        this.$scope = $scope;
        MainTable.getInfo().then(
            (res)=>{
                console.log(res);
                $scope.clients = res;
            },
            (err)=>{
                console.log(err);
            }
        )

    };
}
export default MainTableCtrl;