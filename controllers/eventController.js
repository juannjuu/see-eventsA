const Joi = require('joi').extend(require("@joi/date")) //use joi validation npm
const errorHandler = require('../utils/error-handler') //error handler
const {
  Op
} = require("sequelize") //use Op from Sequelize
const moment = require('moment') //use moment npm
const {
  Event,
  Category,
  User,
} = require('../models')

module.exports = {
  createEvent: async (req, res) => {
    const body = req.body
    const file = req.file
    const user = req.user
    try {
      if (!req.file) {
        return res.status(400).json({
          status: "Bad Request",
          message: "Please insert jpg image"
        })
      }
      //Create schema Joi
      const schema = Joi.object({
        categoryId: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        eventDate: Joi.date().format("YYYY-MM-DD HH:mm:ss").required(),
        image: Joi.string().required()
      });
      //Check error schema
      const {
        error
      } = schema.validate({
        ...body, //Spread Operator Except Image
        image: file.path, //Check file path extensions
      })
      if (error) {
        return res.status(400).json({
          message: error.message,
          status: "Bad Request",
          result: {}
        })
      }
      //Insert to Database
      const events = await Event.create({
        ...body,
        userId: user.id,
        image: file.path
      });
      if (!events) {
        return res.status(500).json({
          message: "Create Event Failed",
          status: "Internal Server Error",
          result: {}
        })
      }
      res.status(201).json({
        message: "Create Event Success",
        status: "OK",
        result: events
      })
    } catch (error) {
      errorHandler(res, error)
    }
  },
  getEvents: async (req, res) => {
    let {
      limit,
      page,
      category,
      order,
      date,
      keywords
    } = req.query //get query params
    try {
      //check query limit
      let limitQuery;
      if (limit) {
        limitQuery = Number(limit)
      } else {
        limitQuery = 8 //default limit 8
      }
      //set paginations
      if (!page) {
        page = 1
      }
      //check query sort
      let sort;
      switch (order) {
        case "date":
          sort = ["eventDate", "ASC"];
          break;
        case "name":
          sort = ["title", "ASC"];
          break;
        default:
          sort = ["eventDate", "ASC"];
      }
      //check query date
      let dateQuery, start, end
      switch (date) {
        case "today":
          start = moment().tz("UTC").startOf("day").toDate();
          end = moment().tz("UTC").endOf("day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "tomorrow": //today + 1
          start = moment().tz("UTC").add(1, "day").startOf("day").toDate();
          end = moment().tz("UTC").add(1, "day").endOf("day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "week": //starts from monday
          start = moment().tz("UTC").startOf("week").add(1, "day").toDate();
          end = moment().tz("UTC").endOf("week").add(1, "day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "month": //starts from date 1 00:00 PM
          start = moment().tz("UTC").startOf("month").toDate();
          end = moment().tz("UTC").endOf("month").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "year":
          start = moment().tz("UTC").startOf("year").toDate();
          end = moment().tz("UTC").endOf("year").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
      }
      //check query category
      let categoryQuery;
      if (category) {
        categoryQuery = {
          categoryName: category,
        };
      }
      //check keywords query
      let keywordsQuery;
      if (keywords) {
        keywordsQuery = {
          title: {
            [Op.iLike]: `%${keywords}%` //use where like % % clause to get title where contains the keywords
          }
        }
      }
      //get all from database
      const events = await Event.findAll({
        limit: limitQuery,
        offset: (page - 1) * limitQuery,
        order: [sort],
        include: [ //join table
          {
            model: Category,
            as: "category",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
            where: {
              ...categoryQuery //use spread operator to prevent undefined variable if queries are null
            },
          },
          {
            model: User,
            as: "user",
            attributes: ["firstName", "lastName"],
          }
        ],
        where: { //use spread operator to prevent undefined variable if queries are null
          ...dateQuery,
          ...keywordsQuery
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        }
      })
      if (events.length == 0) {
        return res.status(404).json({
          status: "Not Found",
          message: "No data found, table is empty",
          result: {
            start,
            end
          }
        })
      }
      res.status(200).json({
        status: "OK",
        message: "Successfully retrieve the data",
        result: events
      })
    } catch (error) {
      errorHandler(res, error)
    }
  },
  getEventDetail: async (req, res) => {
    const {
      eventId
    } = req.params
    try {
      // get spesific event details
      const event = await Event.findOne({
        include: [{ //join table
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
          },
        ],
        where: {
          id: eventId
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
      })
      if (!event) {
        return res.status(404).json({
          status: "Not Found",
          message: "Cannot find an event with id " + eventId,
          result: {}
        })
      }
      return res.status(200).json({
        status: "OK",
        message: "Successfully retrieve the data",
        result: event
      })
    } catch (error) {
      errorHandler(res, error)
    }
  },
  updateEvent: async (req, res) => {
    const body = req.body
    const user = req.user //req.user from middleware
    //check if req.file is exist
    if (req.file) {
      var file = req.file
    }
    const {
      eventId
    } = req.params
    try {
      //create schema Joi
      const schema = Joi.object({
        categoryId: Joi.number(),
        title: Joi.string(),
        description: Joi.string(),
        eventDate: Joi.date().format("YYYY-MM-DD HH:mm:ss"),
        image: Joi.string()
      });
      //check schema Joi
      const {
        error
      } = schema.validate({
        ...body,
      })
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {}
        })
      }
      //update to Database
      if (!req.file) {
        var events = await Event.update({
          ...body,
        }, {
          where: {
            id: eventId,
            userId: user.id
          }
        });
      } else {
        var events = await Event.update({
          ...body,
          image: file.path
        }, {
          where: {
            id: eventId,
            userId: user.id
          }
        });
      }
      if (events[0] != 1) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Update Event Failed / You Have no Access to Edit This Event",
          result: {}
        })
      }
      const event = await Event.findOne({
        where: {
          id: eventId,
        }
      })
      res.status(201).json({
        status: "OK",
        message: "Update Event Success",
        result: event
      })
    } catch (error) {
      errorHandler(res, error)
    }
  },
}