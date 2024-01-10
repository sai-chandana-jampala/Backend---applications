# CRYPTOGRAPHY--FULL-STACK-WEBDEVLOPMENT-PROJECT 

Secure File and Image Encryption/Decryption System
Welcome
##Welcome to the Secure File and Image Encryption/Decryption System! This application provides a secure way to encrypt and decrypt files and images using the AES-256-CFB encryption algorithm. It also includes user authentication and session management for a personalized experience.

---->Getting Started
---->Installation
1.Ensure you have Node.js and npm installed on your machine.
2.bash
3.Copy code
4.npm install

----->Database Setup
1.Create a PostgreSQL database named crypto and update the connection details in the app.js file:
2.javascript
Copy code
const db = new Client({
  user: "your_username",
  host: "localhost",
  database: "crypto",
  password: "your_password",
  port: 5432,
});


---->Run the Application
1.bash
2.Copy code
3.node app.js

-->The server will start at http://localhost:3000.

---->Features
User Authentication
Signup:

Visit /signup to create a new account.
Provide a unique username and a secure password.
Passwords are securely hashed using bcrypt before storage.
Login:

---->Access /login to log in with your credentials.
Uses bcrypt to compare and verify passwords.
File Encryption
File Encryption:

Visit /file-encryption to encrypt a file.
Upload a file and provide a password for encryption.
The encrypted file will be available for download.
File Decryption:

--->Visit /file-decryption to decrypt a file.
Upload the encrypted file and provide the decryption password.
The decrypted file will be available for download.
Image Encryption
Image Encryption:

--->Visit /image-encryption to encrypt an image.
Upload an image and provide a password for encryption.
The encrypted image will be available for download.
Image Decryption:

--->Visit /image-decryption to decrypt an image.
Upload the encrypted image and provide the decryption password.
The decrypted image will be available for download.
Additional Features
Session Management:

---->User sessions are managed using the express-session middleware.
After a successful login, the user is redirected to /dashboard.
Database Integration:

---->User information is stored in the PostgreSQL database.
Duplicate username prevention is implemented.
Important Notes
Security
Ensure that your database credentials and encryption keys are kept secure.
Use strong passwords for user accounts.
File Paths
Encrypted and decrypted files are stored in the encrypted_files and decrypted_files directories, respectively.
Download Links

---->The application provides download links for encrypted and decrypted files/images.
Contributions
----->Feel free to contribute to this project by submitting issues or pull requests. Your feedback is highly appreciated!


[![Watch the Video](https://github.com/sai-chandana-jampala/CRYPTOGRAPHY--FULL-STACK-WEBDEVLOPMENT-PROJECT/blob/main/project-working-video.mp4)

