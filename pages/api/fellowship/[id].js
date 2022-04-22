import data from '../../../mock-data/fellowship.json';

const handler = (req, res) => {
  const { id } = req.query;

  const dataAsArray = Object.entries(data);
  const filteredArray = dataAsArray.filter(([key]) => key === id);
  const filteredData = Object.fromEntries(filteredArray);

  res.status(200).send(filteredData);
};

export default handler;
