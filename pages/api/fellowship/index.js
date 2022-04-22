import data from '../../../mock-data/fellowship.json';

const handler = (req, res) => {
  res.status(200).send(data);
};

export default handler;
