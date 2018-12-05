import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.Content
    .findAll({
      include: [
        { model: db.ContentCategory },
        { model: db.ContentImage },
        { model: db.ContentModel }
      ]
    })
}


