const hello = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!"
  });
};

export default hello;
