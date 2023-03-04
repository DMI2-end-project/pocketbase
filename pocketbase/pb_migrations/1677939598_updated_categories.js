migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndtj27jd16m7gaf")

  collection.name = "category"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndtj27jd16m7gaf")

  collection.name = "categories"

  return dao.saveCollection(collection)
})
