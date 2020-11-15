const Mock = require('mockjs')

const db = Mock.mock({
  msg: 'success',
  code: 200, // code 200 是成功
})

module.exports = {
  [`post /api/login`](req, res) {
    setTimeout(() => {
      res.status(200).json(db);
    }, 1000)
  },
}