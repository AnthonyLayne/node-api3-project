//logs to the console the following information about each request: request method, request url, and a timestamp
//- this middleware runs on every request made to the API

const USER = require("../users/users-model");

function logger(req, res, next) {
  // DO YOUR MAGIC
  const method = req.method;
  const request = req.originalUrl;
  const timestamp = new Date().toLocaleString();
  console.log(` [${timestamp}] ${method} to ${request} `);
  next();
}

/**- this middleware will be used for all user endpoints that include an `id` parameter in the url (ex: `/api/users/:id` and it should check the database to make sure there is a user with that id.
  - if the `id` parameter is valid, store the user object as `req.user` and allow the request to continue
  - if the `id` parameter does not match any user id in the database, respond with status `404` and `{ message: "user not found" }` */

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await USER.getById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: "could not find user",
    });
  }
}

/**- `validateUser` validates the `body` on a request to create or update a user
  - if the request `body` lacks the required `name` field, respond with status `400` and `{ message: "missing required name field" }`

 */

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log(validateUser);
  next();
}

/**- `validatePost()`

  - `validatePost` validates the `body` on a request to create a new post
  - if the request `body` lacks the required `text` field, respond with status `400` and `{ message: "missing required text field" }` */

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log(validatePost);
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validatePost,
  validateUser,
  validateUserId,
};
