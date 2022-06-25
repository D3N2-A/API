# API
Learning to make a RESTfull API from scratch.


## API Reference

#### Get all articles

```http
  GET /articles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **NOT Required**. Your API key |

#### Get a specefic article

```http
  GET /articles/:articleName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleName`      | `string` | **Required**. Title of article to fetch |


#### Post article

```http
  POST /articles
```

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of article to post |
| `content`      | `string` | **Required**. Content of article to post |

![POST](https://raw.githubusercontent.com/D3N2-A/API/main/post.jpg)
>![POst](https://raw.githubusercontent.com/D3N2-A/API/main/req.jpg)
[Body-parser](https://www.npmjs.com/package/body-parser) is used to process post requests.  
Format : *x-www-form-urlencoded*


#### Delete all articles

```http
  DELETE /articles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **NOT Required**. Your API key |

#### Delete a specefic article

```http
  DELETE /articles/:articleName
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleName`      | `string` | **Required**. Title of article to fetch |

#### Update a specefic article (PUT)
Overwrites document
```http
  PUT /articles/:articleName
```
  | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleName`      | `string` | **Required**. Title of article to fetch |

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **NOT Required**. New Title |
| `content`      | `string` | **NOT Required**. New Content |

#### Update a specefic article (PATCH)
Only updates the specified key.
```http
  PATCH /articles/:articleName
```
  | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleName`      | `string` | **Required**. Title of article to fetch |
