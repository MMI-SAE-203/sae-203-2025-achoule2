/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // update collection data
  unmarshal({
    "name": "films"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // update collection data
  unmarshal({
    "name": "FILMS"
  }, collection)

  return app.save(collection)
})
