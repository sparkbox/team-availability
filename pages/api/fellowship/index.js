import data from '../../../mock-data/fellowship.json';

const handler = (req, res) => {
  try {
    res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
};

export default handler;
