#### Kaya Makeup Studio
<br>
Kaya Makeup Studio is a website with an appointment booking feature created for a fictional small makeup studio. The website features a secure user registration system, allowing customers to create personalized accounts. With their accounts, customers can conveniently book appointments with their preferred makeup artists and manage their bookings. The website provides an intuitive interface for browsing available time slots and selecting the desired services. Additionally, users can easily view and modify their appointments, ensuring a seamless experience. Overall, this project aims to streamline the booking process and enhance customer satisfaction for the makeup studio.


<div align="center"> 
  <img src="./assets/images/Screens%20-presentation.png" alt="screenshot" />
</div>

This README file includes instructions to rum both repositories:
- kaya-makeup-studio-client
- kaya-makeup-studio-server

#### Tech Stack :

1. Client:
    - React JS
    - SASS
    - AXIOS
2. Server:
    - Node/Express
    - bcrypt
    - JWT
3. Database:
    - Knex/MySQL
4. External libraries:
    - MUI ( Date Calendar Component)
    - Swiper


Installation:

You will need to install node, npm and MySQL before starting a project.

1. Clone or download both of repositories.
   ```bash
    git clone https://github.com/KatKowalik/kaya-makeup-studio-client.git
    ```
     ```bash
    git clone https://github.com/KatKowalik/kaya-makeup-studio-server.git
    ```

2. Create a new database in MySQL.
   
#### Set up back-end

1. Install server dependencies:  
   
   Run `npm install` from inside the server directory.
   ```bash    
   $ cd kaya-makeup-artist-server
   $ npm install
   ```
2. Run migrations
   ```bash
   $ npm run migrate
   ```
3. Run seeds
   ```bash
   $ npm run seed
   ```
4. Set environment variables:  
   
   Rename `.env_sample` to `.env` and change placeholder values with your own.
   ```shell
   PORT=8080
    DB_HOST=127.0.0.1
    DB_LOCAL_DBNAME=<YOUR_LOCAL_DB_NAME>
    DB_LOCAL_USER=<YOUR_LOCAL_DB_USERNAME>
    DB_LOCAL_PASSWORD=<YOUR_LOCAL_DB_PASSWORD>

    SECRET_KEY=<YOUR_SECRET_KEY>    
   ```
5. Start the server:
   ```bash
   $ node index.js
   ```

#### Set up front-end

1. Install dependencies.
   Run `npm install` from inside the client directory.
   ```bash    
   $ cd kaya-makeup-artist-client
   $ npm install
   ```
2. Start the React app:
    ```bash
    $ npm start
    ```

#### Contact 

Kat => https://www.linkedin.com/in/kat-kowalik/