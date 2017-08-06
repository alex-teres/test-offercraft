class MainTable {
    constructor($state,$http, $q){
        this.$q = $q;
        this.$state = $state;
        this.$http = $http;
    }
    getInfoFromServer(){
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

    getInfoFromJson(){
        return [
                {
                    "clientId": "3724782f-d245-4266-8dd0-cd216a602509",
                    "creditCards": [
                        {
                            "id": "5dd4ee73-9dec-4716-8d2e-835191b24bc7",
                            "monthsData": {
                                "1": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-01-07T11:26:12",
                                            "type": "Debit",
                                            "amount": 697.53
                                        },
                                        {
                                            "timeStamp": "2017-01-25T03:45:36",
                                            "type": "Credit",
                                            "amount": 636.55
                                        }
                                    ],
                                    "totals": {
                                        "debit": 697.53,
                                        "credit": 636.55
                                    }
                                },
                                "2": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-02-03T03:29:52",
                                            "type": "Debit",
                                            "amount": 390.65
                                        },
                                        {
                                            "timeStamp": "2017-02-06T04:30:52",
                                            "type": "Credit",
                                            "amount": 503.44
                                        },
                                        {
                                            "timeStamp": "2017-02-27T19:57:59",
                                            "type": "Debit",
                                            "amount": 281.4
                                        }
                                    ],
                                    "totals": {
                                        "debit": 672.05,
                                        "credit": 503.44
                                    }
                                },
                                "3": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-03-02T08:23:07",
                                            "type": "Credit",
                                            "amount": 592.79
                                        },
                                        {
                                            "timeStamp": "2017-03-09T15:11:19",
                                            "type": "Debit",
                                            "amount": 95.28
                                        }
                                    ],
                                    "totals": {
                                        "debit": 95.28,
                                        "credit": 592.79
                                    }
                                }
                            }
                        },
                        {
                            "id": "8182f620-e335-4f98-b6cc-7a47f9bb34fa",
                            "monthsData": {
                                "1": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-01-10T19:11:07",
                                            "type": "Credit",
                                            "amount": 303.49
                                        },
                                        {
                                            "timeStamp": "2017-01-16T23:52:00",
                                            "type": "Debit",
                                            "amount": 739.99
                                        },
                                        {
                                            "timeStamp": "2017-01-26T06:38:56",
                                            "type": "Credit",
                                            "amount": 761.38
                                        }
                                    ],
                                    "totals": {
                                        "debit": 739.99,
                                        "credit": 1064.87
                                    }
                                },
                                "2": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-02-07T13:25:05",
                                            "type": "Credit",
                                            "amount": 826.33
                                        },
                                        {
                                            "timeStamp": "2017-02-25T17:01:16",
                                            "type": "Debit",
                                            "amount": 744.41
                                        }
                                    ],
                                    "totals": {
                                        "debit": 744.41,
                                        "credit": 826.33
                                    }
                                },
                                "3": {
                                    "rows": [
                                        {
                                            "timeStamp": "2017-03-04T16:11:45",
                                            "type": "Credit",
                                            "amount": 664.64
                                        },
                                        {
                                            "timeStamp": "2017-03-06T09:52:42",
                                            "type": "Debit",
                                            "amount": 679.42
                                        }
                                    ],
                                    "totals": {
                                        "debit": 679.42,
                                        "credit": 664.64
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }

export default MainTable;