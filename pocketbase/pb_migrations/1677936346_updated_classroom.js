migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0dn87mn9ayg6zl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g7iexg2d",
    "name": "students",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "d1i2gpddomc11cc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t0dn87mn9ayg6zl")

  // remove
  collection.schema.removeField("g7iexg2d")

  return dao.saveCollection(collection)
})
