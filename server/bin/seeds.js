const mongoose = require('mongoose');
const User = require('../models/user');
const Component = require('../models/component');

const dbName = 'RCL';
mongoose.connect(`mongodb://localhost/${dbName}`);
Component.collection.drop();
User.collection.drop();

 const iH = new User({
        name: "Ironhack Berlin",
        email: "berlin@ironhack.com",
        password: "password",
        pictureUrl: "http://miamiherald.typepad.com/.a/6a00d83451b26169e201b7c9445b4c970b-pi",
        github: "https://github.com/ta-web-ber",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",

    })

  const maxence = new User(
    {
        name: "Maxence 'Why not' Bouret",
        email: "maxence@ironhack.com",
        password: "password",
        pictureUrl: "https://avatars1.githubusercontent.com/u/5306791?s=460&v=4",
        github: "https://github.com/mc100s/module-3-react",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const vivian = new User({
        name: "Vivian the Grumpy Face",
        email: "vivian@ironhack.com",
        password: "password",
        pictureUrl: "https://pbs.twimg.com/media/CsW0pmxUsAAuvEN.jpg",
        github: "https://github.com/VivianSolide",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const nacho = new User({
        name: "Nacho con Salsa",
        email: "nacho@ironhack.com",
        password: "password",
        pictureUrl: "https://mypricechopper.com/Frontend/Media/Recipes/img_2616_477.jpg",
        github: "https://github.com/Nachoconsalsa",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const silvio = new User({
        name: "Super Silvio Galli",
        email: "this.is@a.secret",
        password: "password",
        pictureUrl: "https://avatars2.githubusercontent.com/u/15610747?s=460&v=4",
        github: "https://github.com/silvio-galli",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",

    })

    const elliot = new User({
        name: "Evil Elliot Skadi",
        email: "lj.skadi@gmail.com",
        password: "password",
        pictureUrl: "https://pbs.twimg.com/profile_images/3428787728/94b2fdea312be38e9c9eee8e6efb2ae3.jpeg",
        github: "https://github.com/LJSkadi",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const jana = new User({
        name: "Jana Disasterbase",
        email: "shake.it@baby.com",
        password: "password",
        pictureUrl: "http://anime-otakus.de/live/wp-content/uploads/2010/04/K-ON-Episode-2-11-1024x640.jpg",
        github: "https://github.com/jana-o",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const wework = new User({
        name: "wework",
        email: "we@wework.com",
        password: "password",
        pictureUrl: "data:image/png;base64,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",
        github: "https://github.com/totaldistaster",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const lars = new User({
        name: "Nothing more than Likeable Lars Hansen",
        email: "top.secret@classified.com",
        password: "password",
        pictureUrl: "http://eisbaer.thomasthetankengine.de/images/pictures/larsmitfisch.jpg",
        github: "https://github.com/lars1702",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const ano = new User ({
        name: "Anonymous",
        email: "anonymous@anonymous.com",
        password: "password",
        pictureUrl: "https://res.cloudinary.com/dazh9innn/image/upload/v1531253139/anonymous.png",
        github: "https://github.com/anonymous",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })

    const steffi = new User ({
        name: "Steffi 'Save the world' Friedrichs",
        email: "savetheworld@asshole.com",
        password: "password",
        pictureUrl: "https://avatars1.githubusercontent.com/u/39383291?s=400&v=4",
        github: "https://github.com/steffriedrichs",
        hashed: "fab59127c9ffa7fea8d1aefa1375896c562676583da4bdf2dd32ef61d5704b7fd207b2b9d5c1158b7269ff00fa192231c721bca98eaa5de1927b2ef54119cab23dd6d22143692300bb77c93599c97c5333e23799ce8fbd86ebcb3b93555a165ae5b99661623e118ac6d8fbf15735ee80e85460cb9c9fe276bd942f364a82e8f812690ab039d3f0eaf03b9122d078a7a2a95dc61206ed8fb30e096e9c71361db6bf0237922fe9888478c1643090b8b920ac6650a5c7e160a565fd6281391b6e67c15b4fe9f6200a1de05976fab276b048b2183bfbaab2f9465fe9ae1d0243ed916c0db40a6a0ad95264b27967871c3c7f3d63bcb8902bb0b11382298bd803bbb1c1c32453c0739a3ca49cda7857844130335af1788eaa090c7be471b61ef894be8309edce6e514b2127154dff4cc998073a1deb4387e85d56a8a2fb3447c54fdbfaab05099d7ed578fb9a7c2e19cb315aaed6fcd1154ea3fa0afe3ee38183287ea1ea37e93cdf58ab78620d2471542ab3596578308813cb4f9957a79f15f9990eecc56df26fbe44baf78ed8e823f2a488707e75f9993b8520b68293a7a049958fffc5e8cdb3f2fd80479ca6f790549e8a8849a6c02a1636f3bc848573ba05aea63165bd9b7b52a0cf0bd675cdbd8c1152a5931c05bffb2e7b4f43bdcd646720206bac9341d560fda13f7271eb1b048a5fb6ca0697359c26de55c72b7f8b3bed5b",
        salt: "9dd434c3e25c4ac18c4eac7f73bf5aa6ff20d1f7571a92e51074b01fdc91ef03",
    })




const c1 = new Component(
    {
        name: "React Grumpy Cat Face Converter",
        _owner: vivian._id,
        ownerrepo: "https://github.com/VivianSolide",
        repo: "https://github.com/VivianSolide/GrumpyCatFaceConverter",
        npmLink: "",
        docLink: "",
        hashtags: ["grumy", "face", "vivian", "react"],
        tutorial: "",
        description: ["This react component is a converter, which switches all grumpy cat faces with Vivians and vice verse. It works! Look at Vivian's face. It is now grumpy cat's face...in real time!"],
        license: "lübbe bastei",
    }
)

const c2 = new Component(
    {
        name: "React Maxence Bingo",
        _owner: maxence._id,
        ownerrepo: "https://github.com/mc100s/",
        repo: "https://github.com/mc100s/module-3-react",
        npmLink: "",
        docLink: "",
        hashtags: ["why not", "This is one way of doing things", "This is a shitty example", "tada"],
        tutorial: "yes",
        description: ["Our favorite Maxence's quotes in a awesome bingo game. Listen to his lecture and filter your favorite quotes of your favorite teacher. Map them, sort them, but count with the fact, that you will loose against Roberta."],
        license: "MIT",
    } 
)

const c3 = new Component(
    {
        name: "React MLP Component",
        _owner: elliot._id,
        ownerrepo: "https://github.com/LJSkadi",
        repo: "https://github.com/LJSkadi/MLP",
        npmLink: "",
        docLink: "",
        hashtags: ["fluttershy", "rainbow dash", "pinkie pie", "applejack", "twilight sparkle", "rarity"],
        tutorial: "yes",
        description: ["Put your favorite pony in your react component"],
        license: "hasbro",
    }
)

const c4 = new Component(
    {
        name: "React Master",
        ownerrepo: "https://github.com/silvio-galli",
        _owner: silvio._id,
        repo: "https://github.com/silvio-galli/ReactMaster",
        npmLink: "",
        docLink: "",
        hashtags: ["super silvio", "best coder ever"],
        tutorial: "no",
        description: ["This is coded by Super Silvio. It will be so robust, that you can build a house on it."],
        license: "",
    }
)

const c5 = new Component(
    {
        name: "React Disasterbase",
        ownerrepo: "https://github.com/jana-o",
        repo: "https://github.com/jana-o/disasterbase",
        _owner: jana._id,
        npmLink: "",
        docLink: "",
        hashtags: ["disaster", "earthquake", "vulcano"],
        tutorial: "",
        description: ["This app helps you to contact your family during a disaster. In all other cases Jana drives Elliot home by car."],
        license: "",
    }
)
const c6 = new Component(
    {
        name: "Learn something",
        ownerrepo: "https://github.com/steffriedrichs",
        repo: "https://github.com/steffriedrichs/learnsomething",
        _owner: steffi._id,
        npmLink: "",
        docLink: "",
        hashtags: ["learn", "make the world a better place"],
        tutorial: "yes, of course",
        description: ["This app should help everybody to become friends with math. Math isn't an asshole. Math had a sad childhood and was bullied by everyone. Help math to get new friends"],
        license: "MIT",
    }
)
const c7 = new Component(
    {
        name: "React Make Meg interactive",
        ownerrepo: "https://github.com/lars1702",
        repo: "https://github.com/lars1702/InteractiveMeg",
        _owner: lars._id,
        npmLink: "",
        docLink: "",
        hashtags: ["react", "meg", "active"],
        tutorial: "",
        description: ["This react component should make our favorite Irondog Meg interactive..Unfortunatly, this component has still a lot of bugs."],
        license: "Apple"
    }
)

const c8 = new Component(
    {
        name: "React Construction",
        ownerrepo: "https://github.com/totaldisaster",
        repo: "https://github.com/totaldisaster/underconstruction",
        _owner: wework._id,
        npmLink: "",
        docLink: "",
        hashtags: [],
        tutorial: "",
        description: ["This component will always be under construction, but it will be finished in 2017."],
        license: "Schlecker"
    }
)


    Promise.all(
        [
        iH.save(),
        maxence.save(),
        vivian.save(),
        nacho.save(),
        wework.save(),
        elliot.save(),
        silvio.save(),
        jana.save(),
        steffi.save(),
        lars.save(),
        ano.save(),
        ]
      )
      .then( ( result ) => {
          Promise.all([
            c1.save(),
            c2.save(),
            c3.save(),
            c4.save(),
            c5.save(),
            c6.save(),
            c7.save(),
            c8.save(),
          ])
          .then( ( result ) => {
        console.log(`Created ${result}`)
      
        setTimeout( () => {
          mongoose.disconnect();
        }, 12000)     
      })
      .catch( err => { throw err } )
    })
    .catch( err => { throw err } );