import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.AppContent
    .findAll({
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppContentImage },
      { model: db.AppContentModel },
      ]
    })
}


