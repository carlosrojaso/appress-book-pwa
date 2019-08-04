#!/bin/bash 
curl https://fcm.googleapis.com/fcm/send \
     -H "Content-Type: application/json" \
     -H "Authorization: key=AAAAMsEeQcM:APA91bHl-47s39Fzde_hYUDFz9tZ0dN672UdMChqpm24z4df8a-4NiiDpJmc0yv5s76iz--JPTSRDUGiAfXi-9BZDNQWtcDYS6Sljv9XIyQQTGWd2P7kSSQ6sMrvrV5pRmpzT0yeN7cS" \
     -d '{ "notification": {"title": "Push", "body": "This is a Foreground message.", "click_action" : "https://www.localhost.com"},"to" : "e4jebGnWuPw:APA91bHkSQYnPVw9NYjUmjDCc6BNgC9Z6yY4QEMsKBHvmgg11SNbtoZYqyj1kqZwokctIaXC_dkWhRJS4O6nFUnwClvJbn6MfFHmD429R3pTRofMwwv9dymMmn_4c-ky9hGquCaeBoGx"}'