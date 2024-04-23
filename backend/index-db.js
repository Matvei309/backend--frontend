const express = require("express")
// const pick = require("lodash/pick")

const router = express.Router()
const knex = require("knex")({
  client: "pg",
  connection: {
    host: 'localhost',
    port: process.env.DB_PORT || 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'Matvei0508',
  }
})

router.get('/', async (req, res) => {
  try {
    const catalog = await knex.raw(`SELECT * FROM catalog`)
    if (catalog.length === 0) {
      throw Error("No content")
    } else {
      res.json(catalog.rows)
  }
  } catch (err) {
    res.status(404).send(err.message)
  }
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const position = await knex
    .select()
    .table("catalog")
    .where({ id })
    .then((value) => value[0])
    if (position) {
      res.json(position)
    } else {
      throw Error(`Unknown user ID: ${id}`)
    }
  } catch (err) {
    res.status(404).send(err.message)
  }

})

module.exports = router
