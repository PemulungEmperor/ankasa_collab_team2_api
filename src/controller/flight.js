// import form user models
const flightModel = require("../models/flight");
// const cloudinary = require("../utils/cloudinary");

const flightController = {
  allFlight: (req, res) => {
    flightModel
      .allFlight()
      .then((result) => {
        res.json(result.rows);
        console.log(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  allFlightCity: (req, res) => {
    const arrive_city = req.params.destination;
    flightModel
      .allFlightCity(arrive_city)
      .then((result) => {
        res.json(result.rows);
        console.log(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addFlight: async (req, res) => {
    const { airlines, transit_type, luggage, meal, wifi, departure, arrived, ticket_price, departure_date, arrive_date, departure_city, arrive_city } = req.body;

    // cloudinary service
    const result = await cloudinary.uploader.upload(req.file.path, { folder: "ankasa" });

    const data = {
      airlines,
      transit_type,
      luggage,
      meal,
      wifi,
      departure,
      arrived,
      ticket_price,
      departure_date,
      arrive_date,
      photoPath: result.secure_url,
      departure_city,
      arrive_city,
    };
    flightModel
      .addFlight(data)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  editFlight: async (req, res) => {
    const { airlines, transit_type, luggage, meal, wifi, departure, arrived, ticket_price, departure_date, arrive_date, departure_city, arrive_city } = req.body;
    const id = req.params.id;

    // cloudinary service
    const result = await cloudinary.uploader.upload(req.file.path, { folder: "ankasa" });

    const data = {
      id,
      airlines,
      transit_type,
      luggage,
      meal,
      wifi,
      departure,
      arrived,
      ticket_price,
      departure_date,
      arrive_date,
      photoPath: result.secure_url,
      departure_city,
      arrive_city,
    };
    flightModel
      .editFlight(data)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteFlight: (req, res) => {
    const id = req.params.id;
    flightModel
      .deleteFlight(id)
      .then((result) => {
        res.json({ message: "success deleted" });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = flightController;
