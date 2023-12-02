public with sharing class DemoContactController {
  @AuraEnabled(cacheable=true)
  public static list<contact> getContacts(){
     
    return [select id,firstname,lastname,phone,title,accountid,email from contact limit 15];
  }
}