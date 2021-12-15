const index = (req, res) => {
  res.send({ message: "Server index endpoint" });
};

module.exports = {
  index,
};
