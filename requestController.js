let requests = [];

const createRequest = (req, res) => {
  const request = req.body;

  requests.push(request);

  res.json({
    message: "Repair Request Sent Successfully",
    request
  });
};

const getRequests = (req, res) => {
  res.json({
    requests
  });
};

module.exports = {
  createRequest,
  getRequests
};