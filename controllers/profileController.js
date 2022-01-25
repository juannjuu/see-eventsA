const Joi = require('joi')
const errorHandler = require('../utils/error-handler') //handling error
const {
    Profile,
    User,
    Event,
    Category
} = require('../models'); // use model
const {
    hashPassword,
    comparePassword
} = require('../utils/bcrypt')

module.exports = {
    editProfile: async (req, res) => {
        const file = req.file;
        const {
            firstName,
            lastName
        } = req.body;
        const profile = await Profile.findOne({
            where: {
                userId: req.user.id,
            },
        });
        try {
            const image = () => {
                if (file == undefined) {
                    return profile.image;
                } else {
                    return file.path;
                }
            };
            const {
                error
            } = Joi.object({
                image: Joi.string(),
                firstName: Joi.string(),
                lastName: Joi.string(),
            }).validate({
                image: image(),
                firstName,
                lastName,
            });
            if (error) {
                return res.status(400).json({
                    status: "Bad Request",
                    message: error.message,
                    result: {},
                });
            }

            const update = await Profile.update({
                image: image(),
            }, {
                where: {
                    userId: req.user.id,
                },
            });

            if (update[0] != 1) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Update Profile Image Failed"
                })
            }

            const user = await User.update({
                firstName,
                lastName,
            }, {
                where: {
                    id: req.user.id,
                },
            });

            if (user[0] != 1) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Update Profile Image Failed"
                })
            } else {
                var result = await User.findOne({
                    where: {
                        id: req.user.id,
                    },
                    attributes: {
                        exclude: ["password", "createdAt", "updatedAt"]
                    }
                })
            }

            res.status(200).json({
                status: "OK",
                message: "Update Data Success",
                result: result,
            });

        } catch (error) {
            errorHandler(res, error);
        }
    },
    getProfile: async (req, res) => {
        const user = req.user
        try {
            const profile = await Profile.findOne({
                include: [{
                    model: User,
                    as: "user",
                    attributes: {
                        exclude: ["id", "password", "createdAt", "updatedAt"]
                    }
                }],
                where: {
                    userId: user.id
                }
            });
            if (!profile) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "There is no data with id " + id,
                    result: {}
                })
            }
            return res.status(200).json({
                status: "OK",
                message: "Data Found",
                result: profile
            })
        } catch (error) {
            errorHandler(res, error);
        }
    },
    changePassword: async (req, res) => {
        const {
            oldPassword,
            newPassword
        } = req.body;
        const user = req.user
        try {
            const users = await User.findOne({
                where: {
                    id: user.id
                },
            });

            const checkValid = comparePassword(oldPassword, users.password);

            if (!checkValid) {
                return res.status(400).json({
                    status: "Bad Request",
                    message: "Password is not valid",
                });
            }

            const hash = hashPassword(newPassword);
            const update = await User.update({
                password: hash,
            }, {
                where: {
                    id: user.id
                },
            });

            if (update[0] != 1) {
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Update Password Failed"

                })
            }
            res.status(201).json({
                status: "OK",
                message: "Change Password Success"
            })
        } catch (error) {
            errorHandler(res, error);
        }

    },
    getMyEvents: async (req, res) => {
        const user = req.user
        try {
            const myEvents = await Event.findAll({
                include: [ //join table
                    {
                        model: Category,
                        as: "category",
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"],
                        },
                    },
                    {
                        model: User,
                        as: "user",
                        attributes: ["firstName", "lastName"],
                    }
                ],
                where: {
                    userId: user.id
                }
            })

            if (myEvents.length == 0) {
                return res.status(404).json({
                    status: "Not Found",
                    message: "No Data Found",
                    result: {}
                })
            }

            res.status(200).json({
                status: "OK",
                message: "Get Data Success",
                result: myEvents
            })
        } catch (error) {
            errorHandler(res, error)
        }
    }
}