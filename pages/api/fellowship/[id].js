import data from '../../../mock-data/fellowship.json';

const handler = (req, res) => {
  const { id } = req.query;

  try {
    const dataAsArray = Object.entries(data);
    const filteredArray = dataAsArray.filter((item) => item[0] === id);
    const filteredData = Object.fromEntries(filteredArray);

    res.status(200).send(filteredData);
  } catch (err) {
    throw new Error(err);
  }
};

export default handler;
