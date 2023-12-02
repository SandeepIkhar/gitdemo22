public with sharing class mycontroller {
    @AuraEnabled
    public static void  getAccounts( string name,string industry) {
        Account newAccount = new Account();
        newAccount.Name = name;
        newAccount.Industry = industry;
        insert newAccount;

          
    }
}