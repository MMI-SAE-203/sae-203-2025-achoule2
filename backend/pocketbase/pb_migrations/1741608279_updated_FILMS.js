/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date1278724480",
    "max": "",
    "min": "",
    "name": "date_projection",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4076779018")

  // remove field
  collection.fields.removeById("date1278724480")

  return app.save(collection)
})
