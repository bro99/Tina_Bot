//#region Importacoes
const express = require('express');
const route = require('./route');
const path = require('path');
const app = express();
var mongoose = require('mongoose');
var dbUrl = 'mongodb+srv://root:root@cluster0.1vupopn.mongodb.net/Tina'
const { Client, LocalAuth, Buttons, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 8000;
const server = http.createServer(app);
const io = socketIO(server);
const fs = require('fs');
const delay = require('delay');
var numero = [{ tell: '' }]

const buttonShared0 = new Buttons('Tá afim de saber mais de mim?', [{ body: 'Simmm 🥰' }, { body: 'Não, obgg 😑' }], '💎', ' ');
const shared03 = 'Eu não queria fazer mais do mesmo, por isso organizei, planejei e produzi muitos conteúdos para nos conhecermos esses dias'
const buttonEnviarParaTelegramTexto = 'https://t.me/teamtinabbb23'
const buttonEnviarParaTelegram = new Buttons('Bora tá junto no Telegram? lá tem + ', [{ body: 'Lógico, me coloca pra dentro!!! 😱' }], '💎', ' ');
const buttonConhecer = new Buttons('Eu tenho certeza que você quer me conhecer, né?', [{ body: 'Pra ontem 🥰' }, { body: 'Hmm Talvez 😳' }, { body: 'Não sei 😑' }], '💎', ' ');
const buttonPrimeirosVideos = new Buttons('O que você quer saber primeiro ?', [{ body: 'Profissão 📚💻' }, { body: 'Vida Pessoal⭐🤩' }, { body: 'Projeto BBB 💎' }], '💎', ' ');
const buttonShared01 = new Buttons('Mais do que amigo né?\nFriends 🥰', [{ body: 'Ah me conta mais de você, Tina 🥰' }, { body: 'Não, valeu' }], '💎', ' ');
const buttonTacurtindo = new Buttons('Está curtindo meu conteúdo nas redes sociais? ', [{ body: 'Muitoooo 😱' }, { body: 'Ta legalzinho 😳' }, { body: 'Sei lá' }], '💎', ' ');
const buttonCurtiu = new Buttons('Curtiu? ', [{ body: 'Animalll 😱' }, { body: 'Curti 😳' }, { body: '+ ou -' }], '💎', ' ');
const buttonTacurioso = new Buttons('Quer falar do que mais Diamante? ', [{ body: 'Fala mais de vc 🤩' }, { body: 'Tem + babado? 😳' }, { body: 'Conta +' }], '💎', ' ');











//#endregion Importacoes




(
  async () => {




    //#region Conexao Banco caso precise
    mongoose.connect(dbUrl, (err) => {
      console.log('Banco ON');
    })

    //#endregion Conexao Banco caso precise


    const client = new Client({
      authStrategy: new LocalAuth({ clientId: "Tina" }),
      puppeteer: {
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: true
      }
    });




    client.initialize();
    //#region Audio
    const audioBoasVindas = await MessageMedia.fromFilePath("public/audio/Audio00 - Oi_meu_Diamante.mp3");
    const audioAssaltei = await MessageMedia.fromFilePath("public/audio/Audio01 - Ja assaltei um cara.mp3");
    const audio2 = await MessageMedia.fromFilePath("public/audio/Audio02 - Montei essa landingpage para voce me conhecer.mp3");
    const audio3 = await MessageMedia.fromFilePath("public/audio/Audio03 - Montei essa landingpage para voce me conhecer v2.mp3");
    const audio4 = await MessageMedia.fromFilePath("public/audio/Audio04 - Montei essa landingpage para voce me conhecer v3.mp3");
    const audio5 = await MessageMedia.fromFilePath("public/audio/Audio05 - O que mais você quer falar meu diamante.mp3");
    const audio6 = await MessageMedia.fromFilePath("public/audio/Audio06 - O que mais você quer falar meu diamante v2.mp3");
    const audio7 = await MessageMedia.fromFilePath("public/audio/Audio07 - Só um segundinho que tem um cortezinho sobre minha historia.mp3");
    const audio8 = await MessageMedia.fromFilePath("public/audio/Audio08 - Claro meu dimante tenho muitas coisas pra te contar.mp3");
    const audio9 = await MessageMedia.fromFilePath("public/audio/Audio09 - Ja que chegou ate aqui vamos lapidar nossa relacao.mp3");
    const audio0 = await MessageMedia.fromFilePath("public/audio/Audio10 - Eca ta me stalkeando.mp3");
    const audio11 = await MessageMedia.fromFilePath("public/audio/Audio12 - To muito famosa ne.mp3");
    const audio12 = await MessageMedia.fromFilePath("public/audio/Audio13 - Bom dia Grupoooo.mp3");
    const audio13 = await MessageMedia.fromFilePath("public/audio/Audio14 - Ola diamantes bom dia good morning.mp3");
    const audio14 = await MessageMedia.fromFilePath("public/audio/Audio16 - Quer saber tem muito mais pra te mostrar.mp3");
    const audio15 = await MessageMedia.fromFilePath("public/audio/Audio17 - Tenho muito mas muito pra te contar.mp3");
    const audio16 = await MessageMedia.fromFilePath("public/audio/Audio18 - Se voce escutar por ai que eu ja assaltei um cara esse fato e veridico.mp3");
    const videoProfissao = await MessageMedia.fromFilePath("public/video/VidaProfissional.mp4");
    const videoProjetoBBB = await MessageMedia.fromFilePath("public/video/ProjetoBBB.mp4");
    const videoPessoal = await MessageMedia.fromFilePath("public/video/VidaPessoal.mp4");
    const storytelling = await MessageMedia.fromFilePath("public/video/Storytelling.mp4");
    const Video_Podcast_Assalto = await MessageMedia.fromFilePath("public/video/Video_Podcast_Assalto.mp4")                                                 
    //#endregion Audio
    
      //#region Fotos

      const selfie00 = await MessageMedia.fromFilePath("public/images/selfie00.jpg");
      const selfie01 = await MessageMedia.fromFilePath("public/images/selfie01.jpg");
      const selfie02 = await MessageMedia.fromFilePath("public/images/selfie02.jpg");
      const selfie03 = await MessageMedia.fromFilePath("public/images/selfie03.jpg");
      const selfie04 = await MessageMedia.fromFilePath("public/images/selfie04.jpg");
      //#endregion Fotos


    client.on('message', async msg => {



      





      const chat = await msg.getChat();
      if (msg.hasMedia) {
        let imageObj = await msg.downloadMedia();
        try {
          // await client.sendMessage(msg.from, "CALMAAAE AEEE, TO CRIANDO KKK ");
          // await client.sendMessage(msg.from, imageObj, {
          //   sendMediaAsSticker: true,
          //   stickerAuthor: "tinaBot",
          //   stickerName: "fig da Tinabot",
          //   stickerCategories: ["🎉"],
          // });





          await client.sendMessage(msg.from, 'Opa, recebi seu arquivo')



        } 
        
        catch (error) {
          await client.sendMessage(msg.from, 'deu ruim, vacilei...')
        }
      }



  if (numero.filter(e => e.tel == msg.from) == 0) {    
      if (msg.type != 'buttons_response') {

        await client.sendMessage(msg.from, audioBoasVindas,{ sendAudioAsVoice: true });
        await delay(5000);
        const button = new Buttons('Me diz aí, que Diamante você é?', [{ body: 'Fã 🥰' }, { body: 'Curioso 😳' }, { body: 'Nenhum dos dois 😑' }], 'Oi meu DIAMANTE 💎', ' ');
        client.sendMessage(msg.from, button);
        console.log("Numero adicionado lista de não resposta." + msg.from)
        var adicionar = numero.push({ tel: msg.from });
        await delay(7200000)
        var primeiro1 = numero.shift();
        console.log(numero)
        console.log("Numero excluido da lista" + msg.from);
      }
    }
    else {

  
  

      switch (msg.body) {
        case 'Fã 🥰':
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio11, { sendAudioAsVoice: true });
          await delay(5000);
          const button = new Buttons('Está curtindo o *BBB*?', [{ body: 'Lógico né Tina 🤩' }, { body: 'Não muito 😥' }], 'DIAMANTE💎\nDeixa eu te perguntar', ' ');
          await client.sendMessage(msg.from, button);
          break;

        case 'Não muito 😥':
          // enviar audio 
          await client.sendMessage(msg.from, "Não está curtindo o papo e minha troca no *BBB* né?");
          await client.sendMessage(msg.from, buttonShared0);

          break;
        // Botao ta afim de saber mais de mim

        case 'Simmm 🥰':

          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio0, { sendAudioAsVoice: true });
          chat.sendStateTyping();
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
          //Video


          await client.sendMessage(msg.from, storytelling);
          //Video
          await delay(25000);
          await client.sendMessage(msg.from, buttonCurtiu);

          // Indefinidio esperando pelo marcelo
          break;

        case 'Não, obgg 😑':
          // Vc chegou até aqui, não vou deixar você ir sem lapidar essa relação que tem tudo para ser um diamente!
          chat.sendStateRecording();
          await delay(5000);
          client.sendMessage(msg.from, audio9, { sendAudioAsVoice: true });
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
          //Video


          await client.sendMessage(msg.from, storytelling);
          //Video
          await delay(25000);
          await client.sendMessage(msg.from, buttonCurtiu);


          break;
        // Indefinidio esperando pelo marcelo

        case 'Lógico né Tina 🤩':

          client.sendMessage(msg.from, buttonConhecer);
          break;
        case 'Pra ontem 🥰':
          // Indefinidio esperando pelo marcelo
          client.sendMessage(msg.from, buttonShared01);
          break;

        case 'Ah me conta mais de você, Tina 🥰':
          // Audio  client.sendMessage(msg.from, "Claro meu DIAMANTE!\n Tenho muitas coisas para contar.")
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio8, { sendAudioAsVoice: true });
          await delay(5000);
          await client.sendMessage(msg.from, buttonPrimeirosVideos);

          break;
        case 'Profissão 📚💻':
          // Enviar videos.
          await client.sendMessage(msg.from, videoProfissao);
          await delay(20000);
          await client.sendMessage(msg.from, buttonEnviarParaTelegram);
          // SELFIE SORRISÃO
          await client.sendMessage(msg.from, selfie00);

          break;

        case 'Vida Pessoal⭐🤩':
          await client.sendMessage(msg.from, videoPessoal);
          await delay(20000);
          await client.sendMessage(msg.from, buttonEnviarParaTelegram);
          // SELFIE SORRISÃO
          await client.sendMessage(msg.from, selfie01);
          break;

        case 'Projeto BBB 💎':
          // Enviar videos.
          await client.sendMessage(msg.from, videoProjetoBBB);
          await delay(20000);
          await client.sendMessage(msg.from, buttonEnviarParaTelegram);
          // SELFIE SORRISÃO
          await client.sendMessage(msg.from, selfie02);
          break;


        case 'Não, valeu':
          chat.sendStateRecording();
          await delay(5000);
          client.sendMessage(msg.from, audio9, { sendAudioAsVoice: true });
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
          //Video


          await client.sendMessage(msg.from, storytelling);
          //Video
          await delay(25000);
          await client.sendMessage(msg.from, buttonCurtiu);

          break;

        case 'Hmm Talvez 😳':
          client.sendMessage(msg.from, shared03);
          client.sendMessage(msg.from, buttonShared01)

          break;

        case 'Não sei 😑':
          client.sendMessage(msg.from, buttonShared0);
          // Botao ta afim de saber mais de mim
          break;
        case 'Simmm 🥰':
          // Indefinidio esperando pelo marcelo
          break;
        case 'Não, obgg 😑':
          // Vc chegou até aqui, não vou deixar você ir sem lapidar essa relação que tem tudo para ser um diamente!
          chat.sendStateRecording();
          await delay(5000);
          client.sendMessage(msg.from, audio9, { sendAudioAsVoice: true });


        // Indefinidio esperando pelo marcelo

        case 'Curioso 😳':
          chat.sendStateTyping();
          client.sendMessage(msg.from, "Te entendo, eu também sou, DIAMANTE!");
          client.sendMessage(msg.from, buttonTacurtindo);
          break;

        case 'Sei lá':
          chat.sendStateTyping();
          client.sendMessage(msg.from, "Sériooo ? ");
          chat.sendStateRecording();
          await delay(5000);
          client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
          //Video


          client.sendMessage(msg.from, storytelling);
          //Video
          client.sendMessage(msg.from, buttonCurtiu);
          break;
        case 'Ta legalzinho 😳':

          chat.sendStateTyping();
          client.sendMessage(msg.from, "Sériooo ? ");
          chat.sendStateRecording();
          await delay(5000);
          client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
          //Video

          await delay(5000);

          client.sendMessage(msg.from, storytelling);
          //Video
          await delay(25000);
          await client.sendMessage(msg.from, buttonCurtiu, { sendAudioAsVoice: true });


          break;

        case 'Muitoooo 😱':

          client.sendMessage(msg.from, "Senta que vem babado, spoiler de um mini podcast que gravei pra você, é só um cortezinho exclusivo.");
          client.sendMessage(msg.from, Video_Podcast_Assalto);
          chat.sendStateRecording();
          await delay(5000);

          await client.sendMessage(msg.from, audio16, { sendAudioAsVoice: true });
          await delay(9000);
          await client.sendMessage(msg.from, Video_Podcast_Assalto);
          await delay(120000);

          await client.sendMessage(msg.from, buttonEnviarParaTelegram);

          await delay(180000);
          await client.sendMessage(msg.from, );


          break;

        case 'Animalll 😱':

          await client.sendMessage(msg.from, "Senta que vem babado, spoiler de um mini podcast que gravei pra você, é só um cortezinho exclusivo.");

          

          chat.sendStateRecording();
          await delay(5000);

          await client.sendMessage(msg.from, audio16, { sendAudioAsVoice: true });
          await delay(9000);
          await client.sendMessage(msg.from, Video_Podcast_Assalto);
          await delay(120000);

          await client.sendMessage(msg.from, buttonEnviarParaTelegram);

          await delay(180000);
          await client.sendMessage(msg.from, selfie03);

          break;

        case 'Curti 😳':
          await client.sendMessage(msg.from, "Tá mais curioso ainda né?");
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio5, { sendAudioAsVoice: true });

          await delay(5000);
          await client.sendMessage(msg.from, buttonPrimeirosVideos);

          break;

        case '+ ou -':
          client.sendMessage(msg.from, shared03);
          break;

        case 'Conta +':
          client.sendMessage(msg.from, "Senta que vem babado, spoiler de um mini podcast que gravei pra você, é só um cortezinho exclusivo.")
          client.sendMessage(msg.from, Video_Podcast_Assalto);
          //audio assaltei o cara hahahaha
          chat.sendStateRecording();
          await delay(5000);

          await client.sendMessage(msg.from, audio16, { sendAudioAsVoice: true });
          await delay(9000);
          await client.sendMessage(msg.from, Video_Podcast_Assalto);
          await delay(120000);

          await client.sendMessage(msg.from, buttonEnviarParaTelegram);

          await delay(180000);
          await client.sendMessage(msg.from, selfie03);


          break;



        case 'Fala mais de vc 🤩':
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio2, { sendAudioAsVoice: true });
          await delay(2000);
          await client.sendMessage(msg.from, buttonEnviarParaTelegram);

        case 'Tem + babado? 😳':
          chat.sendStateRecording();
          await delay(5000);
          await client.sendMessage(msg.from, audio14, { sendAudioAsVoice: true });
          await delay(5000);
          await client.sendMessage(msg.from, buttonEnviarParaTelegram);
          await delay(2000);
          await client.sendMessage(msg.from, selfie04);
          break;


        case 'Nenhum dos dois 😑':
          client.sendMessage(msg.from, buttonShared0);

          break;

        case 'Lógico, me coloca pra dentro!!! 😱':
          client.sendMessage(msg.from, "É uma honra tê-lo/a nessa verdadeira jornada de um diamante em construção. Muita coisa vai acontecer até que a nossa #diamanTINA seja lapidada… E você vai acompanhar entrando aqui\n 👇👇👇👇👇👇👇👇👇👇👇👇\n" + buttonEnviarParaTelegramTexto);

          break;

      }
      
      await delay(300000);
      
      var primeiro = numero.shift();
      console.log("Numero excluido da lista")
 
    }

    });



    io.on('connection', function (socket) {

      socket.emit('message', 'Conectando...');

      client.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
        qrcode.toDataURL(qr, (err, url) => {
          socket.emit('qr', url);
          socket.emit('message', 'QR CODE disponivel, leia-o por favor!');
        });
      });

      client.on('ready', () => {
        socket.emit('ready', 'Whatsapp está pronto!');
        socket.emit('message', 'Whatsapp está pronto!');
      });

      client.on('authenticated', () => {
        socket.emit('authenticated', 'Whatsapp está autenticado!');
        socket.emit('message', 'Whatsapp está autenticado!');
        console.log('AUTHENTICATED');
      });

      client.on('auth_failure', function (session) {
        socket.emit('message', 'Falha na autenticação, reiniciando...');
      });

      client.on('disconnected', (reason) => {
        socket.emit('message', 'Whatsapp foi disconectado!');
        client.destroy();
        client.initialize();
      });




    });








    app.set('view engine', 'ejs')

    app.use(express.static("public"))

    app.set('views', path.join(__dirname, 'views'))

    app.use(express.urlencoded({ extended: true }))

    app.use(route)




    server.listen(port, function () {
      console.log('App running on *: ' + port);
    });


  })();