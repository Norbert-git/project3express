const db = require('../models')

const index = (req, res) => {
  db.Tool.find({}, (err, foundTools) => {
    if (err) console.log('Error in tools#index:', err)

    if (!foundTools) return res.json({
      message: 'No Tools found in database.'
    })

    res.status(200).json({ tools: foundTools });
  })
}

const show = (req, res) => {
  db.Tool.findById(req.params.id, (err, foundTool) => {
    if (err) console.log('Error in tools#show:', err)

    if (!foundTool) return res.json({
      message: 'Tool with provided ID not found.'
    })

    res.status(200).json({ tool: foundTool })
  })
}

const create = (req, res) => {
  db.Tool.create(req.body, (err, savedTool) => {
    if (err) console.log('Error in tools#create:', err)
    res.status(200).json({ tool: savedTool })
  })
}

const update = (req, res) => {
  const options = { new: true }
  db.Tool.findByIdAndUpdate(req.params.id, req.body, options, (err, updatedTool) => {
    if (err) console.log('Error in tools#update:', err)
    if (!updatedTool) return res.json({
      message: "No tool with that ID found."
    })
    res.status(200).json({ tool: updatedTool })
  })
}

const destroy = (req, res) => {
  db.Tool.findByIdAndDelete(req.params.id, (err, deletedTool) => {
    if (err) console.log('Error in tools#destroy:', err)
    if (!deletedTool) return res.json({
      message: "No tool with that ID found."
    })
    res.status(200).json({ tool: deletedTool })
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}