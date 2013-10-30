Application.Directives.directive('countrySelector', ['countryService', function(countryService){
    return {
        restrict: 'A',
        scope:{
            ngModel: "="
        },
        link: function(scope, element, attrs){
            var elem = $(element);

            var countries;

            var select2Options = {
                minimumInputLength: 1,
                placeholder: "Select a Country",
                multiple: true,
                query: function(query){
                    var data = {results: []};

                    // BOOTSTRAP ALL INTO IT

                    data.results.push({
                        id: 0,
                        text: 'All Countries'
                    });

                    for(var i = 1; i < countries.length; i++){
                        if(countries[i].name.toLowerCase().indexOf(query.term) !== -1 || countries[i]["alpha-2"].toLowerCase().indexOf(query.term) !== -1){
                            data.results.push({
                                id: countries[i]["alpha-2"],
                                text: countries[i].name
                            });
                        }
                    }
                    query.callback(data);
                }
            };

            countryService.getCountries().then(function(response){
                countries = response;
                elem.select2(select2Options);

                elem.select2().on('change', function(e){

                    scope.onChange({data: elem.select2("data")});

                });
            });


        }
    }
}]);