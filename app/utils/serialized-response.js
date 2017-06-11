module.exports = function respond(serializer, request, response, data){
    return response.json(
        serializer[
            request.query.serializer || process.env.DEFAULT_SERIALIZER
        ].serialize(data)
    );
}

