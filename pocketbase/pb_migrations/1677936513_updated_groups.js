migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwd1zrfx",
    "name": "students",
    "type": "relation",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwd1zrfx",
    "name": "field",
    "type": "relation",
    "required": false,
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
})
