'use strict';

const path = require('path');

const port = 3000;
const site_title = '';
const base = __dirname;

const transporter_client_id = ''; //'69871664069-v7qfip8fn8sb1q0leh0kqlgeo8egojfk.apps.googleusercontent.com',
const transporter_client_secret = ''; //'cDOqXWb93FojAXok0ODdSqh2',
const transporter_refresh_token = ''; // '1/humTDmtJl9G9aDM55K8QX78VkRsZ2fuH5wRDl7kfASQ',

const mongo_url = ''; //'mongodb://dadhive-ad:'+encodeURIComponent('Z@r@rox6')+'@dadhive-cluster-sm-shard-00-00-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-01-1io7q.mongodb.net:27017,dadhive-cluster-sm-shard-00-02-1io7q.mongodb.net:27017/test?ssl=true&replicaSet=DadHive-Cluster-sm-shard-0&authSource=admin&retryWrites=true/dadhive-main-20193f0912h309',
const mongo_id = ''; // 'dadhive-main-20193f0912h309',

const jwt_secret = '';
const jwt_secret_limit = 86400000;
const jwt_refresh = '';
const jwt_refresh_limit = 1814400000;

const nodemail_usr = ''; //'thedadhive@gmail.com';
const nodemail_pass = ''; //'Kountdown_199120101';
const nodemailer_client_id = ''; //'582457802779-jse8ejpv5llk4s4qd8lol4uo3rbdj3o6.apps.googleusercontent.com';
const nodemailer_client_secret = ''; //'_J64jVg1N-B-ixi0Y7sS0Ney';
const nodemailer_client_token = ''; // '1/Pr7qllTm6f88K0xTmFmyriECjPVhieQzDh_SeXGTXCIEc766NB--peL2RgDBeZDS';

const session_cookie_name = '';
const session_cookie_secret = '';
const session_duration = 60 * 60 * 1000;
const session_active_duration = 5 * 60 * 1000;

const fir_api_key = '';
const fir_auth_domain = '';
const fir_db_url = '';
const fir_project_id = '';
const fir_storage_bucket = '';
const fir_messaging_sender_id = '';
var fir_storage_filename;
if (is_live) {
    fir_storage_filename = '';
} else {
    fir_storage_filename = '';
}
const fir_app_id = '';
const fir_measurement_id = '';

const s3_access_key = '';
const s3_secret_key = '';
const s3_bucket = '';

const is_live = false;
const one_day = 86400000;
const timeout = 72000000;

module.exports = {
    port: port,
    siteTitle: site_title,
    
    basePublicPath: path.join(base, '/public/'),
    baseRoutes: path.join(base, '/routes/'),
    baseViews: path.join(base, '/views/'),
    
    sessionDuration: session_duration,
    activeDuration: session_active_duration,
    
    transporterClientId: transporter_client_id,
    transporterClientSecret: transporter_client_secret,
    transporterRefreshToken: transporter_refresh_token,
    
    mongoUrl: mongo_url,
    mongoid: mongo_id,

    jwtsecret: jwt_secret,
    jwtsecretLimit: jwt_secret_limit,
    jwtrefresh: jwt_refresh,
    jwtrefreshLimit: jwt_refresh_limit,

    nodemailusr: nodemail_usr,
    nodemailpass: nodemail_pass,
    nodemailerclientid: nodemailer_client_id,
    nodemailerclientsecret: nodemailer_client_secret,
    nodemailerclienttoken: nodemailer_client_token,
    
    sessionCookieName: session_cookie_name,
    sessionCookieSecret: session_cookie_secret,

    firapikey: fir_api_key,
    firauthdomain: fir_auth_domain,
    firdburl: fir_db_url,
    firprojectid: fir_project_id,
    firstoragebucket: fir_storage_bucket,
    firmessagingsenderid: fir_messaging_sender_id,
    firstoragefilename: fir_storage_filename,
    firappid: fir_app_id,
    firmeasurementid: fir_measurement_id,
    
    s3AccessKey: s3_access_key,
    s3SecretKey: s3_secret_key,
    s3bucket: s3_bucket,
    
    isLive: is_live,
    oneDay: one_day,
    timeout: timeout,

    appSession: {
        cookieName: process.env.COOKIENAME || session_cookie_name,
        secret: process.env.COOKIESEC || session_cookie_secret,
        duration: process.env.PROCESSDURATION || session_duration,
        activeDuration: process.env.ACTIVEDURATION || session_active_duration
    }
}