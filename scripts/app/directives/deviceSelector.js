Application.Directives.directive('deviceSelector', ['deviceService', function(deviceService){
    return {
        restrict: 'A',
        scope:{
            ngModel: "=",
            onChange: "&"
        },
        link: function(scope, element, attrs){
            var elem = $(element);

            var devices;

            var select2Options = {
                minimumInputLength: 1,
                placeholder: "Select a Device",
                multiple: true,
                query: function(query){
                        var data = {results: []};
                        for(var i = 1; i < devices.length; i++){
                            if(devices[i].description.toLowerCase().indexOf(query.term) !== -1){
                                data.results.push({
                                    id: devices[i].deviceId,
                                    text: devices[i].description
                                });
                            }
                        }
                        query.callback(data);
                }
            };



            deviceService.getDevices().then(function(response){
                devices = response;
                elem.select2(select2Options).on('change', function(e){
                    scope.onChange({data: elem.data});
                });
            });


        }
    }
}]);