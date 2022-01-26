const Joi = require('joi') //use joi validation npm
const errorHandler = require('../utils/error-handler') //error handler
const {
    Comment,
    Event,
    User,
    Profile,
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
            //create schema Joi
            const schema = Joi.object({
                comment: Joi.string().required()
            })
            //check error schema
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
            //insert to database
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
            //get all from database
            const commentData = await Comment.findAll({
                include: { //join table
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
                },
                raw: true,
                nest: true
            })
            if (!commentData.length) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "No Comments Found"
                })
            }

            const userIds = commentData.map(el => el.userId)
            const profiles = await Profile.findAll({ where : {userId: userIds}})
            const images = profiles.map(el => el.image ? el.image : null)
            
            const results = commentData.map((el, i) => {
                el.user.image = images[i]
                return el
            })
            
            res.status(200).json({
                status: "OK",
                message: "Successfully retrieve the data",
                results
            })
        } catch (error) {
            errorHandler(res, error);
        }
    }
}