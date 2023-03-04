migrate((db) => {
  const collection = new Collection({
    "id": "ndtj27jd16m7gaf",
    "created": "2023-03-04 13:29:33.461Z",
    "updated": "2023-03-04 13:29:33.461Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m49zplxk",
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
  const collection = dao.findCollectionByNameOrId("ndtj27jd16m7gaf");

  return dao.deleteCollection(collection);
})
