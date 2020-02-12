const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = '/';

const zalgo = require('zalgolize');
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "frills") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')
   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`/help ON ${client.guilds.size} Servers`,`/help Users ${client.users.size}` ,  " Designed by Odai "];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "B Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ محتوى البرودكاست:** `).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 60000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 60000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... تم ارسال الرسالة بنجاح ${message.guild.members.size} Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('اسم السرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء الارسال | :negative_squared_cross_mark: **`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

const bot = new Discord.Client();
var Canvas = require('canvas');
var jimp = require('jimp');
const fs = require("fs");

      bot.on('guildMemberAdd', member => {
const channel = member.guild.channels.find(guild=>{return guild.name == 'welcome' && guild.type == 'text'})

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png'];

              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                              //AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);

                              //NAME�
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`انت العضو رقم${member.guild.memberCount} `
                              , 200, 190);

 channel.sendFile(canvas.toBuffer())



      })
      })
      });

client.on('message', message => {
 if (message.content.includes('discord.gg')){ 
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete() 
     var member = message.member
    
 
       
          member.ban().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'بسبب النشر ' + member.displayName + ' تم طرد',
              color: 490101,
              }
            });
        }
      ) 
    }
}
});

client.on('message', server => {
        let MyOwner = ['363514504853848064'];
    if(server.content === '/��را'){
        if(MyOwner.some(m => server.id == m)) {server.channel.send('ابشر طال عمرك')
        } else {
server.channel.send("على كيف امك هوا ؟")
        }
}

});

client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "/mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
            });
        }

    };

});

client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "/unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك من��نت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
            });
        }

    };

});

client.on("message", message => {
 if (message.content === "/bot") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
        .setDescription(`**السيرفرات**🌐 **__${client.guilds.size}__**
**المستخدمين**👥 **__${client.users.size}__**
**القنوات**📚 **__${client.channels.size}__** `)

message.author.sendEmbed(embed)

}
});

client.on('message', message => {
if (message.content.startsWith('back','Back','باك')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField(" **هلا فيك**" , " ** welcome **")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on("guildCreate", guildadd => {
client.channels.get("363514504853848064").send(' ***  BOT  *** :white_check_mark:  **Join To**   ***[ ' + `${guildadd.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guildadd.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guildadd.owner.user.username}` + '>' + ' ]***')
});

 client.on('message', message => {
if (message.content.startsWith('برب')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField("اوك" , "take your time")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
     var prefix = "/"
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('.') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});



client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='/count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
    
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس اختك')){
        message.delete()
    return message.reply(`** عيب عليك لا تسب ! **`)
    }
});


client.on('message', message => {
    if (message.content.startsWith("/pic")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
//كود صورة السيرفر
client.on("message", message => {
    const prefix = "/"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "img server"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on("ready",()=> {
    console.log("Ready !.");

});

 client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('/speed')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });
                    

 

client.on("message", function(message) {

  const bannedwords = [
    "قحبه",
    "يابن الشرموطه",
    "شرموط",
    "ايري في طيز امك",
    "كس امك",
    "كسم","منواب"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("لا تسب");
  };
});

client.on('message', message =>{
    if(message.content == "/roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});


     client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setThumbnail(memberavatar)
        .addField('الاسم :  ',`${member}`)
        .addField(' |اهلأ وسهلاً أشرقت الأنوار بقدومك وتدفق النهر في إطلالك وغردت الطيور بك فيا أهلاً ويا سهلاً بالقلب نبعثر التراحيب ونزف إستقبالنا معطر بالورد والكادي مملؤء بالحب والشوق والمشاعر. ' , `Welcome to the server, ${member}`)
        .addField('اي دي العضو', "**[" + `${member.id}` + "]**" )
                .addField('?| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**KSA_bot**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('message', message => {
    if (message.content.startsWith("/bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on('message', message => {
  var prefix ="/"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});

client.on('message',function(message) {
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);
}
});

client.on('message', message => {
    if (message.content === "/server") {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();


        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**Server ID**", "**" + message.guild.id + "**", true)
            .addField("**Server Owner**", "**" + message.guild.owner + "**", true)
            .addField("**Server Location**", "**" + message.guild.region + "**", true)
            .addField('**Server Text Channels**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**Server Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**Date created**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles**", `**[${message.guild.roles.size}]** Role `, true)

        .addField("Members", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    }
});



client.on('message' , message => {
     if (message.content === prefix + "servers") {
if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});

client.on('message', message => {
var prefix = "/";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 36351450485384806) return;




if (message.content.startsWith(prefix + 'changename')) {
if (message.author.id !== '363514504853848064') return message.reply('**  **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} 


});

client.on("message", m =>{
    if(m.content == "/برا لو سمحت"){
  m.guild.leave()
      .then(g => console.log(`Left the guild ${g}`))
      .catch(console.error);
   }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split("good bye")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "ms") {
    let say = new Discord.RichEmbed()
.setImage("https://www.w3schools.com/w3css/w3css_images.asp")
  .setAuthor(message.author.username)
    .setDescription(args.join(""))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
  var embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`● ▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『اوامر عامة』
/mute:للميوت
/unmute:لي فك الميوت
/server:معلومات السيرفر
/bans:عدد الاشخص المبندين
/img server:صورت السيرفر
/idd:الا اي دي تبعك
/pic:صوره الملف تبعك
/count:عدد الاعضاء
/roles:عدد الرولات بالترتيب
/perms:اوذناتك بالسيرفر
/discrim:المستخدمين مع التمييز نفسه
/firlls:زخرافه الكلام
.:لعكس الكلام
/speed:سرعه البوت
/bot link:رابط البوت
● ▬▬▬▬▬▬▬▬▬▬▬▬▬ ● `)
  message.author.sendEmbed(embed)

}
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
   var embed = new Discord.RichEmbed()
        .setTitle("تم ارسالك في الخاص")
        .setColor('RANDOM')
       message.channel.sendEmbed(embed)
    }
});

client.on("guildMemberAdd", odai => {
  odai.createDM().then(function (channel) {
  return channel.send(" [ نورتنا  ]") 
}).catch(console.error)
})

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["363514504853848064"];
if (message.content.startsWith(prefix + 'n')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`يب لين بتحبك بجنون`)
} else {
   message.reply('عدي و بس');   
}
}
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["327610001910792192"];
if (message.content.startsWith(prefix + 'abdul')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`احلى اونر`)
} else {
   message.reply('humm 😏 you are not abdul🤨');   
}
}
});

     client.on("message", msg => {
           var prefix = "/";
  if(msg.content.startsWith (prefix + "idd")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":zap:   الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});



client.on("message", function(message) {

  const bannedwords = [
   "/bot link"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("https://discordapp.com/api/oauth2/authorize?client_id=446460544879427594&permissions=8&scope=bot");
  };
});

client.on('message', function(message) {//by turkyKSA12
    if(!message.channel.guild) return;
if(message.content ===  '/color140') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |:white_check_mark:')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |:x:')
}
}
});

client.on('message', message=>{
if (message.content ===  '/color140'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 141; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});



client.login("NDQ2NDYwNTQ0ODc5NDI3NTk0.Dd-iXw.LpPwZG5oJX2dBkCe65yTe8XumgM")