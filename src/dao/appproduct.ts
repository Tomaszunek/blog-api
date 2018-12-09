import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.AppProduct
    .findAll({
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppProductImage },
      { model: db.AppProductModel },
      ]
    })
}


