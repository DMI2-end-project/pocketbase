migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dtcwzespiyr5w2d")

  // remove
  collection.schema.removeField("jjepivov")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dtcwzespiyr5w2d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjepivov",
    "name": "type",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "pzqevshq2xxbmak",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
