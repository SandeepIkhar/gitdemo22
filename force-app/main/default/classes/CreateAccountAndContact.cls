public with sharing class CreateAccountAndContact {
    @AuraEnabled
   public static Account createAccount(String accountName) {
       Account newAccount = new Account(Name = accountName);
       insert newAccount;
       return newAccount;
   }
   @AuraEnabled
   public static Contact createContact(String contactName, Id accountId) {
       Contact newContact = new Contact(
           FirstName = contactName,
           LastName = 'Last Name', // Set as needed
           AccountId = accountId
       );
       insert newContact;
       return newContact;
   }
}