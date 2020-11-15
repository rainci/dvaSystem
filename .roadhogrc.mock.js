const fs = require('fs');
const path = require('path');
const mockPath = path.join(__dirname + '/mock')
const mockData = {}

fs.readdirSync(mockPath).forEach(file => {
  Object.assign(mockData, require('./mock/' + file))
})

export default {
  ...mockData
};

