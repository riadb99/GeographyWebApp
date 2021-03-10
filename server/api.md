#API Documentation

##User
___

###Show All Users

Returns json data about all users
* **URL**

    /api/user


* **Method**

    `Get`


*  **URL Params**

   None


* **Data Params**

  None


* **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "_id": "6037e4eeaa6ade6fa621a55e",
          "firstName": "Jazz",
          "lastName": "Tingo",
          "email": "jazztingo009@gmail.com",
          "country": "Bhutan",
          "rank": null,
          "highscore": null,
          "__v": 0
      },
      {
          "_id": "60382d018174aa08be9dcb69",
          "firstName": "test",
          "lastName": "name2",
          "email": "testname2@gmail.com",
          "country": "Slovenia",
          "rank": null,
          "highscore": null,
          "__v": 0
      },


* **Error Response:**
    None
  
___

###Show One User 

Returns json data about a single user using email
* **URL**

  /api/user/:email


* **Method**
  
  `Get`


*  **URL Params**

   **Required:**
   `email=[string]`


* **Data Params**

  None


* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```
      {
          "_id": "6037e4eeaa6ade6fa621a55e",
          "firstName": "Jazz",
          "lastName": "Tingo",
          "email": "jazztingo009@gmail.com",
          "country": "Bhutan",
          "rank": null,
          "highscore": null,
          "__v": 0
      },

* **Error Response:**
    * **Code:** 404 Not Found <br />
      **Content:**
        ```
        "Error: null"
___

###Create User

Returns json data about a single user using email
* **URL**

  /api/user


* **Method**

  `Post`


*  **URL Params**

    None


* **Data Params**

  **Required:**
    ```
    { 
        "firstName": "John",
        "lastName": "Smith",
        "email": "JohnSmith12345@gmail.com",
        "country": "Bhutan",
        "rank": null,
        "highscore": null
    } 


* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```
      {
          "success": true,
          "message": "success",
          "user": {
              "_id": "60493268abe6d31b3a2ec55f",
              "firstName": "John",
              "lastName": "Smith",
              "email": "JohnSmith12345@gmail.com",
              "country": "Bhutan",
              "rank": null,
              "highscore": null,
              "__v": 0
          }
      }

* **Error Response:**
    * **Code:** 400 Not Found <br />
      **Content:**
        ```
        {
          "success": false
        }
___

###Delete User

Returns json data about a single user using email
* **URL**

  /api/user/:email


* **Method**

  `Delete`


*  **URL Params**

   **Required:**
   `email=[string]`


* **Data Params**

    None


* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```
      {
          "success": true,
          "message": "success",
          "user": [
            {
                  "_id": "604918d65a5a4610a67b2c90",
                  "firstName": "Test",
                  "lastName": "Post2",
                  "email": "post1234552@gmail.com",
                  "country": "Bhutan",
                  "rank": null,
                  "highscore": null,
                  "__v": 0
            }         
          ]
      }

* **Error Response:**
    * **Code:** 404 Not Found <br />
      **Content:**
        ```
        {
            "success": true,
            "message": "success",
            "user": []
        }
___
  
