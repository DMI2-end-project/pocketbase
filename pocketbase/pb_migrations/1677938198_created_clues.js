migrate((db) => {
  const collection = new Collection({
    "id": "5k3orzralvhwyug",
    "created": "2023-03-04 13:56:38.274Z",
    "updated": "2023-03-04 13:56:38.274Z",
    "name": "clues",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r3o6yexk",
        "name": "statement",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qhyc84gy",
        "name": "riddle",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "f3z8z5z6ntyncb5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("5k3orzralvhwyug");

  return dao.deleteCollection(collection);
})
