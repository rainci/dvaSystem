const Mock = require('mockjs')
const defaultResult = {
  msg: 'success',
  code: 200, // code 200 是成功

};

let menuData = count => {
  return Mock.mock({
    ...defaultResult,
    [`data|${count}`]: [
      {
        'id|+1': 1,
        'title': '@name',
        'link': '',
        'type' : 'title',
        'children|0-2': [
          {
            'id|+1': 11,
            'title': '@name',
            'link': '',
            'type' : 'menu'
          }
        ]
      }
    ],
  })
}

module.exports = {
  [`post /api/menu`](req, res) {
    setTimeout(() => {
      res.status(200).json(menuData(10));
    }, 1000)
  },
}