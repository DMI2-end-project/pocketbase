migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0dn87mn9ayg6zl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jepenjfa",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0dn87mn9ayg6zl")

  // remove
  collection.schema.removeField("jepenjfa")

  return dao.saveCollection(collection)
})
