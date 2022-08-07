const translate = require('translate-google')

module.exports= {
    name : 'translate',
    run : async(client, message, args) => {
      
        if(message.channel.id == "780447458215460884") {



        translate(args.join(" "), {to : 'en'}).then(translate => {
            message.channel.send(translate)
        }).catch(err => {
            message.channel.send('Translate Eror')
            console.log(err)
        })
          
      }else{
        return message.channel.send("translate pada tempatnya!")
      }
  }
    
}
