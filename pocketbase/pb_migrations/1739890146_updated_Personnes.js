/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 4,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "scenariste",
      "realisateur",
      "producteur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "scenariste",
      "realisateur",
      "producteur"
    ]
  }))

  return app.save(collection)
})
