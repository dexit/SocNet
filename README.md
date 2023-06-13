# ![banner](https://github.com/dexit/SocNet/assets/6205151/9a330b57-3359-4cba-8f0b-b5d4375d2339)



## Table of Contents

- [SocNet](#socnet)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Walkthrough Video](#walkthrough-video)
  - [Link](#link)
  - [Author](#author)
  - [License](#license)

## Description
Social network backend api implementation
#
## Installation

You can clone the git repository and run next command to use tha web application locally

Install all dependencies

```
  npm install
```

Seed the database

```
  npm run seed
```

Start the server

```
  npm run start
```
#
## Usage
In order to use the program you will need to clone the repository from GitHub provided in the link below.
** Users **
- POST - ```/api/user/```
 
Example JSON body to create User
``` 
[{
		"username": "testing_user",
		"email": "new_user@domain.tld"
}]
 ```
- GET - ```/api/user```
- GET - ```/api/user/:id```
- PUT - ``` /api/user/:id ```
- DELETE - ``` /api/user/:id  ```
 
** Friends **
- PUT - ```/api/user/:id/friends/:id```
- DELETE - ```/api/user/:id/friends/:id```
 
** Thoughts **
- POST - ```/api/thought```
- GET - ```/api/thought```
- GET - ```/api/thought/:id```
- PUT - ```/api/thought/:id```
- DELETE - ```/api/thought/:id ```
 
** Reactions **
- POST - ```/api/thought/:id/reactions```
- DELETE -  ```/api/thought/:id/reactions/:id```
#
## How to Contribute
For and suggestions or contributions you can reach me at my email address or you can clone to code and edit it the way it will suite you the best.
#
## Walkthrough Video



## Link
Link to repository:

https://github.com/dexit/socnet

#
## Author


- [Rihards](https://github.com/dexit)


## License

- This application is covered under: [GNU License](https://choosealicense.com/licenses/gnu-mit/)
