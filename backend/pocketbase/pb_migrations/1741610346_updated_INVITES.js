/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2909334428")

  // update collection data
  unmarshal({
    "name": "invites"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2909334428")

  // update collection data
  unmarshal({
    "name": "INVITES"
  }, collection)

  return app.save(collection)
})
