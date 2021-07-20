const uuid = require('uuid');

module.exports = async function (context, message) {

    const id = {
        PartitionKey: 'volunteer',
        RowKey: uuid.v4()
    };

    const row = { ...id, ...message };
    context.bindings.volunteersTable = row;
    
    context.done();
};