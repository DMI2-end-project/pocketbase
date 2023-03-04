migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lz25cimhgljp1x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibzldl0p",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "ndtj27jd16m7gaf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6lz25cimhgljp1x")

  // remove
  collection.schema.removeField("ibzldl0p")

  return dao.saveCollection(collection)
})
