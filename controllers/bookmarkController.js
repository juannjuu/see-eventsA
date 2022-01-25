const Joi = require('joi')
const errorHandler = require('../utils/error-handler') //error handler
const {
    Bookmark,
    Event,
    User,
} = require('../models') // use models

module.exports = {
    createBookmark: async (req, res) => {
        const {
            eventId
        } = req.params
        const user = req.user;
        try {
            const bookmark = await Bookmark.create({
                eventId,
                userId: user.id
            })
            if (!bookmark) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Failed to Save Event"
                })
            }
            res.status(201).json({
                status: "OK",
                message: "Save Event Success",
                result: {
                    bookmark
                }
            })
        } catch (error) {
            errorHandler(res, error);
        }
    },
    getBookmarks: async (req, res) => {
        const user = req.user
        try {
            const bookmarks = await Bookmark.findAll({
                include: [{
                    model: Event,
                    as: "event",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
                    include: [{
                        model: User,
                        as: "user",
                        attributes: {
                            exclude: ["id", "email", "password", "createdAt", "updatedAt"]
                        },
                        where: {
                            id: user.id
                        }
                    }]
                }],
                attributes: {
                    exclude: ["id", "createdAt", "updatedAt"],
                },
                where: {
                    userId: user.id,
                }
            })
            if (bookmarks.length == 0) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "No Bookmarks Found"
                })
            }
            res.status(200).json({
                status: "OK",
                message: "Successfully retrieve bookmarks",
                results: bookmarks
            })
        } catch (error) {
            errorHandler(res, error);
        }
    }
}