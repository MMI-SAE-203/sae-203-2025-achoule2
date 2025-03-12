/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // remove field
  collection.fields.removeById("relation3353481431")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3353481431",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
