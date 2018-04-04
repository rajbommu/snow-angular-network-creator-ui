(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    try {
        var apiKey = "2f301bccd61b6c642d250cd3f76e5eb66ebd170f"; // Sandbox, hard coded for dev
        var baseUrl = "https://api.meraki.com/api/v0"; // Hard coded shard number
        var path = request.pathParams;
        // https://dashboard.meraki.com/api/v0/organizations/{{organizationId}}/inventory
        var url = baseUrl + "/organizations/" + path.organizationId + '/inventory';
        

        // API call options
        var req = new sn_ws.RESTMessageV2();
        req.setHttpMethod("get");  
        req.setRequestHeader("X-Cisco-Meraki-API-Key", apiKey);
        req.setRequestHeader("Content-Type", "application/json");
        req.setEndpoint(url); 

        // Call API
        var res = req.execute();

        // Response data
        var httpStatus = res.getStatusCode(); // FYI
        var httpResponseContentType = res.getHeader('Content-Type');
        var resBody = res.getBody();

        // Check if body is JSON or a string
        var resBodyFinal;
        try { 
            var parsedBody = JSON.parse(resBody);
            resBodyFinal = parsedBody;
        } catch (ex) { 
            resBodyFinal = resBody;
        }

        return resBodyFinal;

    }
    catch (ex) {
        // handle error
        return ex;
    }
})(request, response);