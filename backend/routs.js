const express = require('express')

const ShowMeeting = require('./Controller/ShowMeeting')
const Add = require('./Controller/AddMeeting')
const Sa = require('./Controller/dhanushka')

const router = express.Router()

router.post('/add', Add)
router.get('/rooms', ShowMeeting)
router.get('/sach' , Sa)

module.exports =  router