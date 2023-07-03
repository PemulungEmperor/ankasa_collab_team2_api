# Ankasa Ticketing

👋 Hello this is team 2 from Pijar Camp Batch 10

Here's API For Ankasa Ticketing 
You can access with this link => 
https://ankasa-collab-team2-d14k1exhj-pemulungemperor.vercel.app



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

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| | `string` | You can check all users from ur DB |

Execution : https://ankasa-collab-team2-d14k1exhj-pemulungemperor.vercel.app/users

#### Get specific user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Have Id of spesific user |

#### Login

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try login with valid credentials |

#### Register

```http
  POST /api/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try register to have an account |

#### Update user image

```http
  PUT /api/update-img/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Update your user image <= 2Mb sizes |

#### Update user

```http
  PUT /api/update/profile/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Use for update user info |

#### See all flight

```http
  GET /api/flight
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |Check all flight from ur DB |

#### add flight

```http
  POST /api/add-flight
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |Add flight to your DB |

#### edit flight

```http
  PUT /api/edit-flight/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id| `string` |Edit flight specific by id |

#### delete flight

```http
  DELETE /api/delete-flight/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id| `string` |Delete flight specific by id |

#### search flight

```http
  GET /api/search/{destination}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| destination| `string` |Search by destination flight code |





## Tech Stack

**Server:** Node, Express

