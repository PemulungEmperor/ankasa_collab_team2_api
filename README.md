# Ankasa Ticketing API

👋 Hello this is team 2 from Pijar Camp Batch 10

Here's API For Ankasa Ticketing (see what ankasa ticketing from ankasa-ticketing repo in this account)
You can access with this link :
https://ankasa-collab-team2-api.vercel.app/

## Technologies

- [![AGPL License](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- [![AGPL License](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- [![AGPL License](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

If you clone this repo don't forget to install node modules / packages inside the project :

```
  npm install
```

And to run this project use

```bash
  npm run start
```


## API Reference

#### Get all users 📄

```
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| | `string` | You can check all users from ur DB |

Execution : https://ankasa-collab-team2-api.vercel.app/users

#### Get specific user

```
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Have Id of spesific user |

#### Login

```
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try login with valid credentials |

#### Register

```
  POST /api/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try register to have an account |

#### Update user image

```
  PUT /api/update-img/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Update your user image <= 2Mb sizes |

#### Update user

```
  PUT /api/update/profile/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Use for update user info |

#### See all flight

```
  GET /api/flight
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |Check all flight from ur DB |

#### add flight

```
  POST /api/add-flight
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |Add flight to your DB |

#### edit flight

```
  PUT /api/edit-flight/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id| `string` |Edit flight specific by id |

#### delete flight

```
  DELETE /api/delete-flight/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id| `string` |Delete flight specific by id |

#### search flight

```
  GET /api/search/{destination}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| destination| `string` |Search by destination flight code |



## Tech Stack

**Server:** Node, Express

