const mongoose = require('mongoose');
const User = require('../models/user');
const Component = require('../models/component');

const dbName = 'RCL';
mongoose.connect(`mongodb://localhost/${dbName}`);
User.collection.drop();
const user = [
    {
        name: "Ironhack Berlin",
        email: "berlin@ironhack.com",
        pictureUrl:"http://miamiherald.typepad.com/.a/6a00d83451b26169e201b7c9445b4c970b-pi",
        github: "https://github.com/ta-web-ber",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",

    },
    {
        name: "Maxence 'Why not' Bouret",
        email: "maxence@ironhack.com",
        pictureUrl:"https://avatars1.githubusercontent.com/u/5306791?s=460&v=4",
        github: "https://github.com/mc100s/module-3-react",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "Vivian the Grumpy Face",
        email: "vivian@ironhack.com",
        pictureUrl:"https://www.google.de/search?q=grumpy+cat&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiJ4e38i6ncAhUE_qQKHYXiDmsQ_AUICygC&biw=803&bih=699#imgdii=2g-DkxzPRZ4BzM:&imgrc=IgTF4wMxDnvrrM:",
        github: "https://github.com/VivianSolide",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "Nacho con Salsa",
        email: "nacho@ironhack.com",
        pictureUrl:"https://mypricechopper.com/Frontend/Media/Recipes/img_2616_477.jpg",
        github: "https://github.com/Nachoconsalsa",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {        
        name:"Super Silvio Galli",
        email: "this.is@a.secret",
    pictureUrl:"https://avatars2.githubusercontent.com/u/15610747?s=460&v=4",
    github: "https://github.com/silvio-galli",
    hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
    salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
        
    },
    {
        name:"Elliot WTF Skadi",
        email: "lj.skadi@gmail.com",
        pictureUrl:"https://pbs.twimg.com/profile_images/3428787728/94b2fdea312be38e9c9eee8e6efb2ae3.jpeg",
        github: "https://github.com/LJSkadi",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "Jana Disasterbase",
        email: "shake.it@baby.com",
        pictureUrl:"http://anime-otakus.de/live/wp-content/uploads/2010/04/K-ON-Episode-2-11-1024x640.jpg",
        github: "https://github.com/jana-o",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "wework",
        email: "we@wework.com",
        pictureUrl:"data:image/png;base64,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",
        github: "https://github.com/totaldistaster",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {        
        name:"Nothing more than Likeable Lars Hansen",
        email: "top.secret@classified.com",
    pictureUrl:"",
    github: "https://github.com/lars1702",
    hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
    salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "Anonymous",
        email: "anonymous@anonymous.com",
        pictureUrl:"https://res.cloudinary.com/dazh9innn/image/upload/v1531253139/anonymous.png",
        github: "https://github.com/anonymous",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
    {
        name: "Steffi 'Save the world' Friedrichs",
        email: "savetheworld@asshole.com",
        pictureUrl:"https://avatars1.githubusercontent.com/u/39383291?s=400&v=4",
        github: "https://github.com/steffriedrichs",
        hashed: "b823c1c2a81c70d67f06f478bbc3bc8bda7478fbb15bee98ce8b7f6717a570225e77692d8a6425b26de53761f81c88621e1ccc9983d294e11ccc2a1f8662faf7ed308c58bc8bc853a0014600682747a4d50a8e835413925914a9d77eac2434ff1a53cd2b6ceb4d16b48b86e4c651f9cf82768550b61b4472be903e9a873195016bf6905529cd8f1233c310ed3f76438cd1c20d8894e9423dc1fae653d376b73fd0267da57cf52846c6e9eb7fa9a34f22ca6f66c25cf6bf0044bba51022a3816165178006596322cedc9ae3f049b4d2a3f2f6e550d09217ab73f074eba54a809a90200a6c7375eb6c84e88796d6f2ddac45bc76cc1f648c1eb4d7291dd2f46795b93de16f4107811c14446aea9624cb7f7cd8a5c66df29f76a0db57286b0cc60e1005ce6a71bce5fbf28476f743a8bcc72bf092cbb6d3725ed412053ba04f4e410fb41dac4f7d2df91af2a62702bb923b83ea29ea054a5d3b132f27c5d19ee83c5ba12e537dc6571241c2cc847e8d85cc2e1257d96df1f88eb5dc00d271a804a110c9248fbac67c1d167af08fe7945d2c7ebc7ad97c85b4eb1a263bb5e52162ce0c28f3305271995e993ec480732e6b1202824d0956aa950e2a729d73ebb23babadf42d94b57943ba1d6c6e00485d8dcc2e3110c15931bc2574999afea64e5bcb5fcac3c1f02d3efc05ef33f3d483df53e4b24c0486b70b2e9a2485931fa07ec9",
        salt: "eecb5b07d38989b85addd3e9fa53bd18e7f33a480651f40d88248f39361469d5",
    },
]



User.create(users)
    .then(users => {
        console.log(`Created` + user.length + `USERS`)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(`Welcome to the dark Side!`)
        mongoose.connection.close()
    });

Component.collection.drop();
const components = [
    {
        name: "React Grumpy Cat Face Converter",
        _ownerrepo:"https://github.com/VivianSolide",
        repo: "https://github.com/VivianSolide/GrumpyCatFaceConverter" ,
        npmLink: "", 
        docLink: "", 
        hashtags: ["grumy", "face", "vivian", "react"],
        tutorial:"",
        description:["This react component is a converter, which switches all grumpy cat faces with Vivians and vice verse. It works! Look at Vivian's face. It is now grumpy cat's face...in real time!"],
        license: "lübbe bastei",
    },
    {
        name: "React Maxence Bingo",
        _ownerrepo:"https://github.com/mc100s/",
        repo: "https://github.com/mc100s/module-3-react" ,
        npmLink: "", 
        docLink: "", 
        hashtags: ["why not", "This is one way of doing things", "This is a shitty example", "tada"],
        tutorial: "yes",
        description:["Our favorite Maxence's quotes in a awesome bingo game. Listen to his lecture and filter your favorite quotes of your favorite teacher. Map them, sort them, but count with the fact, that you will loose against Roberta."],
        license: "MIT",
    }
    {
        name: "React MLP Component" ,
        _ownerrepo:"https://github.com/LJSkadi",
        repo: "https://github.com/LJSkadi/MLP",
        npmLink: "", 
        docLink: "", 
        hashtags: ["fluttershy", "rainbow dash", "pinkie pie", "applejack", "twilight sparkle", "rarity"],
        tutorial:"yes",
        description:["Put your favorite pony in your react component"],
        license: "hasbro",
    }
    {
        name: "React Master",
        _ownerrepo: "https://github.com/silvio-galli",
        repo:"https://github.com/silvio-galli/ReactMaster" ,
        npmLink: "", 
        docLink: "", 
        hashtags: ["super silvio", "best coder ever"],
        tutorial:"no",
        description:["This is coded by Super Silvio. It will be so robust, that you can build a house on it."],
        license: "",
    }
    {
        name: "React Disasterbase",
        _ownerrepo:"https://github.com/jana-o",
        repo: "https://github.com/jana-o/disasterbase" ,
        npmLink: "", 
        docLink: "", 
        hashtags: ["disaster", "earthquake","vulcano"],
        tutorial:"",
        description:["This app helps you to contact your family during a disaster. In all other cases Jana drives Elliot home by car."],
        license: "",
    }
    {
        name: "Learn something",
        _ownerrepo:"https://github.com/steffriedrichs",
        repo: "https://github.com/steffriedrichs/learnsomething",
        npmLink: "", 
        docLink: "", 
        hashtags: ["learn", "make the world a better place"],
        tutorial:"yes, of course",
        description:["This app should help everybody to become friends with math. Math isn't an asshole. Math had a sad childhood and was bullied by everyone. Help math to get new friends"],
        license: "MIT",
    }
    {
        name: "React Make Meg interactive",
        _ownerrepo:"https://github.com/lars1702",
        repo: "https://github.com/lars1702/InteractiveMeg",
        npmLink: "", 
        docLink: "", 
        hashtags: [],
        tutorial:"",
        description:["This react component should make our favorite Irondog Meg interactive..Unfortunatly, this component has still a lot of bugs."],
        license: "Apple" }
    
]

Component.create(components)
    .then(components => {
        console.log(`Created ${components.length} DRIVER`)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log("Welcome to the dark Side!")
        mongoose.connection.close()
    });
