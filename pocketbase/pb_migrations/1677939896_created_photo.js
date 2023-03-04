migrate((db) => {
  const collection = new Collection({
    "id": "madpzxfignxorhw",
    "created": "2023-03-04 14:24:56.662Z",
    "updated": "2023-03-04 14:24:56.662Z",
    "name": "photo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rennkgdk",
        "name": "week",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "dtcwzespiyr5w2d",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "gdrwwhrn",
        "name": "page",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "544xdaeimweqo20",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "5ghy3ktb",
        "name": "slot",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("madpzxfignxorhw");

  return dao.deleteCollection(collection);
})
