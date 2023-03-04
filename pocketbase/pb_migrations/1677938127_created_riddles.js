migrate((db) => {
  const collection = new Collection({
    "id": "f3z8z5z6ntyncb5",
    "created": "2023-03-04 13:55:27.463Z",
    "updated": "2023-03-04 13:55:27.463Z",
    "name": "riddles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nzpudgix",
        "name": "statement",
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
  const collection = dao.findCollectionByNameOrId("f3z8z5z6ntyncb5");

  return dao.deleteCollection(collection);
})
