var frontController = {
    appointmentBookingListApi: function(req, res) {
        const appointmentBookingList = require('../../database/models/appointmentBookingList');
        var appointmentList=[];
        appointmentBookingList.find({},(err,docs)=>{
            if(docs.length > 0)
            {
                appointmentList=docs;
                res.send(appointmentList);
            }
            else
            {
                res.send(appointmentList);
            }
        });
    },
    getAppointmentTimeSlotsApi : function(req,res) {
        
        const bookingDate=req.body.bookingDate;
        const paymentData=require("../../database/models/payment");
        const serviceTypesData=require("../../database/models/serviceTypes");
        var timeSlots=[];
        
        paymentData.aggregate([
            {            
                $match : {bookingDate : bookingDate, bookingType : 4}
            },
            {
                $lookup:{
                    from: 'appointment-booking-list',
                    localField: 'appointmentId',
                    foreignField: '_id',
                    as: 'appointmentData'
                }
            },
            { $unwind:"$appointmentData"},
            {
                $project: {
                    _id:0,
                    timeSlot: "$timeSlot",
                    duration: "$appointmentData.duration"
                }
            }
        ], (err, response) => {
            console.log('response', response);
            response.map((records) => {
                console.log('hiiii');
                timeSlots.push({timeSlot : records.timeSlot, duration : records.duration});
            });
            console.log('timeSlots');
            console.log(timeSlots);
            
            
            timeSlots.length > 0 ? res.status(200).json({status: true,data: response}) : res.status(200).json({status: false,data: response});

            
        });
    }
}

module.exports = frontController;