import Sequelize from "sequelize";
import { db } from "../config/db.js";

const Curd = db.define("tests", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

export default Curd;
