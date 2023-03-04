migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8bm71miv",
    "name": "clues",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5k3orzralvhwyug",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w9skfabl",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sn29kirf",
    "name": "week",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dtcwzespiyr5w2d",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1")

  // remove
  collection.schema.removeField("8bm71miv")

  // remove
  collection.schema.removeField("w9skfabl")

  // remove
  collection.schema.removeField("sn29kirf")

  return dao.saveCollection(collection)
})
