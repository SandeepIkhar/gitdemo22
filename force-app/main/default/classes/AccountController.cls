public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone FROM Account];
    }

    @AuraEnabled
    public static void createAccount(String name, String phone) {
        Account newAccount = new Account(Name = name, Phone = phone);
        insert newAccount;
    }

    @AuraEnabled
    public static void deleteAccount(String accountId) {
        Account accountToDelete = [SELECT Id FROM Account WHERE Id = :accountId LIMIT 1];
        delete accountToDelete;
    }
    /*********************************************************** */
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchTerm) {
        String query = 'SELECT Id, Name FROM Account WHERE Name LIKE \'%' + searchTerm + '%\' LIMIT 10';
        return Database.query(query);
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(String accountId) {
        // Implement your related contacts retrieval logic here
        return [SELECT Id, LastName FROM Contact WHERE AccountId = :accountId];
    }
 /*********************************** */
 @AuraEnabled(cacheable=true)
 public static List<Account> getAccountRecords() {
     return [SELECT Id, Name, Industry, Phone, Website FROM Account LIMIT 10];
 }

 @AuraEnabled
 public static void updateAccount(list<Account> updatedAccount) {
     update updatedAccount;
 }
}
