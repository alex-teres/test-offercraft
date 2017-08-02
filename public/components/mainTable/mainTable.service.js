
class MainTable {
    constructor($state,$http, $q){
        this.$q = $q;
        this.$state = $state;
        this.$http = $http;
    }
    getInfo(){
        let defer = this.$q.defer();
        this.$http.get("http://77.93.34.166:8088/api/demoReport?apiKey=f180f823216a4c0a878a7f86c931c323").then(
            (res)=>{
                defer.resolve(res.data.records);
            },
            (err)=>{
                console.log(err);
            }
        );
        return defer.promise;
    }
}

export default MainTable;