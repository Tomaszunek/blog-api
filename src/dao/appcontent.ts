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

export function findByType(type: string): Promise<any> {
  return db.AppContent
    .findAll({
      where: { type: type },
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppContentImage },
      { model: db.AppContentModel },
      ]
    })
}

export function findByArticleType(articleType: string): Promise<any> {
  return db.AppContent
    .findAll({
      where: { articleType: articleType },
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppContentImage },
      { model: db.AppContentModel },
      ]
    })
}

export function findSingleBySlug(slug: string): Promise<any> {
  return db.AppContent
    .findOne({
      where: { slug: slug },
      include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] },
      { model: db.AppContentImage },
      { model: db.AppContentModel },
      ]
    })
}