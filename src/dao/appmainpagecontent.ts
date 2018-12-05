import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.AppMainPageContent
    .findAll({
      include: [
        { model: db.AppContent, include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] }] },
        { model: db.AppProduct, include: [{ model: db.AppContentCategory, include: [{ model: db.AppCategory }] }] }
      ]
    })
}


