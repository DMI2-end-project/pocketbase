migrate((db) => {
  const collection = new Collection({
    "id": "6lz25cimhgljp1x",
    "created": "2023-03-04 13:29:19.145Z",
    "updated": "2023-03-04 13:29:19.145Z",
    "name": "missions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lmtvzq0j",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("6lz25cimhgljp1x");

  return dao.deleteCollection(collection);
})
