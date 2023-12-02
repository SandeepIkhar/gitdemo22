public with sharing class whatsappController {
    @AuraEnabled
    public static Boolean sendTemplateMessage (string contactId){
        Contact  contactDetail=[select id,phone from contact where Id=:contactId];

        string whatsAppNumber = '91'+contactDetail.phone;

        Http http= new Http();
        HttpRequest req= new HttpRequest();
        req.setEndpoint('https://graph.facebook.com/v17.0/102082479588375/messages');  ////add phone Id
        req.setHeader('Content-Type','application/json');
        req.setMethod('POST');
        string body='{ "messaging_product": "whatsapp", "to":"'+WhatsappNumber+'", "type":"template", "template":{"name":"hello_world", "language":{"code":"en_US"}}}'; // add template name
        req.setBody(body);     
       //string apiToken='EAACkHO7wUYwBAIOu57sUW1mpBbmi9DGWeJ5muHNNAsdC5IkR3Fd2GmPqIipZAGwVZAZCEmTaDh0jpAjvtavNAXmQOVxSx03YuxLimYrp7BdMEYZC7yUV4Rz1tqa3mzusqF0ESFbjrLMOJBoQuZCagkwKJgrkxOFoiaazP9KzjZAEWFPDbMBLiH4cbW6v2Ww1Ngdqlx7s5r7QZDZD';
      string apiToken='EAALuZAZC9ZBkfYBOw1TlKpWuS4fGHYx1yIXP051XCAUvdquzjZBl9V40JbQ0MYHN1fwWFk2zgm1S7jnmYpI43ZCRWqk7yqkm87H2ErkllDL82KVTrrRhQ4EjeGU1VS9E4ZBn4pt8wr9esuGCgIojKWZB9484o58mhZBCixbSV5GUgbk2ZAhE2qCxBOkNC8sGJL67ZAoVqot9ZBWU8sWbwwLl9UZD';
       
        req.setHeader('Authorization', 'Bearer ' +apiToken); 
        HttpResponse res=http.send(req);
        if(res.getStatusCode()==200){
            return true;
        }
        return false;
    }
}