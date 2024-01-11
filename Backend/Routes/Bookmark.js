const {
  createBookmark,
  getBookmark,
  deleteBookmark,
  updateBookmark,
} = require("../Controller/Bookmark");

const routes = require("express").Router();

routes.post("/createBookmark", createBookmark);
routes.get("/getBookmark", getBookmark);
routes.patch("/updateBookmark", updateBookmark);
routes.delete("/deleteBookmark", deleteBookmark);

module.exports = routes;
