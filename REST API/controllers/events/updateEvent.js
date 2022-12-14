const { Event } = require("../../models/event");
const RequestError = require("../../helpers/RequestError");

const updateEvent = async (req, res, next) => {
    const { id } = req.params;
    const result = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateEvent;
