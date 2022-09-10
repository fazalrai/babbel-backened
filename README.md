# Babbel Assessment Api

## Local Development (Mac OS / Ubuntu)

 - Node version 10

**System Level Dependencies:**

 - PostgreSQL  14.3

**Project Level Dependencies**

 - npm install

**Set enviornment variables value:**

Set enviornment variables mentioned in .env.example

**Setting up the Database and local server**

 - npm start

# Requirements which are not implemented due to lack of time**
## Since it was mentioned on instructions to not spend more then 1 hours so following things are not implemented

1. Currently I am saving password in DB as it is coming from from request but I have to encrypt the password using "bcrypt" packing and then save ecnrcypted password.
2. Since Login was not mentioned but if needed implemented I will use JWT for it.
3. Needs to Implement Course CRUD module same like as I implemented account, lesson and language modules, along with additional authorization checks that only target user can modify the course. 
4. If we add Login functionality then I must implement authorization like user must be valid user for making CRUD operation.
5. Needs to change some directory structure like order them like api/v1/controller
6. Currently I am not implementing image functionality, but I can Implement it using "multer" npm package which I found one of the best package for saving images locally in node.js.
7. Forgot to implement PATCH functionality, realised this thing later.
8. Need to write test cases using Mocka and Jest library


# API Endpoints for User Account Only

## User-Account:
### Create-Account
Method: `POST`
url:  `/user/create-account`
Parameters:
    {
        "first_name": "xyz",
        "last_name": "xyz",
        "username": "xyz",
        "password": "xyz",
        "profile_picture": "xyz"
    }

### Update-Account
Method: `PUT`
url:  `/user/:user_id`
Parameters:
    {
        "first_name": "xyz",
        "last_name": "xyz",
        "username": "xyz",
        "password": "xyz",
    }

### Replace-Profile-Picture
Method: `PATCH`
url:  `/replace-picture/:user_id`
Parameters:
    {
        "profile_picture": "xyz"
    }

### DELETE-Account
Method: `DELETE`
url:  `/user/:user_id`

### GET-Account
Method: `GET`
url:  `/user/:user_id`

