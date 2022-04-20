const data = {
  fetchDetails: async (id) => {
    try {
      const response = await fetch('mock-data/fellowship.json');
      const json = await response.json();
      return json[id];
    } catch (err) {
      throw new Error(err);
    }
  },
  fetchRoster: async () => {
    try {
      const response = await fetch('mock-data/fellowship.json');
      const json = await response.json();
      return json;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default data;
