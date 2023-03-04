migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocivoeql",
    "name": "missions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6lz25cimhgljp1x",
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

  // remove
  collection.schema.removeField("ocivoeql")

  return dao.saveCollection(collection)
})
