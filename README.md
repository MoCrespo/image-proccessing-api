# image-proccessing-api

image-processing-API is an API for resizing an image by getting image-file-name and width and height


## Authors

- [@mocrespo](https://www.github.com/mocrespo)



## Installation

Install image-proccessing-api with npm

```bash
  npm install 
  
```
    

## Run Locally

Clone the project

```bash
  git clone https://github.com/MoCrespo/image-proccessing-api.git
```

Go to the project directory

```bash
  cd image-proccessing-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
  or 
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## To build 
To build image-proccessing-api for deployment
```bash
  npm run build
```


## API Reference

#### Get exist image

```http
  GET /api/images?filename=
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :-------------------------                     |
| `api_key` | `string` | **Required**. Your API key with image filename |

#### Get image with resizing

```http
  GET /api/images?filename=&width=&height=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filename`|     | `string`  | **Required**. filename of image to fetch |
| `width`   |     | `number`  | **Required**.  width of image to resize  |
| `height`  |     | `number`  | **Required**. height of image to resize  |




