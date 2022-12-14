const { Event } = require("../../models");

const listEvents = async (req, res, next) => {
    const result = await Event.find({}, "-createdAt -updatedAt");
    res.json({
        status: "success",
        code: 200,
        data: result,
    });
};

module.exports = listEvents;
