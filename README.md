# User List Test - React App

User List Test is React based web app to show all the users using API [https://reqres.in/](https://reqres.in/).

Built with:

- React v18
- Axios
- TailwindCSS

## Live Preview

[Preview](usersku.netlify.app)

## Api Endpoint Request

1. Login Request

   Api Endpoint

   ```bash
   https://reqres.in/api/login
   ```

   Body

   ```json
   {
     "email": "eve.holt@reqres.in",
     "password": "cityslicka"
   }
   ```

   Response

   ```json
   {
     "token": "QpwL5tke4Pnpja7X4"
   }
   ```

2. Users List Request

   Api Endpoint

   ```bash
   https://reqres.in/api/users?page=1
   ```

   Change `page` parameter for request pagination data with.

   Response

   ```json
   {
     "page": 1,
     "per_page": 6,
     "total": 12,
     "total_pages": 2,
     "data": [
       {
         "id": 1,
         "email": "george.bluth@reqres.in",
         "first_name": "George",
         "last_name": "Bluth",
         "avatar": "https://reqres.in/img/faces/1-image.jpg"
       },
       {
         "id": 2,
         "email": "janet.weaver@reqres.in",
         "first_name": "Janet",
         "last_name": "Weaver",
         "avatar": "https://reqres.in/img/faces/2-image.jpg"
       },
       {
         "id": 3,
         "email": "emma.wong@reqres.in",
         "first_name": "Emma",
         "last_name": "Wong",
         "avatar": "https://reqres.in/img/faces/3-image.jpg"
       },
       {
         "id": 4,
         "email": "eve.holt@reqres.in",
         "first_name": "Eve",
         "last_name": "Holt",
         "avatar": "https://reqres.in/img/faces/4-image.jpg"
       },
       {
         "id": 5,
         "email": "charles.morris@reqres.in",
         "first_name": "Charles",
         "last_name": "Morris",
         "avatar": "https://reqres.in/img/faces/5-image.jpg"
       },
       {
         "id": 6,
         "email": "tracey.ramos@reqres.in",
         "first_name": "Tracey",
         "last_name": "Ramos",
         "avatar": "https://reqres.in/img/faces/6-image.jpg"
       }
     ],
     "support": {
       "url": "https://reqres.in/#support-heading",
       "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
     }
   }
   ```

3. Get User Detail with id
   Api Endpoint

   ```bash
   https://reqres.in/api/users/2
   ```

   Response

   ```json
   {
     "data": {
       "id": 2,
       "email": "janet.weaver@reqres.in",
       "first_name": "Janet",
       "last_name": "Weaver",
       "avatar": "https://reqres.in/img/faces/2-image.jpg"
     },
     "support": {
       "url": "https://reqres.in/#support-heading",
       "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
     }
   }
   ```

## Features

- Login
- Logout
- Users list
- User detail

## Implementing routes

When clicking on the users link in the UI, notice that the URL changes to `/user/:id`.

Routes structure in `App.js`:

```javascript
<Router>
  <div
    className='App pb-6 bg-gradient-to-r
    from-indigo-600
    to-blue-400 min-h-screen h-full'>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='users' element={<Users />} />
      <Route path='users/:id' element={<UserDetail />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </div>
</Router>
```

## Stack

- React v18
- Axios
- TailwindCSS

This project implements basic of showing data from API with user login and error state handling.

In the project directory, you can run:

### Usage :

1. **Clone Repository**

```bash
git clone https://github.com/Roisfaozi/user-list-test.git
cd user-list-test
```

2. `npm install` the first time you clone this repo

```bash
npm install
```

3. `npm start` anytime you want to start developing. This will watch your JS files and re-run webpack when there are changes

```bash
npm start
```

4. Start coding!

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Author

- Facebook : [Rois Faozi](https://web.facebook.com/odjzykazama)
- LinkedIn : [Rois Faozi](https://www.linkedin.com/in/roisfaozi/)
- Website : [roisfaozi.com](https://www.roisfaozi.com/in/roisfaozi/)

## License

- Copyright © 2020 Rois Faozi.
- **Staycation is open-sourced software licensed under the MIT license.**
