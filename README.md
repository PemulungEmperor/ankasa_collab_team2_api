Ankasa Ticketing

👋 Hello this is team 2 from Pijar Camp Batch 10

Here's API For Ankasa Ticketing 
You can access in here => 
vercel_link = https://ankasa-collab-team2-express-37ivrc4w0-pemulungemperor.vercel.app/ 


## API Reference

#### Get all users

```http
  GET /{vercel_link/users}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get specific user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

