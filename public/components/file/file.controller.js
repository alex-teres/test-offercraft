class FileCtrl {
    constructor($element) {
        this.$element = $element;
        this.files = this.$element.find('input[type="file"]');
    }

    upload() {
        let files = this.$element.find('input[type="file"]');
        let xhr = new XMLHttpRequest();
        xhr.open('post', 'http://77.93.34.166:8088/api/demoReport?apiKey=f180f823216a4c0a878a7f86c931c323&task=frontend', true);
        let formData = new FormData();
        formData.append("files", files[0].files);
        xhr.send(formData);





        // let files = this.$element.find('input[type="file"]');
        // var formData = new FormData();
        // formData.append("files", files[0].files);
        // this.$http.post("http://77.93.34.166:8088/api/demoReport?apiKey=f180f823216a4c0a878a7f86c931c323&task=frontend", formData, {
        //     headers: {'Content-Type': "multipart/form-data;" }
        // }).then(
        //     (res)=>{console.log(res)},
        //     (err)=>{console.log(err)}
        // );
    }



}

export  default FileCtrl;