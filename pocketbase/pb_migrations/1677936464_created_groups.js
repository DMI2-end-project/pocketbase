migrate((db) => {
  const collection = new Collection({
    "id": "586gqatrz3xpkr1",
    "created": "2023-03-04 13:27:44.466Z",
    "updated": "2023-03-04 13:27:44.466Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hwd1zrfx",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "d1i2gpddomc11cc",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("586gqatrz3xpkr1");

  return dao.deleteCollection(collection);
})
