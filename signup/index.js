module.exports = async function (context, req) {
    context.bindings.message = req.body;
    context.done();
}