class MainTableCtrl{
    constructor(MainTable,$state, $scope){

        this.MainTable = MainTable;
        this.$state = $state;
        this.$scope = $scope;
        this.rows = [];
        let currentObject = {};

        MainTable.getInfoFromServer().then(
            (res)=>{
                res.forEach((client)=>{
                    if (!currentObject.hasOwnProperty('clientId')) {
                        currentObject.clientId = client.clientId;
                    }
                    client.creditCards.forEach( (creditCard)=>{
                        if (!currentObject.hasOwnProperty('creditCardId')) {
                            currentObject.creditCardId = creditCard.id;
                        }
                        for(let key in creditCard.monthsData){
                            //вместо этого можно было сделать кастомный pipe в представлении
                            switch (key){
                                case "1":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'January';
                                    }
                                    break;
                                case "2":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'February';
                                    }
                                    break;
                                case "3":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'March';
                                    }
                                    break;
                                case "4":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'April';
                                    }
                                    break;
                                case "5":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'May';
                                    }
                                    break;
                                case "6":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'June';
                                    }
                                    break;
                                case "7":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'July';
                                    }
                                    break;
                                case "8":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'August';
                                    }
                                    break;
                                case "9":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'September';
                                    }
                                    break;
                                case "10":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'October';
                                    }
                                    break;
                                case "11":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'November';
                                    }
                                    break;
                                case "12":
                                    if (!currentObject.hasOwnProperty('month')) {
                                        currentObject.month = 'December';
                                    }
                                    break;
                            }
                            creditCard.monthsData[key].rows.forEach((row)=>{
                                currentObject.transaction = row;
                                this.rows.push(currentObject);
                                currentObject = {};
                            })
                        }
                    });
                });
            },
            (err)=>{
                console.log(err);
            }
        );

        /*    MainTable.getInfoFromJson().forEach((client)=>{
            if (!currentObject.hasOwnProperty('clientId')) {
                currentObject.clientId = client.clientId;
            }
            client.creditCards.forEach( (creditCard)=>{
                if (!currentObject.hasOwnProperty('creditCardId')) {
                    currentObject.creditCardId = creditCard.id;
                }
                for(let key in creditCard.monthsData){
                    switch (key){
                        case "1":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'January';
                            }
                            break;
                        case "2":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'February';
                            }
                            break;
                        case "3":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'March';
                            }
                            break;
                        case "4":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'April';
                            }
                            break;
                        case "5":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'May';
                            }
                            break;
                        case "6":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'June';
                            }
                            break;
                        case "7":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'July';
                            }
                            break;
                        case "8":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'August';
                            }
                            break;
                        case "9":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'September';
                            }
                            break;
                        case "10":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'October';
                            }
                            break;
                        case "11":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'November';
                            }
                            break;
                        case "12":
                            if (!currentObject.hasOwnProperty('month')) {
                                currentObject.month = 'December';
                            }
                            break;
                    }
                    creditCard.monthsData[key].rows.forEach((row)=>{
                            currentObject.transaction = row;
                            this.rows.push(currentObject);
                            currentObject = {};
                    })
                }
            });
        });*/
    };
}
export default MainTableCtrl;