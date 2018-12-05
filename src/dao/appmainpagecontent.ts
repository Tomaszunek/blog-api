import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.MainPageContent
    .findAll({
      include: [
        { model: db.Product },
        { model: db.Content }
      ]
    })
}


