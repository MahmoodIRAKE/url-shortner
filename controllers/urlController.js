const getShortenUrl = async (req, res) => {
    
    try {

      res.status(200).send('ok');
    } catch (err) {
        res.status(404).send(err);
    }
  };
  module.exports = { getShortenUrl };