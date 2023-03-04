migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lz25cimhgljp1x")

  collection.name = "mission"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lz25cimhgljp1x")

  collection.name = "missions"

  return dao.saveCollection(collection)
})
