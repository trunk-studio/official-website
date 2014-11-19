var express = require('express');
var router = express.Router();
var util = require('util');
var ejs = require('ejs');
var fs = require('fs');

var mandrill = require('mandrill-api/mandrill');
var mandrillClient = new mandrill.Mandrill('zc_TYYw-xDDLYu_lJbNqBQ');

/* POST contact mail. */
router.post('/', function(req, res) {

	var contactName = req.body.name || 'NO_NAME',
		contactEmail = req.body.email || 'NO_EMAIL',
		contactSubject = req.body.subject || 'NO_SUBJECT',
		contactMessage = req.body.message || 'NO_MWSSAGE';

	var mailContent = fs.readFileSync(__dirname + '/../mailTemplates/contact.html').toString();

	var message = {
		html: util.format(mailContent, contactName, contactEmail, contactSubject, contactMessage),
		subject: 'EXMA WEBSIDE CONTACT',
		from_email: contactEmail,
		from_name: contactName,
		to: [
			{
				email: 'kevinxyz77@gmail.com',
				type: 'to'
			},
			{
				email: 'blackghost0118@gmail.com',
				type: 'bcc'
			},
			{
				email: 'clonncd@gmail.com',
				type: 'bcc'
			},
			{
				email: 'whsh320@gmail.com',
				type: 'bcc'
			},
			{
				email: 'wayne1025tw@gmail.com',
				type: 'bcc'
			},
			{
				email: 'bird23074035@gmail.com',
				type: 'bcc'
			}
		]
	};

	mandrillClient.messages.send({ 'message': message }, 
		function (result) {
			console.log(result);
			res.redirect('/');
			return;
		},
		function (err){
			console.log('err');
			console.log(err);
			res.redirect('/');
			return;
		}
	);
});

module.exports = router;