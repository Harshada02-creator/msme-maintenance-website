let companies = [];

const addCompany = (req, res) => {
  const company = req.body;

  companies.push(company);

  res.json({
    message: "Company Details Saved",
    company
  });
};

module.exports = {
  addCompany
};