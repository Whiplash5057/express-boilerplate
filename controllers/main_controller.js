let { getDemoService, postDemoService, putDemoService  } = require("../services/demo-service")


function getDemo(req, res) {
    try {

        let result = getDemoService()
        res.send({ message: 'success', data: result })

    } catch (err) {
        res.status(410).send({err})
    }
    
}

function postDemo(req, res) {
    try {

        let {data} = req.body
        let result = postDemoService(data)
        res.send({ message: 'success', data: result })

    } catch (err) {
        res.status(410).send({err})
    }
}


module.exports = {
    getDemo,
    postDemo,
}
