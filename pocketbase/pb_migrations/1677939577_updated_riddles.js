migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3z8z5z6ntyncb5")

  collection.name = "riddle"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3z8z5z6ntyncb5")

  collection.name = "riddles"

  return dao.saveCollection(collection)
})
