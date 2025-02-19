/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation3791634994",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "scenaristes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("relation2128342544")

  // remove field
  collection.fields.removeById("relation3791634994")

  return app.save(collection)
})
