migrate((db) => {
  const collection = new Collection({
    "id": "t0dn87mn9ayg6zl",
    "created": "2023-03-04 13:24:20.099Z",
    "updated": "2023-03-04 13:24:20.099Z",
    "name": "classroom",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cxlonqk7",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "d1i2gpddomc11cc",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "f1vc8cdg",
        "name": "school",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t0dn87mn9ayg6zl");

  return dao.deleteCollection(collection);
})
