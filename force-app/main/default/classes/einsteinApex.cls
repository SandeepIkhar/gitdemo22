public class einsteinApex {
    public static List<Account> getTenRandomAccounts(){
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 10];
        return accounts;
    }
}trigger AccountTrigger on Account (before insert, before update) {
    if (Trigger.isBefore) {
        Map<String, Account> accountMap = new Map<String, Account>();
        for (Account acct : Trigger.new) {
            if (acct.Rating == 'Hot' && acct.Rating != null) {
                accountMap.put(acct.Id, acct);
            }
        }
        if (!accountMap.isEmpty()) {
            List<Account> existingAccounts = [SELECT Id, Name FROM Account WHERE Rating = 'Hot'];
            for (Account acct : Trigger.new) {
                if (accountMap.containsKey(acct.Id)) {
                    acct.addError('Cannot insert or update this record. Hot rating accounts are already full.');
                }
            }
        }
    }
}