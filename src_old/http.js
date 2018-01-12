function HttpWrapper(BASE_URL, $resource) {

    var service = {};
        
    service.get = function(endpoint, query, options) {
        return $resource(BASE_URL + endpoint, options)
                .get(query)
                .$promise.then(
                    function(response) {
                        return response;
                    }
                );
    };

    service.query = function(endpoint, query, options) {
        return $resource(BASE_URL + endpoint, options)
                .query(query)
                .$promise.then(
                    function(response) {
                        return response;
                    }
                );
    };

    return service;
}

HttpWrapper.$inject = ['BASE_URL', '$resource'];
app.factory('HttpWrapper', HttpWrapper);