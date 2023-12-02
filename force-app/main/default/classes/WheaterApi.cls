public with sharing class WheaterApi {
   @AuraEnabled
   public static string getWheater(string city){
        http http=new http();
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:WheaterApi/current.json?q='+city);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        return response.getBody();
   }
}