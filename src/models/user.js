const db = require("../config/db");
const bcrypt = require("bcrypt");
const { resolve } = require("path");

const userModel = {
  //all user
  selectAll: () => {
    const sql = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  // get userby id
  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  // sql register
  registerUser: ({ username, email, password }) => {
    const sql = `INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${password}')`;
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  // login model
  loginUser: ({ username, password }) => {
    const sql = `SELECT * FROM users WHERE username='${username}'`;
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        }

        if (result.length === 0) {
          reject("Invalid username or password");
        } else {
          const user = result.rows[0];
          if (user && user.password) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                reject(err);
              }
              if (isMatch) {
                resolve(user);
              } else {
                reject("Invalid username or password");
              }
            });
          } else {
            reject("Invalid username or password");
          }
        }
      });
    });
  },

  updateProfileImg: ({ id, photoPath }) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users SET photo_path='${photoPath}' WHERE id=${id}`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  updateProfile: ({ id, username, email, phone_number, city, address, post_code }) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users SET username='${username}', email='${email}', phone_number='${phone_number}', city='${city}',address='${address}', post_code='${post_code}' WHERE id=${id}`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};

module.exports = userModel;
