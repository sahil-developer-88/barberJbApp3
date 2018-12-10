var express = require('express');
var passport = require('../database/passport.config');
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




    // ******** BACKEND CONTROLLERS *************

    var paymentController = require('./../controllers/backend/payment-controller')(express);
    
    // app.use('/api/backend/paymentStatus', passport.authenticate('jwt', {session: false}), paymentController);

    routes.use('/api/backend/payment',paymentController);
    


    // routes.route('/api/backend/paymentStatus',paymentController.paymentStatus).post(paymentController.paymentStatus);
    // routes.route('/api/backend/paymentCollectionLength').get(paymentController.paymentCollectionLength);
    // routes.route('/api/backend/serviceBookingPaymentDetails').post(paymentController.serviceBookingPaymentDetails);
    // routes.route('/api/backend/appointmentBookingPaymentDetails').post(paymentController.appointmentBookingPaymentDetails);
    // routes.route('/api/backend/offlineBookingPaymentDetails').post(paymentController.offlineBookingPaymentDetails);
    // routes.route('/api/backend/demoDetails').get(paymentController.demoDetails);
    // routes.route('/api/backend/updateDetails').get(paymentController.updateDetails);    // demo function
    // routes.route('/api/backend/paymentDemo').get(paymentController.paymentDemo);
    
    
    var categoryController = require('./../controllers/backend/category-controller');
    routes.route('/api/backend/categoryList').post(categoryController.categoryList);
    routes.route('/api/backend/categoryRecordsLength').get(categoryController.categoryRecordsLength);
    routes.route('/api/backend/updateCategory').post(categoryController.updateCategory);
    routes.route('/api/backend/addCategory').post(categoryController.addCategory);

    var serviceController = require('./../controllers/backend/service-controller')(express);
    routes.use('/api/backend',serviceController);
    
    // routes.route('/api/backend/serviceList').post(serviceController.serviceList);
    // routes.route('/api/backend/serviceRecordsLength').get(serviceController.serviceRecordsLength);
    // routes.route('/api/backend/categoriesList').get(serviceController.categoriesList);
    // routes.route('/api/backend/addService').post(serviceController.addService);

    var promoCodeController = require('./../controllers/backend/promo-code-controller');
    routes.route('/api/backend/usersList').get(promoCodeController.usersList);
    routes.route('/api/backend/savePromoCodeDetails').post(promoCodeController.savePromoCodeDetails);
    routes.route('/api/backend/checkExistingUsers').post(promoCodeController.checkExistingUsers);
    routes.route('/api/backend/promoCodeList').post(promoCodeController.promoCodeList);
    routes.route('/api/backend/promoCodeListLength').get(promoCodeController.promoCodeListLength);
    routes.route('/api/backend/promoCodeCheck').post(promoCodeController.promoCodeCheck);
    routes.route('/api/backend/statusUpdate').get(promoCodeController.statusUpdate);
    routes.route('/api/backend/promoCodeUsersDetails').post(promoCodeController.promoCodeUsersDetails);
    routes.route('/api/backend/checkSmsService').get(promoCodeController.checkSmsService);
    
    var signinController = require('./../controllers/backend/signin-controller')(express);
    routes.use('/api/backend',signinController);

    return routes;
}
module.exports = exportedRoutes;