Restaurant API Module
This is my backend module for my project
CRUD Operations: Complete Create, Read, Update, and Delete for restaurants.
Database Modeling: Mongoose schema with built-in validation for fields like name, cuisine, price level, and rating.
File Uploads (Multer): Implemented image uploading . Users can upload a restaurant image which is saved locally.
How to Run the Project
1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file and add your `MONGO_URI` and `PORT`.
4. Run `npm run dev` to start the server using nodemon.
5. Create an `uploads` folder in the root directory if it doesn't exist.

Examples of API Usage
GET `/api/v1/restaurants` - Fetches a list of all restaurants.
GET `/api/v1/restaurants/:id` - Fetches a single restaurant by its ID.
POST `/api/v1/restaurants` - Creates a new restaurant. (Use Postman `form-data` to pass fields and an `image` file).
PATCH `/api/v1/restaurants/:id` - Updates an existing restaurant's details or image.
DELETE `/api/v1/restaurants/:id` - Removes a restaurant from the database.
Note:write for cuisine( 
         italian, mexican, egyptian, lebanese, syrian, chinese, indian, american, japanese, fast_food, other,)
and for priceLevels ["budget", "moderate", "expensive"],