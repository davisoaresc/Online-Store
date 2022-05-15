# Online Store

> Online Store is a full stack application where you can create a user, login, and enter an online store of monitors, in this store you can buy coins and make the purchase of the listed products, with each purchase you make you also acquire points that will depend on the product purchased

## 🛠️ Technologies and Tools used
#### Front-end
* React
* React Hooks
* Context API
* Javascript
* Bootstrap
* Fetch

#### Back-end
* Node.js
* Express.js
* Sequelize.js
* Mysql2
* Dotenv
* Jsonweb Token
* Jest
* Jest Mock
* Sequelize Mock
* Nodemon

## 💻 Prerequisites

This application uses [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/) to start it, so make sure that both tools are installed correctly on your computer.

## 🚀 Cloning the Project


Open your terminal and type the following commands:
```
git clone git@github.com:davisoaresc/Online-Store.git

cd Online-Store
```
## 🚀 Starting the Application
With the project cloned on your machine and inside the `Online-Store` directory, run the following docker compose command:

```
docker-compose up -d --build
```
Wait for the installation until the message `Connected on port 3001` appears in your terminal.

Open your `Google Chrome` browser and enter the following link:

[http://localhost:3000/login](http://localhost:3000/login)

Wait until the application starts.

#### Testing the application

The back-end of this application has unit tests for the Controllers. **To run them and check test coverage, follow these instructions:**

Navigate to the `server` directory
```
cd /backend
```
Install dependencies:
```
npm install
```
Start the tests
```
npm run test
```
## Author

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/davi-soares-coura/" target="_blank" rel="noopener noreferrer">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE-3zAXIVd3tw/profile-displayphoto-shrink_800_800/0/1633029711494?e=1658361600&v=beta&t=_AWbgG4037Bz6FOuIjnxSGL5ukkrivc7OsGIo6NuUCw" width="100px;" alt="Foto do Davi Soares"/><br>
        <sub>
          <b>Davi Soares Coura</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


