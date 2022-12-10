const Book = require("../models/Book");
const moment = require("moment");
const addBooks = async (req, res) => {
  const obj = req.body;

  let today = moment();
  if (obj.publishedDate) {
    today = moment(obj.publishedDate, "YYYY-MM-DD");
  }
  const book = new Book({
    title: obj.title,
    author: obj.author,
    subject: obj.subject,

    publishedDate: today.toISOString(),
  });

  try {
    await book.save();
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { addBooks };
