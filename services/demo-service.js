function getDemoService() {
    return "TEXT RETURN"
}

function postDemoService(data) {
    return `${data} TEXT POST SERVICE`
}


module.exports = {
    getDemoService,
    postDemoService
}