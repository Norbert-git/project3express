const db = require('./models')
const data = require('./toolData.json')

db.Tool.deleteMany({}, (err, deletedTools) => {
    db.Tool.create(data.tools, (err, seededTools) => {
        if (err) console.log(err);
        
        console.log(data.tools.length, 'tools created successfully')
        
        process.exit()
    })
})