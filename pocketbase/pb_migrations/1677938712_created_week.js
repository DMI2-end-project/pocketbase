migrate((db) => {
  const collection = new Collection({
    "id": "dtcwzespiyr5w2d",
    "created": "2023-03-04 14:05:12.241Z",
    "updated": "2023-03-04 14:05:12.241Z",
    "name": "week",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vlf13yn2",
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
  const collection = dao.findCollectionByNameOrId("dtcwzespiyr5w2d");

  return dao.deleteCollection(collection);
})
