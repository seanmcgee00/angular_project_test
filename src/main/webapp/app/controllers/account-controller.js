(function() {

    var AccountController =  function() {

    	var vm = this;

        vm.isHidden = false;
        vm.order;
        vm.fristNameColor;
        vm.secondNameColor;
        vm.accountColor;
        //console.log(' get intail order '+vm.order);
        vm.accounts = [
        	{'firstName': 'Declan', 'secondName': 'Cordial','accountNumber': '1234'},
        	{'firstName': 'Niall','secondName': 'Mulready','accountNumber': '1235'},
        	{'firstName': 'Ian','secondName': 'Cunningham','accountNumber': '1236'},
        	{'firstName': 'Brendan','secondName': 'Greene','accountNumber': '1237'},
        	{'firstName': 'Nicholas','secondName': 'Tsang','accountNumber': '1238'},
        	{'firstName': 'Sean','secondName': 'McGee','accountNumber': '1239'},
        	{'firstName': 'Anthony','secondName': 'Shannon','accountNumber': '1240'},
        	{'firstName': 'Conor','secondName': 'Harney','accountNumber': '1241'},
        	{'firstName': 'Decland','secondName': 'Horlick','accountNumber': '1242'},
        	{'firstName': 'Joshua','secondName': 'Sherwood','accountNumber': '1243'},
        	{'firstName': 'Bau','secondName': 'Nguyen','accountNumber': '1243'},
        	{'firstName': 'Kennedy','secondName': 'Bowers','accountNumber': '1243'},
        	{'firstName': 'Daleel','secondName': 'Ramjan','accountNumber': '1243'},
        	{'firstName': 'Ismael','secondName': 'Omar','accountNumber': '1243'}
        	];

        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };

        vm.setOrder= function(orderName){
            vm.order=orderName;
          //  console.log('Set order actioned button='+vm.order);
        };

        vm.setColor =function(column){
          if(column=='firstName')
          {
            vm.fristNameColor={"color" : "Blue"} ;
          }
          else if(column=='secondName') {
              vm.secondNameColor={"color" : "red"} ;
            }
          else {
                  vm.accountColor={"color" : "yellow"};
              }
          };

    };

    angular.module('accountApp').controller('accountController', [AccountController]);
}());
