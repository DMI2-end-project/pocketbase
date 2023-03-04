migrate((db) => {
  const collection = new Collection({
    "id": "544xdaeimweqo20",
    "created": "2023-03-04 14:24:04.288Z",
    "updated": "2023-03-04 14:24:04.288Z",
    "name": "page",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "by2eub4y",
        "name": "template",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ejqegxqb",
        "name": "texts",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "raawqpfl",
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
      },
      {
        "system": false,
        "id": "fd8xsvtc",
        "name": "stickers",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("544xdaeimweqo20");

  return dao.deleteCollection(collection);
})
