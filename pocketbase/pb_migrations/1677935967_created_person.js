migrate((db) => {
  const collection = new Collection({
    "id": "d1i2gpddomc11cc",
    "created": "2023-03-04 13:19:27.751Z",
    "updated": "2023-03-04 13:19:27.751Z",
    "name": "person",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tjqxeulu",
        "name": "firstname",
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
        "id": "2hlpzzni",
        "name": "lastname",
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
        "id": "mf59xzyt",
        "name": "school",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": true
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d1i2gpddomc11cc");

  return dao.deleteCollection(collection);
})
