// importing express for creating bookingRouter
const express=require("express")
const bookingRouter=express.Router()

// importing bookFacility for making request
const { bookingFacility, gettingAllData } = require("../controller/booking.controller")

// making post request for newly bookings
bookingRouter.post("/book",bookingFacility)


// getting all booked facilities
bookingRouter.get("/all",gettingAllData)


module.exports={
    bookingRouter
}