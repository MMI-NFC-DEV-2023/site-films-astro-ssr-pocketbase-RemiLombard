/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update collection data
  unmarshal({
    "createRule": "",
    "updateRule": "@request.auth.id =\"\""
  }, collection)

  return app.save(collection)
})
