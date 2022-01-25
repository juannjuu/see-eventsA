const Joi = require('joi')
const errorHandler = require('../utils/error-handler') //error handler
const {
    Comment,
    Event,
    User,
} = require('../models') // use models

module.exports = {
    createComment: async (req, res) => {
        const {
            comment
        } = req.body;
        const {
            eventId
        } = req.params
        const user = req.user;
        try {
            const schema = Joi.object({
                comment: Joi.string().required()
            })
            const {
                error
            } = schema.validate({
                comment
            })
            if (error) {
                return res.status(400).json({
                    message: error.message,
                    status: "Bad Request",
                    result: {}
                })
            }
            let commentData = await Comment.create({
                comment,
                eventId,
                userId: user.id
            })
            if (!commentData) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Failed to create comment"
                })
            }
            res.status(201).json({
                status: "OK",
                message: "Comment Created",
                result: {
                    commentData
                }
            })
        } catch (error) {
            errorHandler(res, error);
        }
    },
    getComments: async (req, res) => {
        const {
            eventId
        } = req.params
        try {
            const commentData = await Comment.findAll({
                include: {
                    model: User,
                    as: "user",
                    attributes: {
                        exclude: ["id", "email", "password", "updatedAt"],
                    },
                },
                attributes: {
                    exclude: ["id", "createdAt", "updatedAt"],
                },
                where: {
                    eventId,
                }
            })
            if (commentData.length == 0) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "No Comments Found"
                })
            }
            res.status(200).json({
                status: "OK",
                message: "Successfully retrieve the data",
                results: commentData
            })
        } catch (error) {
            errorHandler(res, error);
        }
    }
}