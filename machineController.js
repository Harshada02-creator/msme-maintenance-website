let machines = [];

const addMachine = (req, res) => {
  const machine = req.body;

  machines.push(machine);

  res.json({
    message: "Machine Added Successfully",
    machine
  });
};

const getMachines = (req, res) => {
  res.json({
    machines
  });
};

module.exports = {
  addMachine,
  getMachines
};