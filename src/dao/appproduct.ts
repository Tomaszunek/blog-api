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

export function findSingleBySlug(slug: string): Promise<any> {
  return db.AppProduct
    .findOne({
      where: { slug: slug },
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppProductImage },
      { model: db.AppProductModel },
      ]
    })
}



