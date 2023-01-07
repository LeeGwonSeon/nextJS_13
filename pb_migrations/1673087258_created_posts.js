migrate((db) => {
  const collection = new Collection({
    "id": "7w85sglw3umzw1k",
    "created": "2023-01-07 10:27:38.925Z",
    "updated": "2023-01-07 10:27:38.925Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pkytkmqy",
        "name": "title",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("7w85sglw3umzw1k");

  return dao.deleteCollection(collection);
})
