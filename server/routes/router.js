var express = require('express');
var exportedRoutes = function(app) {
    var routes = express.Router();

    // FRONTEND CONTROLLERS
    var loginController = require('./../controllers/frontend/login-controller')(express);
    routes.use('/api/frontend',loginController);
    // routes.route('/api/frontend/logout').get(loginController.logout);
    // routes.route('/api/frontend/login').post(loginController.login);
    // routes.route('/api/frontend/checkLogin').get(loginController.checkLogin);
    
    var registerController = require('./../controllers/frontend/register-controller');
    routes.route('/api/frontend/saveUserInfo').post(registerController.saveUserInfo);

    var logoutController = require('./../controllers/frontend/logout-controller');
    routes.route('/api/frontend/pressLogout').get(logoutController.pressLogout);

    var bookingController = require('./../controllers/frontend/booking-controller');
    routes.route('/api/frontend/getBookedServicesData').get(bookingController.getBookedServicesData);
    routes.route('/api/frontend/getBookedProductsData').get(bookingController.getBookedProductsData);
    routes.route('/api/frontend/getWithoutBookingData').get(bookingController.getWithoutBookingData);
    routes.route('/api/frontend/getBookingAppointmentsData').get(bookingController.getBookingAppointmentsData);

    var appointmentBookingController = require('./../controllers/frontend/appointment-booking-controller');
    routes.route('/api/frontend/appointmentBookingListApi').get(appointmentBookingController.appointmentBookingListApi);
    routes.route('/api/frontend/getAppointmentTimeSlotsApi').post(appointmentBookingController.getAppointmentTimeSlotsApi);

    var bookingProductController = require('./../controllers/frontend/booking-product-controller');
    routes.route('/api/frontend/getProductDetails').get(bookingProductController.getProductDetails);

    var bookingServiceController = require('./../controllers/frontend/booking-service-controller');
    routes.route('/api/frontend/serviceCategorySelection').get(bookingServiceController.serviceCategorySelection);
    routes.route('/api/frontend/getTypeOfServices').post(bookingServiceController.getTypeOfServices);
    routes.route('/api/frontend/getTimeSlotsForDate').post(bookingServiceController.getTimeSlotsForDate);

    var profileInfoController = require('./../controllers/frontend/profile-info-controller');
    routes.route('/api/frontend/getLoginInfoAndBookingInfo').post(profileInfoController.getLoginInfoAndBookingInfo);
    routes.route('/api/frontend/payment').post(profileInfoController.payment);

    var thanksController = require('./../controllers/frontend/thanks-controller');
    routes.route('/api/frontend/thanksPageValidation').get(thanksController.thanksPageValidation);
    routes.route('/api/frontend/feedbackForm').post(thanksController.feedbackForm);
    
    var editProfileController = require('./../controllers/frontend/edit-profile-controller');
    routes.route('/api/frontend/getProfileInfo').get(editProfileController.getProfileInfo);
    routes.route('/api/frontend/updateProfile').post(editProfileController.updateProfile);

    var homeController = require('./../controllers/frontend/home-controller');
    routes.route('/api/frontend/servicesHomePage').get(homeController.servicesHomePage);
    routes.route('/api/frontend/productsHomePage').get(homeController.productsHomePage);
    
    var singleProductController = require('./../controllers/frontend/single-product-controller');
    routes.route('/api/frontend/getSingleProductInfo').post(singleProductController.getSingleProductInfo);
    return routes;
}
module.exports = exportedRoutes;