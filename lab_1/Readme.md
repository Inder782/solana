## Introduction

First lab exercise of the course 

Things learnt in this section


- What is **Keypair** ?
    - A pair of **public key** and a **private key** is called a keypair.
    - **Public key** is the address you can share with anyone.
    - **Secret key is confidential** and access to it gives the access to your account as well 😈. So, its best to keep it always a secret.
 

- What is **Cryptography** ?
    - Study of **hiding information** is called cryptography. 🫡
    - ***Symmetric Cryptography*** → **Same key** when used to **encrypt or to decrypt** data is called symmetric cryptography ,as old as **Egyptians and Queen Elizabeth** time, pretty old.
        - Example → If **A encrypts a message using a key** , then **B needs the same key** to decrypt the message .
        - Pretty **speed** and **simple**.
    - ***Asymmetric Cryptography*** → It is also called **public key cryptography** and was developed in 1970’s. In this method each participant has a **public key and a private key.**
        - How it works 🛤️?
            - Consider two participants , **Alice and Bob**. 2️⃣
            - Alice want’s to send a Hi 🗨️ message to Bob , now Alice will convert the Hi to a numerical numbers and then encrypts it using algorithms.
            - When **Alice send’s this message to Bob**, suppose someone gets it , but he won’t be able to do anything because it will require the Bob private key to actually decrypt it and see what’s inside.
            - So when the message is received by Bob , he will use his private key to decrypt the message and to see what’s inside.
            - This provides security much better then the **symmetric cryptography**.
        - Use cases of Asymmetric cryptography
            - Bank card 💳
            - Websites 🌐
            - Electronic passport 📕
            - Messaging apps 💬

- 1️⃣Create a folder , let’s name it generate-keypair
- 2️⃣cd into the folder
- 3️⃣ make a basic node project and install typescript and the libraries
- 4️⃣you need **typescript**, **@solana/web3.js** ,**esrun** , **@solana-developers/helpers**
- 🏃Use the generate-keypair_1,generate-keypair_2,generate-keypair_3 to understand how these keypair are being created.

mkdir generate-keypair
cd generate-keypair
npm init-y
npm install typscript @solana/web3.js esrun @solana-developers/helpers
