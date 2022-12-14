const { Event } = require("../../models/event");

const addEvent = async (req, res, next) => {
    res.status(201).json(await Event.create(req.body));
};

module.exports = addEvent;
