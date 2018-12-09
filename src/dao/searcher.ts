import db from '../sqlz/models/_index'

export function searchContent(searchParams: any): Promise<any> {

  const articles = db.AppContent.findAll({
    where: {
      type: searchParams.type,
      articleType: searchParams.articleType
    },
    attributes: ['id', 'name', 'slug', 'articleType', 'image', 'type'],
    include: [{
      model: db.AppContentCategory, attributes: ['id'],
      include: [{
        model: db.AppCategory,
        attributes: ['type', 'name'],
        where: {
          $or: searchParams.categoryNames
        }      
},
      ]
    },
    { model: db.AppContentImage },
    { model: db.AppContentModel },
    ]
  })

  const projects = db.AppProduct.findAll({
    where: { productType: searchParams.type },
    attributes: ['id', 'name', 'slug', 'productType', 'image'],
    include: [{
      model: db.AppContentCategory, attributes: ['id'],
      include: [{
        model: db.AppCategory,
        attributes: ['type', 'name'],
        where: {
          $or: searchParams.categoryNames
        }      
},
      ]
    },
    { model: db.AppProductImage },
    { model: db.AppProductModel },
    ]
  })
  return Promise.all([articles, projects])
    .then((res) => {
      const returnJson = {}
      if (searchParams.findType.indexOf('articles') > -1 && res[0].length) {
        returnJson['articles'] = res[0]
      }
      if (searchParams.findType.indexOf('products') > -1 && res[1].length) {
        returnJson['products'] = res[1]
      }
      return returnJson
    }).catch(err => console.log(err))
}


