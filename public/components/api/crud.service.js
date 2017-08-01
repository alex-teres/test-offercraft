import Api from './api.service';

class CrudService extends Api {

    all(params) {        
        return this.$http({method: 'GET', url:`${this.url}/${this.path}`, params: params})
    }
    
    add(items) {
        var defer = this.$q.defer();
        this.$http.post(`${this.url}/${this.path}/`, items).then(
            (res) => {
                this.$rootScope.$broadcast(`${this.path}:add`,res.data.data);
                defer.resolve(res.data.data);
            }
        );        
        return defer.promise;
    }

    delete(item) {
        var defer = this.$q.defer();
        this.$http.delete(`${this.url}/${this.path}/${item._id}`).then(
            (res) => {
                this.$rootScope.$broadcast(`${this.path}:delete`, res.data.data);
                defer.resolve(res.data.data);
            }
        );

        return defer.promise;
    }

    update(items, id) {
        var defer = this.$q.defer();
        this.$http.put(`${this.url}/${this.path}/${id}`, items).then(
            (res) => {
                defer.resolve(res.data.data);
            }
        );
        return defer.promise;
    }

}
export default CrudService;