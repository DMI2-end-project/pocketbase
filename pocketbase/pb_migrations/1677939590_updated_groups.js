migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  collection.name = "group"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  collection.name = "groups"

  return dao.saveCollection(collection)
})
