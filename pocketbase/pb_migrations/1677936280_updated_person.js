migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1i2gpddomc11cc")

  // remove
  collection.schema.removeField("mf59xzyt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1i2gpddomc11cc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mf59xzyt",
    "name": "school",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
