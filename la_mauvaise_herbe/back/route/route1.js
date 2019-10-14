var express = require('express');
var router1 = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router1.post('/send1', (req, res, next) => {
    var place = req.body.place
    var event = req.body.event
    var nom = req.body.nom
    var prenom = req.body.prenom
    var email = req.body.email
    var content = `nom: ${nom} \n prenom: ${prenom} \n email: ${email} \n Une réservation pour ${place} personne(s) à été faite pour l'évènement ${event}.`
    var content2 = `Bonjour ${nom } ${prenom} \n La Mauvaise herbe vous remercie pour votre réservation !\n
    Votre demande de réservation pour ${place} personne(s) pour l'évènement "${event}" a été pris en compte. \n
    Une réponse vous sera rendu, dans 3 à 4 jours par notre équipe.\n
    Pour toute informations complémentaires, vous pouvez nous contacter à l'adresse : lamauvaiseherbe49@gmail.com\n
    En vous souhaitant une bonne journée, à très bientot !\n
    L'équipe de la mauvaise herbe.`
  
    var mail = {
      from: email, 
      to: creds.USER,  //Change to email address that you want to receive messages on
      subject: event,
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })

    var mail2 = {
      from: email,
      to: email,
      subject: "Confirmation de votre réservation",
      text: content2
    }

    transporter.sendMail(mail2, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  
  })

  module.exports = router1;