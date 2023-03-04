migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pzqevshq2xxbmak");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pzqevshq2xxbmak",
    "created": "2023-03-04 14:04:06.838Z",
    "updated": "2023-03-04 14:04:06.838Z",
    "name": "week_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ghcs2rrf",
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
})
