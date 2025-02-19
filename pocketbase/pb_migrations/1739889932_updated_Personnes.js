/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK",
      "CA"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2663700287",
    "maxSelect": 1,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK"
    ]
  }))

  return app.save(collection)
})
