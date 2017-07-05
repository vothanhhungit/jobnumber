angular.module("jobNumberApp", ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ngTable'])
        .config(config)
        .run(run);
        //.run(runAutoRefresh);

function config($routeProvider) {
    $routeProvider
    // .when("/clienttList", {
    //     templateUrl : "client/z.html",
    //     controller : "ListClientController",
    //     css : "account/z.css"
    // })
    .when("/error", {
        templateUrl : "template/error.html",
    })
    .otherwise({ redirectTo: '/' });
}

function run($rootScope, $location, $window, $http, LOCAL_STORAGE) {
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    $rootScope.currentAccount = true;
    var dateNow=new Date();
    $rootScope.currentAccount={
            LoginName : "loginName",
            AccountType : "responseJson.accountType",
            token : "Basic cXV5QGJvbnNleWphZGVuLmNvbTpXaW5tYW42ODY4",
            clientId : "responseJson.clientId",
            loginId : "responseJson.loginId",
            loginDateTime : dateNow.toString()
        };
    $window.localStorage[LOCAL_STORAGE.CURRENT_ACCOUNT] = angular.toJson($rootScope.currentAccount);
  });
}
function runAutoRefresh(RefreshService){
    //RefreshService.autoRefresh();
};