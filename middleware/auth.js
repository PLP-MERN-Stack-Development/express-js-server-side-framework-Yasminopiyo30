const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === "yasmin-secret-key-2025") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized – missing or wrong API key" });
  }
};
module.exports = auth;