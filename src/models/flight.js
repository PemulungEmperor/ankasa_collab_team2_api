const db = require("../config/db");

const flightModel = {

    allFlight: () => {
        const sql = `SELECT * FROM flight_data`
        return new Promise((resolve, reject) => {
          db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          });
        });
      },

      // search flight by city
      allFlightCity: (arrive_city) => {
        const sql = `SELECT * FROM flight_data WHERE arrive_city ilike '%${arrive_city}%'`
        return new Promise((resolve, reject) => {
          db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          });
        });
      },

      addFlight: ({airlines,transit_type,luggage,meal,wifi,departure,arrived,ticket_price,departure_date,arrive_date,photoPath, departure_city, arrive_city}) => {
        const sql = `INSERT INTO flight_data (airlines, transit_type, luggage, meal, wifi, departure, arrived, ticket_price, departure_date, arrive_date, photo_path, departure_city, arrive_city) VALUES ('${airlines}', '${transit_type}', '${luggage}', '${meal}', '${wifi}', '${departure}', '${arrived}', ${ticket_price}, '${departure_date}', '${arrive_date}', '${photoPath}', '${departure_city}', '${arrive_city}')`
        return new Promise((resolve, reject) => {
          db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          });
        });
      },

      editFlight: ({id, airlines,transit_type,luggage,meal,wifi,departure,arrived,ticket_price,departure_date,arrive_date,photoPath, departure_city, arrive_city}) => {
        const sql = `UPDATE flight_data SET airlines = '${airlines}', transit_type='${transit_type}', luggage='${luggage}', meal ='${meal}', wifi='${wifi}', departure = '${departure}', arrived='${arrived}', ticket_price=${ticket_price}, departure_date='${departure_date}', arrive_date='${arrive_date}', photo_path ='${photoPath}', departure_city='${departure_city}', arrive_city='${arrive_city}' WHERE id=${id}`
        return new Promise((resolve, reject) => {
          db.query(sql, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          });
        });
      },

      deleteFlight: (id) =>{
        const sql = `DELETE FROM flight_data WHERE id =${id}`
        return new Promise((resolve, reject) => {
          db.query(sql, (err, result)=>{
            if(err){
              reject(err)
            }
            resolve(result)
          })
        })
      }
}

module.exports= flightModel