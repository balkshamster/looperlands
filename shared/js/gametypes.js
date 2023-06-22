
Types = {
    Messages: {
        HELLO: 0,
        WELCOME: 1,
        SPAWN: 2,
        DESPAWN: 3,
        MOVE: 4,
        LOOTMOVE: 5,
        AGGRO: 6,
        ATTACK: 7,
        HIT: 8,
        HURT: 9,
        HEALTH: 10,
        CHAT: 11,
        LOOT: 12,
        EQUIP: 13,
        DROP: 14,
        TELEPORT: 15,
        DAMAGE: 16,
        POPULATION: 17,
        KILL: 18,
        LIST: 19,
        WHO: 20,
        ZONE: 21,
        DESTROY: 22,
        HP: 23,
        BLINK: 24,
        OPEN: 25,
        CHECK: 26,
        EQUIP_INVENTORY: 27
    },
    
    Entities: {
        WARRIOR: 1,
        
        // Mobs
        RAT: 2,
        SKELETON: 3,
        GOBLIN: 4,
        OGRE: 5,
        SPECTRE: 6,
        CRAB: 7,
        BAT: 8,
        WIZARD: 9,
        EYE: 10,
        SNAKE: 11,
        SKELETON2: 12,
        BOSS: 13,
        DEATHKNIGHT: 14,
        
        // Armors
        FIREFOX: 20,
        CLOTHARMOR: 21,
        LEATHERARMOR: 22,
        MAILARMOR: 23,
        PLATEARMOR: 24,
        REDARMOR: 25,
        GOLDENARMOR: 26,
        
        // Objects
        FLASK: 35,
        BURGER: 36,
        CHEST: 37,
        FIREPOTION: 38,
        CAKE: 39,
        
        // NPCs
        GUARD: 40,
        KING: 41,
        KING2: 1000041,        
        OCTOCAT: 42,
        VILLAGEGIRL: 43,
        VILLAGER: 44,
        PRIEST: 45,
        SCIENTIST: 46,
        AGENT: 47,
        RICK: 48,
        NYAN: 49,
        SORCERER: 50,
        BEACHNPC: 51,
        FORESTNPC: 52,
        DESERTNPC: 53,
        LAVANPC: 54,
        CODER: 55,
        GOOSE: 1000042,
        TANASHI: 1000043,
        
        // Weapons
        SWORD1: 60,
        SWORD2: 61,
        REDSWORD: 62,
        GOLDENSWORD: 63,
        MORNINGSTAR: 64,
        AXE: 65,
        BLUESWORD: 66,

        // NFTs
        NFT_c762bf80c40453b66f5eb91a99a5a84731c3cc83e1bcadaa9c62e2e59e19e4f6: 70,
        NFT_38278eacc7d1c86fdbc85d798dca146fbca59a2e5e567dc15898ce2edac21f5f: 71,
        NFT_d2fb1ad9308803ea4df2ba6b1fe0930ad4d6443b3ac6468eaedbc9e2c214e57a: 72,
        NFT_b03847a6a7c25e8f52016c0ffca8e7d608593f004c17f3519506b4d0a42d61bf: 73,
        NFT_3c1fa300af2deef916ade14eb6ca68dd14913e4adc4a4d174ea98f1f878ef733: 74,
        NFT_cfd9a7ae82698da0da065befb2b39f3bfe3eca509febdb9da865fafd4d98e543: 75,
        NFT_b131df57290a3c656d6cf35b10e4d342e147345ca01c9cf34ad13205d0e43e50: 76,
        NFT_9f051ae4b657a07bc82d8d1fac5a5263ca0cb33e3be717c29814d06fa4860487: 77,
        NFT_01346618000000000000000002386f26fc10000000000000000000000000037b: 78,
        NFT_82e68ef0bee270d142ae3ec162490c0fa2e88a273bb768687f2fee4f6930c741: 79,
        NFT_17222e7f16e5fb69bbc410f8c093cf92904ab8d2e4681a6bc9dee01900d8e6b7: 80,
        NFT_2bab6c4b9cbb8eddb94614bb05e2b4b67b229e6e94ea7b152d74d1a1e2e21360: 81,
        NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f: 82,
        NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f: 83,
        NFT_2530bd882f78be80636b02467386e272f87bdb27d6762b41bd09dd71407bdcb1: 84,
        NFT_5454cad3ebe151e92b53083d0ae6f8a03273fd86c4af33d1ef2991bbe8dae198: 85,
        NFT_20fdfc6fa49d9001f154ef03129ba66a6bc606489631fbc181751bd17fb1d520: 86,
        NFT_426754b71f8ac324122c64c541a99e1888602a06c2e7a203568d3a9fb0281263: 87,
        NFT_691b67e4466879e4de582f765b85a5bbc1cacc087b9c0f410a86f00d32081ea7: 88,
        NFT_ee40d44f7847999cb4d7d1e3fc7681e1390fc5acc5e835d1e8f0ed717d4dc200: 89,
        NFT_d1570dc356007d297c8ee63716d38d264a621516f44e3305839fc29ca36e2ce2: 90,
        NFT_b494d78bf1bfd47fc5041f6798393d9d1ce2583b83c7f417c48ba42898a4dfb9: 91,
        NFT_890b68d8d9de6f5663ee1708f397dd3e8951a1aafeaa4f813f1c4dae1aa81b3e: 92,
        NFT_bfdb6d8dcfd68eb606e0e4dd2b134862ab8904fb91b867a455ea7d25a0b97689: 93,
        NFT_ec837cab68f84faae57d74b7901299f5b44776a7e90e85aae010db1408c4d5c3: 94,
        NFT_27c27cc825e7791664c10d7012b9ba9a6e2b1ded166a4e1bd49158fecc7e14cf: 95,
        NFT_eac17febcaf13e4f2a07aab923d7e527a8414712b9f6732465970e16853f0daa: 96,
        NFT_119a557bf20a9105348c45deda0f96308bd6b20c1680dbcf7ac3c0439e96fc08: 97,
        NFT_dd722e34afdc01212b4d839a0a33ab351322ddeff41f78cf1064c36c0f44977a: 98,
        NFT_9c5a99f779cca31efcf5d6235b07c485f97f598838bbeb3c37f739f800af8fd5: 99,
        NFT_5e0f26b192f798ca594fa48d6a0820a1f8fce40df49ddfed75d61020f952ee5f: 100,
        NFT_fab0c923caef4d9666e41097512bb02ed1283afa0199e10031a0a24a00008daa: 101,
        NFT_01348c02000000000000000002386f26fc1000000000000000000000000001d6: 102,
        NFT_aa161f880bb5cbed5813fed087358be7a44f889692e2baea3cc86c978897f0b3: 103,
        NFT_2ed54cfb0a51b0c5a66348f7efbe78b61776a4e0252901763121242888a3be44: 104,
        NFT_2bc716999d2ebea388c39b26ed6e66066d98c76412318f7f5e1c92f27f1a434a: 105,
        NFT_afcac9c2899f3c300a8e302057aa1740fda5544846a0bd026e041b75b8c50c77: 106,
        NFT_602543f900cdec7536e01121bae04d98cf5f26dc04fdd2e65f45dcb80ccc7b52: 107,
        NFT_8bf0ca782646556769462a2e111e63acbacba43bb50e4fff8cebd04ebfd012c4: 108,
        NFT_72021bcc7f2688a31f25a0e409423c313f527a21fd06375147db912de5d25af9: 109,
        NFT_bffd3956245711a307883001df9eccf361eb29577e4cfc9eb14044b32bdc0cc8: 110,
        NFT_2b6563700e47217141759e87138a36b3c424860b599f4edee04476f1cf287d7d: 111,
        NFT_4232658f50f5f154784e3a896aef114eb8c88f0446df68e1a0155249fccb84bf: 112,
        NFT_968e6d77eb1f01c8f6f0963c15d22c51c5972e5e903dd58a52f307c670afabba: 113,
        NFT_c3f9e6e0285aef34a3383f1e4e9dd81400f047f29ca101f7f3186676eba4090a: 114,
        NFT_e306ddc52e528b7bca4a5a5ab111bc90f4184d6c78858e25de62070c9df275bc: 115,
        NFT_604f23674ed95c65f8f71cf1fe70f19edbeaed55a0ec20906f42d10e2405f68c: 116,
        NFT_894b121ef3fa401aced39ae51cb2fefd24afdb1c96d8de22f8a5c233d3f4b304: 117,
        NFT_147aabee5edf37ae03e40c22553d7dd7fe1ec74201f304c74766658afb8ed6ec: 118,
        NFT_f6e3fd53b09c5bb4794a934e8a77f0cb7dc85e3da702f14923cad0493b6c7fd6: 119,
        NFT_7bda27fa0906a95f7159fa664719705d74932343ea29667fb7be4d648203eb29: 120,
        NFT_36c33534840bfb6e9a5eb14c419f4def0a7869d48fe0877cce881a1440a03758: 121,
        NFT_28873816c3d11391f97a5f70005a05acbad0c3a264026548a826b3bcb957820a: 122,
        NFT_2b55be5f9f0c72236a8d7e4922719f6a783d368021bac81b815737fb3b65893e: 123,
        NFT_59d24c70d2310fccf9d294bbd6c7e7368a0a098b05bb2dd981d2a97d8881aefe: 124,
        NFT_22e07e494cf1802cd2d5593df40c22cd2a2d34716e0a82d370408d5cb0072f84: 125,
        NFT_ea0b89688f49bd4e18a788e2bbfe2aaec34abe5a5c160bd98fb5389875a94fcb: 126,
        NFT_48963675d6796a51d8c4d2ce1db7e29b9f068f1c335b3aa7be163593cf1d6fb7: 127,
        NFT_e0da11e21877748f3821344cb15744a5572fa1cddefa665098db7ea6f44af747: 128,
        NFT_cf005295ee67845a9e43a05e196269677f5b62dd82dcb5b67dd3a836faa1e06d: 129,
        NFT_bfeb604f9c3b49e7e5962964f49200b25ca7463b1b0868509e37ae3a3f5497f0: 130,
        NFT_153269d1418275b40a0f2019def17aeef133d3fc628db717d8643b09111ea287: 131,
        NFT_9a1a0dab20f6b3b07f250edfd8ea0812bf6347cf4d4b1580a9be05b5cd895b55: 132,
        NFT_7b2fb5b960273ac27a6335ef53e7bf64db642e71081dd2b7597fd0dd1821bdad: 133,
        NFT_302ff52132d5729f608e6d5d0daf1c850f60237d2078c5aca17f43df507c830b: 134,
        NFT_aa40bd2c34935969c370d5de419530fd63976a3cfa7919d2b30eadb0d32cd641: 135,
        NFT_2684093e8291c34fc6eecf8ac635fb625d34729f71ca31810b475f1c8bc322ea: 136,
        NFT_3a5a1e0305d3badb725085465b307366a4f15fd26eb81cfcb4574857db4d1460: 137,
        NFT_ba676e35ebaeda5cdab7765ac1e4523973a1cf12e1cce416544d2c1be26c23c2: 138,
        NFT_cee6596166b80f7a75813673dadc7508d4994c54e49b9740957233170c7d832a: 139,
        NFT_e2c610a40bf59f9b5cb3bc646bc767e53200c25a26940d1f9c8f5e1dd159726c: 140,
        NFT_ef3c4d2b065f9a59adde2424f0cb8a02f8bf77655986e2c936abbba4bac4ae78: 141,
        NFT_47718ab5f343e019944a3ba0afe611a7fc43d4c4820830b0568083e199d384a9: 142,
        NFT_214c5433256da27fd26f839588340d8cf965cfdcc1f7e9ca7e53c94718466b0e: 143,
        NFT_efbc96ecaa696501324a0802fa1da688df1dff6c8ea8e3c91e8cd6fb6917e02b: 144,
        NFT_fa754d960bad700b8924942d2bb2a955440a8a54f72971de162f081c30db7465: 145,
        NFT_3e6fe4c9853bc8f3e55d9debde9f2a22952e349cae47d3df3110ff1e604b3c77: 146,
        NFT_35f875a25ecbe801528e6819ef7e203434d209784c7b3bea544c4b9396a5b0e7: 147,
        NFT_d404b2f3e2db47a28e2d43e77bd33d471589499c4ddd1770aacc32fa472bf8ad: 148,
        NFT_0d5672a0b87858af764cc1169caee403e405692265e54eb90253e22e74132085: 149,
        NFT_89343e3a4053cccdab06c300954167b2f916a257042bf64a0014099faecaa260: 150,
        NFT_750b4661b3dddf0d39d5c32f95e1ef8fe030a37d695c069364a6f85cd8034e67: 151,
        NFT_e2bcc3eeadb9eb414845b645446739583b5b9d18a6f014c36d3bccd0eec03bdf: 152,
        NFT_aa8119ad254b4a6b205e65e7dc3d5b7f75d8755362d22908ae7197313daff633: 153,
        NFT_cddc6c916c0939d98ed089cfcc4ba4f894aeffc1907f881d7dabbc999f2e13db: 154,
        NFT_0351abda19f8eb0279bc255a58a3577f8a9a47f352b7345d6c9f5faf34c2740d: 155,
        NFT_34d456b74f6be2c43ede9cfe3fa3a491eff4a295fab61bcaec3b173e496a3983: 156,
        NFT_124e174b52fcd27b1efd81ab98b27855f54e3f427baa6bc1747fe7856e44fefd: 157,
        NFT_8ba174b413a393aa5a592dd55a73479225e60fc7b92f206f1c988a3d0684aa86: 158,
        NFT_9dfb26ba489f21a2475390d9e4d26a81963f37724b2e1136ebed14a0aeb7952b: 159,
        NFT_896dcb352109b89f48d57021fe18d05cf7a9d7b205e95418dc01f61e06b7e191: 160,
        NFT_fe3851231104c5ea2261dd91a3b82695fb54f68e2903b5de968a5c33d7e74620: 161,
        NFT_d7efda019835092c1a11de7f43988a5a0ad18910be7bee604cd80d61fa4ffd87: 162,
        NFT_f7a0759682ac4f177604ac4788696c4c320e417d514e5aed87d0ed0ba7fe69a0: 163,
        NFT_631b5588073a40a7f8174266890e2e472e191c1371e76246e3191157c83098b5: 164,
        NFT_a4a8f75b0af1a2af46d27c8f1cd33dc35ef2263c1a38f3484f3b8bcac1d79449: 165,
        NFT_3cd1c3cf7ad46a9acfd0c44ae4bbe65c8617b83a078f35c6b0f3120937b87f5a: 166,
        NFT_19de6eeb9d8f6db153994fd95015eba2d586c724b0fc9c40c44399624edcf800: 167,
        NFT_19daf22f697e7159eb9020b88e75b090f1bf48bf5602d01572bb91259700cbc4: 168,
        NFT_735b5160c52a00049a236af4ec2a48dd6ed92e0c3e6f75927f45e743f94e784f: 169,
        NFT_b534b341c57a0aa38d5a70363711ae76a3aed747e02dbb31f900e9a08c98ebf5: 170,
        NFT_09db2741679599882e178ef134690cf7434752461a93cf7af43d1da2a06f9354: 171,
        NFT_9c0cca7ed83a1148a395131534923cec2b5b998e81c9c858ab70d28492d07b41: 172,
        NFT_847e4d20ed60b512d606a011fffbc89fb05ba1db8b6b2a5c44361f5c9f57c63f: 173,
        NFT_0ef29e6d04e05fd501e2fdae537226800ed37e231cbcdd3df375a94bea3414ff: 174,
        NFT_fa2898e0a8d45fc6bfcb5375bddc3a0e33302ed46f6d744de696a7479dde80ae: 175,
        NFT_73b6fc1d863e91526ff397c395e71e073920b024ab05c4f65c94b7a627ea03e1: 176,
        NFT_7794f738b23698bd26cb654b2452a5e2f9fe6a927465e35d6f5e72c7fc7b36e9: 177,
        NFT_0b155c388138c2fa5244dbd0b1dbd9e8790fd3e9068eb3bad9c47ea7e2187bd0: 178,
        NFT_c3d8e0fae376287818479d7df0a78827c73968ad27fc2578c2a31c1ce8a54986: 179,
        NFT_8436b143a690881c0d5f89c157287a4ea53476021ae1dd15669fe0bf253e5b18: 180,
        NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee: 181,
        NFT_3de4d3e7aa4d280fae7b3b79832204fb5b0fbd78d3170d7f600bf12908378eb2: 182,
        NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee: 183,
        NFT_33d866318659169f2183641e2890f7bc5ffa750f0a89bc70ee967b7b5db4eff6: 184,
        NFT_da7cd78f666a0c355fb136f78afb112db1babda7cecab64a87ffb4e11dfea69f: 185,
        NFT_4082aabb234aaf694a740dd4c981da3abd69c897766a7cacb44b6b687ac2190c: 186,
        NFT_c57d08ad0bb352bad9157b1c9eee33d058e4f0b7e0c772e513789e64d8c4d628: 187,
        NFT_31d570095756836f78e9b7ca5c3f25f2ecab74ebcc5bec80e123ce72f391d1f0: 188,
        NFT_5a8af0a53dc5d3a6edddee5dc51b0da758fe4170b0d759a30f3986929488445b: 189,
        NFT_9d0651b997a16797e3d8f71afa5e77006cf6bb07e5a798278626be26b41c3cd2: 190,
        NFT_41e39830dd55abde84f5d735be661a5adc985e04ea1e250493c985b93eb5b2e7: 191,
        NFT_91808e0ac1a46592eac31bfe026a78738fed0fdd5b05cfcda2ceecd552cade62: 192,
        NFT_f767cbbd020c062ce87468dc1061cf619adcfe63242eb72912ef99b0c15a67b4: 193,
        NFT_d5aa81a19e3bd8bf6f5262f61460f8f4261073ba72bfa164743bbe5c135bbd25: 194,
        NFT_c8e702df5158067eac3a12c66f003c11aec6efef75cb1759e010da57433c5e0e: 195,
        NFT_f192b0dc4acb97881b42ab83af4f5648d552c1d04b4a2f5463b378aaee9f8088: 196,
        NFT_50b326049812ee71d7c35d8672d8d09c1c312a79449a902c9270b5a718bbb8ad: 197,
        NFT_072c6ceaa62367e87160215d9cf948e2cb4e1e8c6ef90417674e8aaa01642982: 198,
        NFT_97189cd910d1d8a629d03823ce273a89e20ba21d66f127a993a9230c88dacd68: 199,
        NFT_500e32bf46bc7f24f3c91bb43a8d5b175803088509f609fb91ee7928c8abc202: 200,
        NFT_ab5fcbec6b77b96bf8f985d9d3b2ccf02e6d573850f43444286de6d598ad4295: 201,
        NFT_ff6ba455559bcda5c8c31432a26787cac0187def385b73f59a92ba7d98dab366: 202,
        NFT_f7267a1c4d02d8f463c1adfe01362b2214a2f888422b32216fcf4006d7534d79: 203,
        NFT_130ab907c0226dc270942b1caf7c1c61810960770afdbead91cd4e83b14fec52: 204,
        NFT_6f3e97d4a638877ec87265ed37c1995427f7cff74a1f13463bfc7b7cb4e07aae: 205,
        NFT_f467e9426427f20f9b663ca00ad963d4ea6a70e21f36428c59669d837ba81270: 206,
        NFT_3610fdb9e538de28535d3455e22280a1f7d89cb14bc399fe8c7eafbe80866536: 207,
        NFT_f75e77cd96c17c0cbd93ac9228a7e245c865c17bdd91c0da977e4c16afcd520a: 208,
        NFT_ac675ef13fea49ab184f4668ed19da3b9e0b8f0e4d785bbc37c68c7fbf8b2559: 209,
        NFT_bfc4ae6203a71f501d5c6f2851576b2ff5ce4e6a7f1d9695bed271dea5b9de1d: 210,
        NFT_90db15a10d21eab9c715fedd003be1a732012c5dc4d75818887ab72f1d7362b5: 211,
        NFT_1182b01e29cd9e91d1e6422ed4600191017df9014b3c1c46067fc787a42a3fe2: 212,
        NFT_1b5a581dbea36bbf6bc4da25b2eab413a7339581ce07fad33beb5bf07df30d45: 213 // @lastid@
        //@nextIdLine@
    },
    
    Orientations: {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }
};

var kinds = {
    warrior: [Types.Entities.WARRIOR, "player"],
    
    rat: [Types.Entities.RAT, "mob"],
    skeleton: [Types.Entities.SKELETON , "mob"],
    goblin: [Types.Entities.GOBLIN, "mob"],
    ogre: [Types.Entities.OGRE, "mob"],
    spectre: [Types.Entities.SPECTRE, "mob"],
    deathknight: [Types.Entities.DEATHKNIGHT, "mob"],
    crab: [Types.Entities.CRAB, "mob"],
    snake: [Types.Entities.SNAKE, "mob"],
    bat: [Types.Entities.BAT, "mob"],
    wizard: [Types.Entities.WIZARD, "mob"],
    eye: [Types.Entities.EYE, "mob"],
    skeleton2: [Types.Entities.SKELETON2, "mob"],
    boss: [Types.Entities.BOSS, "mob"],

    sword1: [Types.Entities.SWORD1, "weapon"],
    sword2: [Types.Entities.SWORD2, "weapon"],
    axe: [Types.Entities.AXE, "weapon"],
    redsword: [Types.Entities.REDSWORD, "weapon"],
    bluesword: [Types.Entities.BLUESWORD, "weapon"],
    goldensword: [Types.Entities.GOLDENSWORD, "weapon"],
    morningstar: [Types.Entities.MORNINGSTAR, "weapon"],
    
    firefox: [Types.Entities.FIREFOX, "armor"],
    clotharmor: [Types.Entities.CLOTHARMOR, "armor"],
    leatherarmor: [Types.Entities.LEATHERARMOR, "armor"],
    mailarmor: [Types.Entities.MAILARMOR, "armor"],
    platearmor: [Types.Entities.PLATEARMOR, "armor"],
    redarmor: [Types.Entities.REDARMOR, "armor"],
    goldenarmor: [Types.Entities.GOLDENARMOR, "armor"],

    flask: [Types.Entities.FLASK, "object"],
    cake: [Types.Entities.CAKE, "object"],
    burger: [Types.Entities.BURGER, "object"],
    chest: [Types.Entities.CHEST, "object"],
    firepotion: [Types.Entities.FIREPOTION, "object"],

    guard: [Types.Entities.GUARD, "npc"],
    villagegirl: [Types.Entities.VILLAGEGIRL, "npc"],
    villager: [Types.Entities.VILLAGER, "npc"],
    coder: [Types.Entities.CODER, "npc"],
    scientist: [Types.Entities.SCIENTIST, "npc"],
    priest: [Types.Entities.PRIEST, "npc"],
    king: [Types.Entities.KING, "npc"],
    king2: [Types.Entities.KING2, "npc"],
    rick: [Types.Entities.RICK, "npc"],
    nyan: [Types.Entities.NYAN, "npc"],
    sorcerer: [Types.Entities.SORCERER, "npc"],
    agent: [Types.Entities.AGENT, "npc"],
    octocat: [Types.Entities.OCTOCAT, "npc"],
    beachnpc: [Types.Entities.BEACHNPC, "npc"],
    forestnpc: [Types.Entities.FORESTNPC, "npc"],
    desertnpc: [Types.Entities.DESERTNPC, "npc"],
    lavanpc: [Types.Entities.LAVANPC, "npc"],
    goose: [Types.Entities.GOOSE, "npc"],
    tanashi: [Types.Entities.TANASHI, "npc"],

    //NFT
    NFT_c762bf80c40453b66f5eb91a99a5a84731c3cc83e1bcadaa9c62e2e59e19e4f6: [Types.Entities.NFT_c762bf80c40453b66f5eb91a99a5a84731c3cc83e1bcadaa9c62e2e59e19e4f6, "armor"],
    NFT_38278eacc7d1c86fdbc85d798dca146fbca59a2e5e567dc15898ce2edac21f5f: [Types.Entities.NFT_38278eacc7d1c86fdbc85d798dca146fbca59a2e5e567dc15898ce2edac21f5f, "armor"],
    NFT_d2fb1ad9308803ea4df2ba6b1fe0930ad4d6443b3ac6468eaedbc9e2c214e57a: [Types.Entities.NFT_d2fb1ad9308803ea4df2ba6b1fe0930ad4d6443b3ac6468eaedbc9e2c214e57a, "armor"],
    NFT_b03847a6a7c25e8f52016c0ffca8e7d608593f004c17f3519506b4d0a42d61bf: [Types.Entities.NFT_b03847a6a7c25e8f52016c0ffca8e7d608593f004c17f3519506b4d0a42d61bf, "armor"],
    NFT_3c1fa300af2deef916ade14eb6ca68dd14913e4adc4a4d174ea98f1f878ef733: [Types.Entities.NFT_3c1fa300af2deef916ade14eb6ca68dd14913e4adc4a4d174ea98f1f878ef733, "armor"],
    NFT_cfd9a7ae82698da0da065befb2b39f3bfe3eca509febdb9da865fafd4d98e543: [Types.Entities.NFT_cfd9a7ae82698da0da065befb2b39f3bfe3eca509febdb9da865fafd4d98e543, "armor"],
    NFT_b131df57290a3c656d6cf35b10e4d342e147345ca01c9cf34ad13205d0e43e50: [Types.Entities.NFT_b131df57290a3c656d6cf35b10e4d342e147345ca01c9cf34ad13205d0e43e50, "armor"],
    NFT_9f051ae4b657a07bc82d8d1fac5a5263ca0cb33e3be717c29814d06fa4860487: [Types.Entities.NFT_9f051ae4b657a07bc82d8d1fac5a5263ca0cb33e3be717c29814d06fa4860487, "armor"],
    NFT_01346618000000000000000002386f26fc10000000000000000000000000037b: [Types.Entities.NFT_01346618000000000000000002386f26fc10000000000000000000000000037b, "armor"],
    NFT_82e68ef0bee270d142ae3ec162490c0fa2e88a273bb768687f2fee4f6930c741: [Types.Entities.NFT_82e68ef0bee270d142ae3ec162490c0fa2e88a273bb768687f2fee4f6930c741, "weapon"],
    NFT_17222e7f16e5fb69bbc410f8c093cf92904ab8d2e4681a6bc9dee01900d8e6b7: [Types.Entities.NFT_17222e7f16e5fb69bbc410f8c093cf92904ab8d2e4681a6bc9dee01900d8e6b7, "armor"],
    NFT_2bab6c4b9cbb8eddb94614bb05e2b4b67b229e6e94ea7b152d74d1a1e2e21360: [Types.Entities.NFT_2bab6c4b9cbb8eddb94614bb05e2b4b67b229e6e94ea7b152d74d1a1e2e21360, "armor"],
    NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f: [Types.Entities.NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f, "armor"],
    NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f: [Types.Entities.NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f, "armor"],
    NFT_2530bd882f78be80636b02467386e272f87bdb27d6762b41bd09dd71407bdcb1: [Types.Entities.NFT_2530bd882f78be80636b02467386e272f87bdb27d6762b41bd09dd71407bdcb1, "armor"],
    NFT_5454cad3ebe151e92b53083d0ae6f8a03273fd86c4af33d1ef2991bbe8dae198: [Types.Entities.NFT_5454cad3ebe151e92b53083d0ae6f8a03273fd86c4af33d1ef2991bbe8dae198, "armor"],
    NFT_20fdfc6fa49d9001f154ef03129ba66a6bc606489631fbc181751bd17fb1d520: [Types.Entities.NFT_20fdfc6fa49d9001f154ef03129ba66a6bc606489631fbc181751bd17fb1d520, "armor"],
    NFT_426754b71f8ac324122c64c541a99e1888602a06c2e7a203568d3a9fb0281263: [Types.Entities.NFT_426754b71f8ac324122c64c541a99e1888602a06c2e7a203568d3a9fb0281263, "armor"],
    NFT_691b67e4466879e4de582f765b85a5bbc1cacc087b9c0f410a86f00d32081ea7: [Types.Entities.NFT_691b67e4466879e4de582f765b85a5bbc1cacc087b9c0f410a86f00d32081ea7, "armor"],
    NFT_ee40d44f7847999cb4d7d1e3fc7681e1390fc5acc5e835d1e8f0ed717d4dc200: [Types.Entities.NFT_ee40d44f7847999cb4d7d1e3fc7681e1390fc5acc5e835d1e8f0ed717d4dc200, "armor"],
    NFT_d1570dc356007d297c8ee63716d38d264a621516f44e3305839fc29ca36e2ce2: [Types.Entities.NFT_d1570dc356007d297c8ee63716d38d264a621516f44e3305839fc29ca36e2ce2, "armor"],
    NFT_b494d78bf1bfd47fc5041f6798393d9d1ce2583b83c7f417c48ba42898a4dfb9: [Types.Entities.NFT_b494d78bf1bfd47fc5041f6798393d9d1ce2583b83c7f417c48ba42898a4dfb9, "armor"],
    NFT_890b68d8d9de6f5663ee1708f397dd3e8951a1aafeaa4f813f1c4dae1aa81b3e: [Types.Entities.NFT_890b68d8d9de6f5663ee1708f397dd3e8951a1aafeaa4f813f1c4dae1aa81b3e, "armor"],
    NFT_bfdb6d8dcfd68eb606e0e4dd2b134862ab8904fb91b867a455ea7d25a0b97689: [Types.Entities.NFT_bfdb6d8dcfd68eb606e0e4dd2b134862ab8904fb91b867a455ea7d25a0b97689, "armor"],
    NFT_ec837cab68f84faae57d74b7901299f5b44776a7e90e85aae010db1408c4d5c3: [Types.Entities.NFT_ec837cab68f84faae57d74b7901299f5b44776a7e90e85aae010db1408c4d5c3, "armor"],
    NFT_27c27cc825e7791664c10d7012b9ba9a6e2b1ded166a4e1bd49158fecc7e14cf: [Types.Entities.NFT_27c27cc825e7791664c10d7012b9ba9a6e2b1ded166a4e1bd49158fecc7e14cf, "armor"],
    NFT_eac17febcaf13e4f2a07aab923d7e527a8414712b9f6732465970e16853f0daa: [Types.Entities.NFT_eac17febcaf13e4f2a07aab923d7e527a8414712b9f6732465970e16853f0daa, "armor"],
    NFT_119a557bf20a9105348c45deda0f96308bd6b20c1680dbcf7ac3c0439e96fc08: [Types.Entities.NFT_119a557bf20a9105348c45deda0f96308bd6b20c1680dbcf7ac3c0439e96fc08, "armor"],
    NFT_dd722e34afdc01212b4d839a0a33ab351322ddeff41f78cf1064c36c0f44977a: [Types.Entities.NFT_dd722e34afdc01212b4d839a0a33ab351322ddeff41f78cf1064c36c0f44977a, "armor"],
    NFT_9c5a99f779cca31efcf5d6235b07c485f97f598838bbeb3c37f739f800af8fd5: [Types.Entities.NFT_9c5a99f779cca31efcf5d6235b07c485f97f598838bbeb3c37f739f800af8fd5, "armor"],
    NFT_5e0f26b192f798ca594fa48d6a0820a1f8fce40df49ddfed75d61020f952ee5f: [Types.Entities.NFT_5e0f26b192f798ca594fa48d6a0820a1f8fce40df49ddfed75d61020f952ee5f, "armor"],
    NFT_fab0c923caef4d9666e41097512bb02ed1283afa0199e10031a0a24a00008daa: [Types.Entities.NFT_fab0c923caef4d9666e41097512bb02ed1283afa0199e10031a0a24a00008daa, "armor"],
    NFT_01348c02000000000000000002386f26fc1000000000000000000000000001d6: [Types.Entities.NFT_01348c02000000000000000002386f26fc1000000000000000000000000001d6, "armor"],
    NFT_aa161f880bb5cbed5813fed087358be7a44f889692e2baea3cc86c978897f0b3: [Types.Entities.NFT_aa161f880bb5cbed5813fed087358be7a44f889692e2baea3cc86c978897f0b3, "armor"],
    NFT_2ed54cfb0a51b0c5a66348f7efbe78b61776a4e0252901763121242888a3be44: [Types.Entities.NFT_2ed54cfb0a51b0c5a66348f7efbe78b61776a4e0252901763121242888a3be44, "armor"],
    NFT_2bc716999d2ebea388c39b26ed6e66066d98c76412318f7f5e1c92f27f1a434a: [Types.Entities.NFT_2bc716999d2ebea388c39b26ed6e66066d98c76412318f7f5e1c92f27f1a434a, "armor"],
    NFT_afcac9c2899f3c300a8e302057aa1740fda5544846a0bd026e041b75b8c50c77: [Types.Entities.NFT_afcac9c2899f3c300a8e302057aa1740fda5544846a0bd026e041b75b8c50c77, "armor"],
    NFT_602543f900cdec7536e01121bae04d98cf5f26dc04fdd2e65f45dcb80ccc7b52: [Types.Entities.NFT_602543f900cdec7536e01121bae04d98cf5f26dc04fdd2e65f45dcb80ccc7b52, "armor"],
    NFT_8bf0ca782646556769462a2e111e63acbacba43bb50e4fff8cebd04ebfd012c4: [Types.Entities.NFT_8bf0ca782646556769462a2e111e63acbacba43bb50e4fff8cebd04ebfd012c4, "armor"],
    NFT_72021bcc7f2688a31f25a0e409423c313f527a21fd06375147db912de5d25af9: [Types.Entities.NFT_72021bcc7f2688a31f25a0e409423c313f527a21fd06375147db912de5d25af9, "armor"],
    NFT_bffd3956245711a307883001df9eccf361eb29577e4cfc9eb14044b32bdc0cc8: [Types.Entities.NFT_bffd3956245711a307883001df9eccf361eb29577e4cfc9eb14044b32bdc0cc8, "armor"],
    NFT_2b6563700e47217141759e87138a36b3c424860b599f4edee04476f1cf287d7d: [Types.Entities.NFT_2b6563700e47217141759e87138a36b3c424860b599f4edee04476f1cf287d7d, "armor"],
    NFT_4232658f50f5f154784e3a896aef114eb8c88f0446df68e1a0155249fccb84bf: [Types.Entities.NFT_4232658f50f5f154784e3a896aef114eb8c88f0446df68e1a0155249fccb84bf, "armor"],
    NFT_968e6d77eb1f01c8f6f0963c15d22c51c5972e5e903dd58a52f307c670afabba: [Types.Entities.NFT_968e6d77eb1f01c8f6f0963c15d22c51c5972e5e903dd58a52f307c670afabba, "armor"],
    NFT_c3f9e6e0285aef34a3383f1e4e9dd81400f047f29ca101f7f3186676eba4090a: [Types.Entities.NFT_c3f9e6e0285aef34a3383f1e4e9dd81400f047f29ca101f7f3186676eba4090a, "armor"],
    NFT_e306ddc52e528b7bca4a5a5ab111bc90f4184d6c78858e25de62070c9df275bc: [Types.Entities.NFT_e306ddc52e528b7bca4a5a5ab111bc90f4184d6c78858e25de62070c9df275bc, "armor"],
    NFT_604f23674ed95c65f8f71cf1fe70f19edbeaed55a0ec20906f42d10e2405f68c: [Types.Entities.NFT_604f23674ed95c65f8f71cf1fe70f19edbeaed55a0ec20906f42d10e2405f68c, "armor"],
    NFT_894b121ef3fa401aced39ae51cb2fefd24afdb1c96d8de22f8a5c233d3f4b304: [Types.Entities.NFT_894b121ef3fa401aced39ae51cb2fefd24afdb1c96d8de22f8a5c233d3f4b304, "armor"],
    NFT_147aabee5edf37ae03e40c22553d7dd7fe1ec74201f304c74766658afb8ed6ec: [Types.Entities.NFT_147aabee5edf37ae03e40c22553d7dd7fe1ec74201f304c74766658afb8ed6ec, "armor"],
    NFT_f6e3fd53b09c5bb4794a934e8a77f0cb7dc85e3da702f14923cad0493b6c7fd6: [Types.Entities.NFT_f6e3fd53b09c5bb4794a934e8a77f0cb7dc85e3da702f14923cad0493b6c7fd6, "armor"],
    NFT_7bda27fa0906a95f7159fa664719705d74932343ea29667fb7be4d648203eb29: [Types.Entities.NFT_7bda27fa0906a95f7159fa664719705d74932343ea29667fb7be4d648203eb29, "armor"],
    NFT_36c33534840bfb6e9a5eb14c419f4def0a7869d48fe0877cce881a1440a03758: [Types.Entities.NFT_36c33534840bfb6e9a5eb14c419f4def0a7869d48fe0877cce881a1440a03758, "armor"],
    NFT_28873816c3d11391f97a5f70005a05acbad0c3a264026548a826b3bcb957820a: [Types.Entities.NFT_28873816c3d11391f97a5f70005a05acbad0c3a264026548a826b3bcb957820a, "armor"],
    NFT_2b55be5f9f0c72236a8d7e4922719f6a783d368021bac81b815737fb3b65893e: [Types.Entities.NFT_2b55be5f9f0c72236a8d7e4922719f6a783d368021bac81b815737fb3b65893e, "armor"],
    NFT_59d24c70d2310fccf9d294bbd6c7e7368a0a098b05bb2dd981d2a97d8881aefe: [Types.Entities.NFT_59d24c70d2310fccf9d294bbd6c7e7368a0a098b05bb2dd981d2a97d8881aefe, "armor"],
    NFT_22e07e494cf1802cd2d5593df40c22cd2a2d34716e0a82d370408d5cb0072f84: [Types.Entities.NFT_22e07e494cf1802cd2d5593df40c22cd2a2d34716e0a82d370408d5cb0072f84, "armor"],
    NFT_ea0b89688f49bd4e18a788e2bbfe2aaec34abe5a5c160bd98fb5389875a94fcb: [Types.Entities.NFT_ea0b89688f49bd4e18a788e2bbfe2aaec34abe5a5c160bd98fb5389875a94fcb, "armor"],
    NFT_48963675d6796a51d8c4d2ce1db7e29b9f068f1c335b3aa7be163593cf1d6fb7: [Types.Entities.NFT_48963675d6796a51d8c4d2ce1db7e29b9f068f1c335b3aa7be163593cf1d6fb7, "armor"],
    NFT_e0da11e21877748f3821344cb15744a5572fa1cddefa665098db7ea6f44af747: [Types.Entities.NFT_e0da11e21877748f3821344cb15744a5572fa1cddefa665098db7ea6f44af747, "armor"],
    NFT_cf005295ee67845a9e43a05e196269677f5b62dd82dcb5b67dd3a836faa1e06d: [Types.Entities.NFT_cf005295ee67845a9e43a05e196269677f5b62dd82dcb5b67dd3a836faa1e06d, "armor"],
    NFT_bfeb604f9c3b49e7e5962964f49200b25ca7463b1b0868509e37ae3a3f5497f0: [Types.Entities.NFT_bfeb604f9c3b49e7e5962964f49200b25ca7463b1b0868509e37ae3a3f5497f0, "armor"],
    NFT_153269d1418275b40a0f2019def17aeef133d3fc628db717d8643b09111ea287: [Types.Entities.NFT_153269d1418275b40a0f2019def17aeef133d3fc628db717d8643b09111ea287, "armor"],
    NFT_9a1a0dab20f6b3b07f250edfd8ea0812bf6347cf4d4b1580a9be05b5cd895b55: [Types.Entities.NFT_9a1a0dab20f6b3b07f250edfd8ea0812bf6347cf4d4b1580a9be05b5cd895b55, "armor"],
    NFT_7b2fb5b960273ac27a6335ef53e7bf64db642e71081dd2b7597fd0dd1821bdad: [Types.Entities.NFT_7b2fb5b960273ac27a6335ef53e7bf64db642e71081dd2b7597fd0dd1821bdad, "armor"],
    NFT_302ff52132d5729f608e6d5d0daf1c850f60237d2078c5aca17f43df507c830b: [Types.Entities.NFT_302ff52132d5729f608e6d5d0daf1c850f60237d2078c5aca17f43df507c830b, "armor"],
    NFT_aa40bd2c34935969c370d5de419530fd63976a3cfa7919d2b30eadb0d32cd641: [Types.Entities.NFT_aa40bd2c34935969c370d5de419530fd63976a3cfa7919d2b30eadb0d32cd641, "armor"],
    NFT_2684093e8291c34fc6eecf8ac635fb625d34729f71ca31810b475f1c8bc322ea: [Types.Entities.NFT_2684093e8291c34fc6eecf8ac635fb625d34729f71ca31810b475f1c8bc322ea, "armor"],
    NFT_3a5a1e0305d3badb725085465b307366a4f15fd26eb81cfcb4574857db4d1460: [Types.Entities.NFT_3a5a1e0305d3badb725085465b307366a4f15fd26eb81cfcb4574857db4d1460, "armor"],
    NFT_ba676e35ebaeda5cdab7765ac1e4523973a1cf12e1cce416544d2c1be26c23c2: [Types.Entities.NFT_ba676e35ebaeda5cdab7765ac1e4523973a1cf12e1cce416544d2c1be26c23c2, "armor"],
    NFT_cee6596166b80f7a75813673dadc7508d4994c54e49b9740957233170c7d832a: [Types.Entities.NFT_cee6596166b80f7a75813673dadc7508d4994c54e49b9740957233170c7d832a, "armor"],
    NFT_e2c610a40bf59f9b5cb3bc646bc767e53200c25a26940d1f9c8f5e1dd159726c: [Types.Entities.NFT_e2c610a40bf59f9b5cb3bc646bc767e53200c25a26940d1f9c8f5e1dd159726c, "armor"],
    NFT_ef3c4d2b065f9a59adde2424f0cb8a02f8bf77655986e2c936abbba4bac4ae78: [Types.Entities.NFT_ef3c4d2b065f9a59adde2424f0cb8a02f8bf77655986e2c936abbba4bac4ae78, "armor"],
    NFT_47718ab5f343e019944a3ba0afe611a7fc43d4c4820830b0568083e199d384a9: [Types.Entities.NFT_47718ab5f343e019944a3ba0afe611a7fc43d4c4820830b0568083e199d384a9, "armor"],
    NFT_214c5433256da27fd26f839588340d8cf965cfdcc1f7e9ca7e53c94718466b0e: [Types.Entities.NFT_214c5433256da27fd26f839588340d8cf965cfdcc1f7e9ca7e53c94718466b0e, "armor"],
    NFT_efbc96ecaa696501324a0802fa1da688df1dff6c8ea8e3c91e8cd6fb6917e02b: [Types.Entities.NFT_efbc96ecaa696501324a0802fa1da688df1dff6c8ea8e3c91e8cd6fb6917e02b, "armor"],
    NFT_fa754d960bad700b8924942d2bb2a955440a8a54f72971de162f081c30db7465: [Types.Entities.NFT_fa754d960bad700b8924942d2bb2a955440a8a54f72971de162f081c30db7465, "armor"],
    NFT_3e6fe4c9853bc8f3e55d9debde9f2a22952e349cae47d3df3110ff1e604b3c77: [Types.Entities.NFT_3e6fe4c9853bc8f3e55d9debde9f2a22952e349cae47d3df3110ff1e604b3c77, "armor"],
    NFT_35f875a25ecbe801528e6819ef7e203434d209784c7b3bea544c4b9396a5b0e7: [Types.Entities.NFT_35f875a25ecbe801528e6819ef7e203434d209784c7b3bea544c4b9396a5b0e7, "armor"],
    NFT_d404b2f3e2db47a28e2d43e77bd33d471589499c4ddd1770aacc32fa472bf8ad: [Types.Entities.NFT_d404b2f3e2db47a28e2d43e77bd33d471589499c4ddd1770aacc32fa472bf8ad, "armor"],
    NFT_0d5672a0b87858af764cc1169caee403e405692265e54eb90253e22e74132085: [Types.Entities.NFT_0d5672a0b87858af764cc1169caee403e405692265e54eb90253e22e74132085, "armor"],
    NFT_89343e3a4053cccdab06c300954167b2f916a257042bf64a0014099faecaa260: [Types.Entities.NFT_89343e3a4053cccdab06c300954167b2f916a257042bf64a0014099faecaa260, "armor"],
    NFT_750b4661b3dddf0d39d5c32f95e1ef8fe030a37d695c069364a6f85cd8034e67: [Types.Entities.NFT_750b4661b3dddf0d39d5c32f95e1ef8fe030a37d695c069364a6f85cd8034e67, "armor"],
    NFT_e2bcc3eeadb9eb414845b645446739583b5b9d18a6f014c36d3bccd0eec03bdf: [Types.Entities.NFT_e2bcc3eeadb9eb414845b645446739583b5b9d18a6f014c36d3bccd0eec03bdf, "armor"],
    NFT_aa8119ad254b4a6b205e65e7dc3d5b7f75d8755362d22908ae7197313daff633: [Types.Entities.NFT_aa8119ad254b4a6b205e65e7dc3d5b7f75d8755362d22908ae7197313daff633, "armor"],
    NFT_cddc6c916c0939d98ed089cfcc4ba4f894aeffc1907f881d7dabbc999f2e13db: [Types.Entities.NFT_cddc6c916c0939d98ed089cfcc4ba4f894aeffc1907f881d7dabbc999f2e13db, "armor"],
    NFT_0351abda19f8eb0279bc255a58a3577f8a9a47f352b7345d6c9f5faf34c2740d: [Types.Entities.NFT_0351abda19f8eb0279bc255a58a3577f8a9a47f352b7345d6c9f5faf34c2740d, "armor"],
    NFT_34d456b74f6be2c43ede9cfe3fa3a491eff4a295fab61bcaec3b173e496a3983: [Types.Entities.NFT_34d456b74f6be2c43ede9cfe3fa3a491eff4a295fab61bcaec3b173e496a3983, "armor"],
    NFT_124e174b52fcd27b1efd81ab98b27855f54e3f427baa6bc1747fe7856e44fefd: [Types.Entities.NFT_124e174b52fcd27b1efd81ab98b27855f54e3f427baa6bc1747fe7856e44fefd, "armor"],
    NFT_8ba174b413a393aa5a592dd55a73479225e60fc7b92f206f1c988a3d0684aa86: [Types.Entities.NFT_8ba174b413a393aa5a592dd55a73479225e60fc7b92f206f1c988a3d0684aa86, "armor"],
    NFT_9dfb26ba489f21a2475390d9e4d26a81963f37724b2e1136ebed14a0aeb7952b: [Types.Entities.NFT_9dfb26ba489f21a2475390d9e4d26a81963f37724b2e1136ebed14a0aeb7952b, "armor"],
    NFT_896dcb352109b89f48d57021fe18d05cf7a9d7b205e95418dc01f61e06b7e191: [Types.Entities.NFT_896dcb352109b89f48d57021fe18d05cf7a9d7b205e95418dc01f61e06b7e191, "armor"],
    NFT_fe3851231104c5ea2261dd91a3b82695fb54f68e2903b5de968a5c33d7e74620: [Types.Entities.NFT_fe3851231104c5ea2261dd91a3b82695fb54f68e2903b5de968a5c33d7e74620, "armor"],
    NFT_d7efda019835092c1a11de7f43988a5a0ad18910be7bee604cd80d61fa4ffd87: [Types.Entities.NFT_d7efda019835092c1a11de7f43988a5a0ad18910be7bee604cd80d61fa4ffd87, "armor"],
    NFT_f7a0759682ac4f177604ac4788696c4c320e417d514e5aed87d0ed0ba7fe69a0: [Types.Entities.NFT_f7a0759682ac4f177604ac4788696c4c320e417d514e5aed87d0ed0ba7fe69a0, "armor"],
    NFT_631b5588073a40a7f8174266890e2e472e191c1371e76246e3191157c83098b5: [Types.Entities.NFT_631b5588073a40a7f8174266890e2e472e191c1371e76246e3191157c83098b5, "armor"],
    NFT_a4a8f75b0af1a2af46d27c8f1cd33dc35ef2263c1a38f3484f3b8bcac1d79449: [Types.Entities.NFT_a4a8f75b0af1a2af46d27c8f1cd33dc35ef2263c1a38f3484f3b8bcac1d79449, "armor"],
    NFT_3cd1c3cf7ad46a9acfd0c44ae4bbe65c8617b83a078f35c6b0f3120937b87f5a: [Types.Entities.NFT_3cd1c3cf7ad46a9acfd0c44ae4bbe65c8617b83a078f35c6b0f3120937b87f5a, "armor"],
    NFT_19de6eeb9d8f6db153994fd95015eba2d586c724b0fc9c40c44399624edcf800: [Types.Entities.NFT_19de6eeb9d8f6db153994fd95015eba2d586c724b0fc9c40c44399624edcf800, "armor"],
    NFT_19daf22f697e7159eb9020b88e75b090f1bf48bf5602d01572bb91259700cbc4: [Types.Entities.NFT_19daf22f697e7159eb9020b88e75b090f1bf48bf5602d01572bb91259700cbc4, "armor"],
    NFT_735b5160c52a00049a236af4ec2a48dd6ed92e0c3e6f75927f45e743f94e784f: [Types.Entities.NFT_735b5160c52a00049a236af4ec2a48dd6ed92e0c3e6f75927f45e743f94e784f, "armor"],
    NFT_b534b341c57a0aa38d5a70363711ae76a3aed747e02dbb31f900e9a08c98ebf5: [Types.Entities.NFT_b534b341c57a0aa38d5a70363711ae76a3aed747e02dbb31f900e9a08c98ebf5, "armor"],
    NFT_09db2741679599882e178ef134690cf7434752461a93cf7af43d1da2a06f9354: [Types.Entities.NFT_09db2741679599882e178ef134690cf7434752461a93cf7af43d1da2a06f9354, "armor"],
    NFT_9c0cca7ed83a1148a395131534923cec2b5b998e81c9c858ab70d28492d07b41: [Types.Entities.NFT_9c0cca7ed83a1148a395131534923cec2b5b998e81c9c858ab70d28492d07b41, "armor"],
    NFT_847e4d20ed60b512d606a011fffbc89fb05ba1db8b6b2a5c44361f5c9f57c63f: [Types.Entities.NFT_847e4d20ed60b512d606a011fffbc89fb05ba1db8b6b2a5c44361f5c9f57c63f, "armor"],
    NFT_0ef29e6d04e05fd501e2fdae537226800ed37e231cbcdd3df375a94bea3414ff: [Types.Entities.NFT_0ef29e6d04e05fd501e2fdae537226800ed37e231cbcdd3df375a94bea3414ff, "armor"],
    NFT_fa2898e0a8d45fc6bfcb5375bddc3a0e33302ed46f6d744de696a7479dde80ae: [Types.Entities.NFT_fa2898e0a8d45fc6bfcb5375bddc3a0e33302ed46f6d744de696a7479dde80ae, "armor"],
    NFT_73b6fc1d863e91526ff397c395e71e073920b024ab05c4f65c94b7a627ea03e1: [Types.Entities.NFT_73b6fc1d863e91526ff397c395e71e073920b024ab05c4f65c94b7a627ea03e1, "armor"],
    NFT_7794f738b23698bd26cb654b2452a5e2f9fe6a927465e35d6f5e72c7fc7b36e9: [Types.Entities.NFT_7794f738b23698bd26cb654b2452a5e2f9fe6a927465e35d6f5e72c7fc7b36e9, "armor"],
    NFT_0b155c388138c2fa5244dbd0b1dbd9e8790fd3e9068eb3bad9c47ea7e2187bd0: [Types.Entities.NFT_0b155c388138c2fa5244dbd0b1dbd9e8790fd3e9068eb3bad9c47ea7e2187bd0, "armor"],
    NFT_c3d8e0fae376287818479d7df0a78827c73968ad27fc2578c2a31c1ce8a54986: [Types.Entities.NFT_c3d8e0fae376287818479d7df0a78827c73968ad27fc2578c2a31c1ce8a54986, "armor"],
    NFT_8436b143a690881c0d5f89c157287a4ea53476021ae1dd15669fe0bf253e5b18: [Types.Entities.NFT_8436b143a690881c0d5f89c157287a4ea53476021ae1dd15669fe0bf253e5b18, "armor"],
    NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee: [Types.Entities.NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee, "armor"],
    NFT_3de4d3e7aa4d280fae7b3b79832204fb5b0fbd78d3170d7f600bf12908378eb2: [Types.Entities.NFT_3de4d3e7aa4d280fae7b3b79832204fb5b0fbd78d3170d7f600bf12908378eb2, "armor"],
    NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee: [Types.Entities.NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee, "armor"],
    NFT_33d866318659169f2183641e2890f7bc5ffa750f0a89bc70ee967b7b5db4eff6: [Types.Entities.NFT_33d866318659169f2183641e2890f7bc5ffa750f0a89bc70ee967b7b5db4eff6, "armor"],
    NFT_da7cd78f666a0c355fb136f78afb112db1babda7cecab64a87ffb4e11dfea69f: [Types.Entities.NFT_da7cd78f666a0c355fb136f78afb112db1babda7cecab64a87ffb4e11dfea69f, "weapon"],
    NFT_4082aabb234aaf694a740dd4c981da3abd69c897766a7cacb44b6b687ac2190c: [Types.Entities.NFT_4082aabb234aaf694a740dd4c981da3abd69c897766a7cacb44b6b687ac2190c, "weapon"],
    NFT_c57d08ad0bb352bad9157b1c9eee33d058e4f0b7e0c772e513789e64d8c4d628: [Types.Entities.NFT_c57d08ad0bb352bad9157b1c9eee33d058e4f0b7e0c772e513789e64d8c4d628, "weapon"],
    NFT_31d570095756836f78e9b7ca5c3f25f2ecab74ebcc5bec80e123ce72f391d1f0: [Types.Entities.NFT_31d570095756836f78e9b7ca5c3f25f2ecab74ebcc5bec80e123ce72f391d1f0, "armor"],
    NFT_5a8af0a53dc5d3a6edddee5dc51b0da758fe4170b0d759a30f3986929488445b: [Types.Entities.NFT_5a8af0a53dc5d3a6edddee5dc51b0da758fe4170b0d759a30f3986929488445b, "armor"],
    NFT_9d0651b997a16797e3d8f71afa5e77006cf6bb07e5a798278626be26b41c3cd2: [Types.Entities.NFT_9d0651b997a16797e3d8f71afa5e77006cf6bb07e5a798278626be26b41c3cd2, "armor"],
    NFT_41e39830dd55abde84f5d735be661a5adc985e04ea1e250493c985b93eb5b2e7: [Types.Entities.NFT_41e39830dd55abde84f5d735be661a5adc985e04ea1e250493c985b93eb5b2e7, "armor"],
    NFT_91808e0ac1a46592eac31bfe026a78738fed0fdd5b05cfcda2ceecd552cade62: [Types.Entities.NFT_91808e0ac1a46592eac31bfe026a78738fed0fdd5b05cfcda2ceecd552cade62, "armor"],
    NFT_f767cbbd020c062ce87468dc1061cf619adcfe63242eb72912ef99b0c15a67b4: [Types.Entities.NFT_f767cbbd020c062ce87468dc1061cf619adcfe63242eb72912ef99b0c15a67b4, "armor"],
    NFT_d5aa81a19e3bd8bf6f5262f61460f8f4261073ba72bfa164743bbe5c135bbd25: [Types.Entities.NFT_d5aa81a19e3bd8bf6f5262f61460f8f4261073ba72bfa164743bbe5c135bbd25, "armor"],
    NFT_c8e702df5158067eac3a12c66f003c11aec6efef75cb1759e010da57433c5e0e: [Types.Entities.NFT_c8e702df5158067eac3a12c66f003c11aec6efef75cb1759e010da57433c5e0e, "armor"],
    NFT_f192b0dc4acb97881b42ab83af4f5648d552c1d04b4a2f5463b378aaee9f8088: [Types.Entities.NFT_f192b0dc4acb97881b42ab83af4f5648d552c1d04b4a2f5463b378aaee9f8088, "armor"],
    NFT_50b326049812ee71d7c35d8672d8d09c1c312a79449a902c9270b5a718bbb8ad: [Types.Entities.NFT_50b326049812ee71d7c35d8672d8d09c1c312a79449a902c9270b5a718bbb8ad, "armor"],
    NFT_072c6ceaa62367e87160215d9cf948e2cb4e1e8c6ef90417674e8aaa01642982: [Types.Entities.NFT_072c6ceaa62367e87160215d9cf948e2cb4e1e8c6ef90417674e8aaa01642982, "armor"],
    NFT_97189cd910d1d8a629d03823ce273a89e20ba21d66f127a993a9230c88dacd68: [Types.Entities.NFT_97189cd910d1d8a629d03823ce273a89e20ba21d66f127a993a9230c88dacd68, "armor"],
    NFT_500e32bf46bc7f24f3c91bb43a8d5b175803088509f609fb91ee7928c8abc202: [Types.Entities.NFT_500e32bf46bc7f24f3c91bb43a8d5b175803088509f609fb91ee7928c8abc202, "armor"],
    NFT_ab5fcbec6b77b96bf8f985d9d3b2ccf02e6d573850f43444286de6d598ad4295: [Types.Entities.NFT_ab5fcbec6b77b96bf8f985d9d3b2ccf02e6d573850f43444286de6d598ad4295, "armor"],
    NFT_ff6ba455559bcda5c8c31432a26787cac0187def385b73f59a92ba7d98dab366: [Types.Entities.NFT_ff6ba455559bcda5c8c31432a26787cac0187def385b73f59a92ba7d98dab366, "armor"],
    NFT_f7267a1c4d02d8f463c1adfe01362b2214a2f888422b32216fcf4006d7534d79: [Types.Entities.NFT_f7267a1c4d02d8f463c1adfe01362b2214a2f888422b32216fcf4006d7534d79, "armor"],
    NFT_130ab907c0226dc270942b1caf7c1c61810960770afdbead91cd4e83b14fec52: [Types.Entities.NFT_130ab907c0226dc270942b1caf7c1c61810960770afdbead91cd4e83b14fec52, "armor"],
    NFT_6f3e97d4a638877ec87265ed37c1995427f7cff74a1f13463bfc7b7cb4e07aae: [Types.Entities.NFT_6f3e97d4a638877ec87265ed37c1995427f7cff74a1f13463bfc7b7cb4e07aae, "armor"],
    NFT_f467e9426427f20f9b663ca00ad963d4ea6a70e21f36428c59669d837ba81270: [Types.Entities.NFT_f467e9426427f20f9b663ca00ad963d4ea6a70e21f36428c59669d837ba81270, "armor"],
    NFT_3610fdb9e538de28535d3455e22280a1f7d89cb14bc399fe8c7eafbe80866536: [Types.Entities.NFT_3610fdb9e538de28535d3455e22280a1f7d89cb14bc399fe8c7eafbe80866536, "armor"],
    NFT_f75e77cd96c17c0cbd93ac9228a7e245c865c17bdd91c0da977e4c16afcd520a: [Types.Entities.NFT_f75e77cd96c17c0cbd93ac9228a7e245c865c17bdd91c0da977e4c16afcd520a, "armor"],
    NFT_ac675ef13fea49ab184f4668ed19da3b9e0b8f0e4d785bbc37c68c7fbf8b2559: [Types.Entities.NFT_ac675ef13fea49ab184f4668ed19da3b9e0b8f0e4d785bbc37c68c7fbf8b2559, "armor"],
    NFT_bfc4ae6203a71f501d5c6f2851576b2ff5ce4e6a7f1d9695bed271dea5b9de1d: [Types.Entities.NFT_bfc4ae6203a71f501d5c6f2851576b2ff5ce4e6a7f1d9695bed271dea5b9de1d, "armor"],
    NFT_90db15a10d21eab9c715fedd003be1a732012c5dc4d75818887ab72f1d7362b5: [Types.Entities.NFT_90db15a10d21eab9c715fedd003be1a732012c5dc4d75818887ab72f1d7362b5, "armor"],
    NFT_1182b01e29cd9e91d1e6422ed4600191017df9014b3c1c46067fc787a42a3fe2: [Types.Entities.NFT_1182b01e29cd9e91d1e6422ed4600191017df9014b3c1c46067fc787a42a3fe2, "armor"],
    NFT_1b5a581dbea36bbf6bc4da25b2eab413a7339581ce07fad33beb5bf07df30d45: [Types.Entities.NFT_1b5a581dbea36bbf6bc4da25b2eab413a7339581ce07fad33beb5bf07df30d45, "armor"],
    // @nextSpriteLine@

    
    getType: function(kind) {
        return kinds[Types.getKindAsString(kind)][1];
    }
};

Types.rankedWeapons = [
    Types.Entities.SWORD1,
    Types.Entities.SWORD2,
    Types.Entities.AXE,
    Types.Entities.NFT_82e68ef0bee270d142ae3ec162490c0fa2e88a273bb768687f2fee4f6930c741,
    Types.Entities.MORNINGSTAR,
    Types.Entities.BLUESWORD,
    Types.Entities.REDSWORD,
    Types.Entities.GOLDENSWORD
];

Types.rankedArmors = [
    Types.Entities.CLOTHARMOR,
    Types.Entities.NFT_426754b71f8ac324122c64c541a99e1888602a06c2e7a203568d3a9fb0281263,
    Types.Entities.LEATHERARMOR,
    Types.Entities.MAILARMOR,
    Types.Entities.PLATEARMOR,
    Types.Entities.REDARMOR,
    Types.Entities.GOLDENARMOR
];

Types.getWeaponRank = function(weaponKind) {
    return _.indexOf(Types.rankedWeapons, weaponKind);
};

Types.getArmorRank = function(armorKind) {
    switch(armorKind) {
        case Types.Entities.NFT_c762bf80c40453b66f5eb91a99a5a84731c3cc83e1bcadaa9c62e2e59e19e4f6:
            return 1;
        case Types.Entities.NFT_38278eacc7d1c86fdbc85d798dca146fbca59a2e5e567dc15898ce2edac21f5f:
            return 1;
        case Types.Entities.NFT_d2fb1ad9308803ea4df2ba6b1fe0930ad4d6443b3ac6468eaedbc9e2c214e57a:
            return 0;
        case Types.Entities.NFT_b03847a6a7c25e8f52016c0ffca8e7d608593f004c17f3519506b4d0a42d61bf:
            return 1;
        case Types.Entities.NFT_3c1fa300af2deef916ade14eb6ca68dd14913e4adc4a4d174ea98f1f878ef733:
            return 0;
        case Types.Entities.NFT_cfd9a7ae82698da0da065befb2b39f3bfe3eca509febdb9da865fafd4d98e543:
            return 1;
        case Types.Entities.NFT_b131df57290a3c656d6cf35b10e4d342e147345ca01c9cf34ad13205d0e43e50:
            return 0;
        case Types.Entities.NFT_9f051ae4b657a07bc82d8d1fac5a5263ca0cb33e3be717c29814d06fa4860487:
            return 1;
        case Types.Entities.NFT_01346618000000000000000002386f26fc10000000000000000000000000037b:
            return 0;
        case Types.Entities.NFT_82e68ef0bee270d142ae3ec162490c0fa2e88a273bb768687f2fee4f6930c741:
            return 1;
        case Types.Entities.NFT_17222e7f16e5fb69bbc410f8c093cf92904ab8d2e4681a6bc9dee01900d8e6b7:
            return 0;
        case Types.Entities.NFT_2bab6c4b9cbb8eddb94614bb05e2b4b67b229e6e94ea7b152d74d1a1e2e21360:
            return 1;
        case Types.Entities.NFT_b26214bac18f742d93b948c44ccd05c768f8344c7c89d6550a67e4f919ad7e6f:
            return 0;
        case Types.Entities.NFT_2530bd882f78be80636b02467386e272f87bdb27d6762b41bd09dd71407bdcb1:
            return 1;
        case Types.Entities.NFT_5454cad3ebe151e92b53083d0ae6f8a03273fd86c4af33d1ef2991bbe8dae198:
            return 0;
        case Types.Entities.NFT_20fdfc6fa49d9001f154ef03129ba66a6bc606489631fbc181751bd17fb1d520:
            return 1;
        case Types.Entities.NFT_426754b71f8ac324122c64c541a99e1888602a06c2e7a203568d3a9fb0281263:
            return 0;
        case Types.Entities.NFT_691b67e4466879e4de582f765b85a5bbc1cacc087b9c0f410a86f00d32081ea7:
            return 0;
        case Types.Entities.NFT_ee40d44f7847999cb4d7d1e3fc7681e1390fc5acc5e835d1e8f0ed717d4dc200:
            return 0;
        case Types.Entities.NFT_d1570dc356007d297c8ee63716d38d264a621516f44e3305839fc29ca36e2ce2:
            return 1;
        case Types.Entities.NFT_b494d78bf1bfd47fc5041f6798393d9d1ce2583b83c7f417c48ba42898a4dfb9:
            return 0;
        case Types.Entities.NFT_890b68d8d9de6f5663ee1708f397dd3e8951a1aafeaa4f813f1c4dae1aa81b3e:
            return 1;
        case Types.Entities.NFT_bfdb6d8dcfd68eb606e0e4dd2b134862ab8904fb91b867a455ea7d25a0b97689:
            return 0;
        case Types.Entities.NFT_ec837cab68f84faae57d74b7901299f5b44776a7e90e85aae010db1408c4d5c3:
            return 1;
        case Types.Entities.NFT_27c27cc825e7791664c10d7012b9ba9a6e2b1ded166a4e1bd49158fecc7e14cf:
            return 0;
        case Types.Entities.NFT_eac17febcaf13e4f2a07aab923d7e527a8414712b9f6732465970e16853f0daa:
            return 1;
        case Types.Entities.NFT_119a557bf20a9105348c45deda0f96308bd6b20c1680dbcf7ac3c0439e96fc08:
            return 1;
        case Types.Entities.NFT_dd722e34afdc01212b4d839a0a33ab351322ddeff41f78cf1064c36c0f44977a:
            return 0;
        case Types.Entities.NFT_9c5a99f779cca31efcf5d6235b07c485f97f598838bbeb3c37f739f800af8fd5:
            return 1;
        case Types.Entities.NFT_5e0f26b192f798ca594fa48d6a0820a1f8fce40df49ddfed75d61020f952ee5f:
            return 0;
        case Types.Entities.NFT_fab0c923caef4d9666e41097512bb02ed1283afa0199e10031a0a24a00008daa:
            return 0;
        case Types.Entities.NFT_01348c02000000000000000002386f26fc1000000000000000000000000001d6:
            return 0;
        case Types.Entities.NFT_aa161f880bb5cbed5813fed087358be7a44f889692e2baea3cc86c978897f0b3:
            return 0;
        case Types.Entities.NFT_2ed54cfb0a51b0c5a66348f7efbe78b61776a4e0252901763121242888a3be44:
            return 1;
        case Types.Entities.NFT_2bc716999d2ebea388c39b26ed6e66066d98c76412318f7f5e1c92f27f1a434a:
            return 0;
        case Types.Entities.NFT_afcac9c2899f3c300a8e302057aa1740fda5544846a0bd026e041b75b8c50c77:
            return 1;
        case Types.Entities.NFT_602543f900cdec7536e01121bae04d98cf5f26dc04fdd2e65f45dcb80ccc7b52:
            return 1;
        case Types.Entities.NFT_8bf0ca782646556769462a2e111e63acbacba43bb50e4fff8cebd04ebfd012c4:
            return 0;
        case Types.Entities.NFT_72021bcc7f2688a31f25a0e409423c313f527a21fd06375147db912de5d25af9:
            return 0;
        case Types.Entities.NFT_bffd3956245711a307883001df9eccf361eb29577e4cfc9eb14044b32bdc0cc8:
            return 0;
        case Types.Entities.NFT_2b6563700e47217141759e87138a36b3c424860b599f4edee04476f1cf287d7d:
            return 1;
        case Types.Entities.NFT_4232658f50f5f154784e3a896aef114eb8c88f0446df68e1a0155249fccb84bf:
            return 0;
        case Types.Entities.NFT_968e6d77eb1f01c8f6f0963c15d22c51c5972e5e903dd58a52f307c670afabba:
            return 0;
        case Types.Entities.NFT_c3f9e6e0285aef34a3383f1e4e9dd81400f047f29ca101f7f3186676eba4090a:
            return 0;
        case Types.Entities.NFT_e306ddc52e528b7bca4a5a5ab111bc90f4184d6c78858e25de62070c9df275bc:
            return 0;
        case Types.Entities.NFT_604f23674ed95c65f8f71cf1fe70f19edbeaed55a0ec20906f42d10e2405f68c:
            return 1;
        case Types.Entities.NFT_894b121ef3fa401aced39ae51cb2fefd24afdb1c96d8de22f8a5c233d3f4b304:
            return 0;
        case Types.Entities.NFT_147aabee5edf37ae03e40c22553d7dd7fe1ec74201f304c74766658afb8ed6ec:
            return 0;
        case Types.Entities.NFT_f6e3fd53b09c5bb4794a934e8a77f0cb7dc85e3da702f14923cad0493b6c7fd6:
            return 1;
        case Types.Entities.NFT_7bda27fa0906a95f7159fa664719705d74932343ea29667fb7be4d648203eb29:
            return 0;
        case Types.Entities.NFT_36c33534840bfb6e9a5eb14c419f4def0a7869d48fe0877cce881a1440a03758:
            return 1;
        case Types.Entities.NFT_28873816c3d11391f97a5f70005a05acbad0c3a264026548a826b3bcb957820a:
            return 0;
        case Types.Entities.NFT_2b55be5f9f0c72236a8d7e4922719f6a783d368021bac81b815737fb3b65893e:
            return 0;
        case Types.Entities.NFT_59d24c70d2310fccf9d294bbd6c7e7368a0a098b05bb2dd981d2a97d8881aefe:
            return 0;
        case Types.Entities.NFT_22e07e494cf1802cd2d5593df40c22cd2a2d34716e0a82d370408d5cb0072f84:
            return 0;
        case Types.Entities.NFT_ea0b89688f49bd4e18a788e2bbfe2aaec34abe5a5c160bd98fb5389875a94fcb:
            return 1;
        case Types.Entities.NFT_48963675d6796a51d8c4d2ce1db7e29b9f068f1c335b3aa7be163593cf1d6fb7:
            return 0;
        case Types.Entities.NFT_e0da11e21877748f3821344cb15744a5572fa1cddefa665098db7ea6f44af747:
            return 0;
        case Types.Entities.NFT_cf005295ee67845a9e43a05e196269677f5b62dd82dcb5b67dd3a836faa1e06d:
            return 0;
        case Types.Entities.NFT_bfeb604f9c3b49e7e5962964f49200b25ca7463b1b0868509e37ae3a3f5497f0:
            return 1;
        case Types.Entities.NFT_153269d1418275b40a0f2019def17aeef133d3fc628db717d8643b09111ea287:
            return 1;
        case Types.Entities.NFT_9a1a0dab20f6b3b07f250edfd8ea0812bf6347cf4d4b1580a9be05b5cd895b55:
            return 1;
        case Types.Entities.NFT_7b2fb5b960273ac27a6335ef53e7bf64db642e71081dd2b7597fd0dd1821bdad:
            return 0;
        case Types.Entities.NFT_302ff52132d5729f608e6d5d0daf1c850f60237d2078c5aca17f43df507c830b:
            return 1;
        case Types.Entities.NFT_aa40bd2c34935969c370d5de419530fd63976a3cfa7919d2b30eadb0d32cd641:
            return 0;
        case Types.Entities.NFT_2684093e8291c34fc6eecf8ac635fb625d34729f71ca31810b475f1c8bc322ea:
            return 1;
        case Types.Entities.NFT_3a5a1e0305d3badb725085465b307366a4f15fd26eb81cfcb4574857db4d1460:
            return 1;
        case Types.Entities.NFT_ba676e35ebaeda5cdab7765ac1e4523973a1cf12e1cce416544d2c1be26c23c2:
            return 0;
        case Types.Entities.NFT_cee6596166b80f7a75813673dadc7508d4994c54e49b9740957233170c7d832a:
            return 1;
        case Types.Entities.NFT_e2c610a40bf59f9b5cb3bc646bc767e53200c25a26940d1f9c8f5e1dd159726c:
            return 1;
        case Types.Entities.NFT_ef3c4d2b065f9a59adde2424f0cb8a02f8bf77655986e2c936abbba4bac4ae78:
            return 1;
        case Types.Entities.NFT_47718ab5f343e019944a3ba0afe611a7fc43d4c4820830b0568083e199d384a9:
            return 0;
        case Types.Entities.NFT_214c5433256da27fd26f839588340d8cf965cfdcc1f7e9ca7e53c94718466b0e:
            return 1;
        case Types.Entities.NFT_efbc96ecaa696501324a0802fa1da688df1dff6c8ea8e3c91e8cd6fb6917e02b:
            return 1;
        case Types.Entities.NFT_fa754d960bad700b8924942d2bb2a955440a8a54f72971de162f081c30db7465:
            return 1;
        case Types.Entities.NFT_3e6fe4c9853bc8f3e55d9debde9f2a22952e349cae47d3df3110ff1e604b3c77:
            return 1;
        case Types.Entities.NFT_35f875a25ecbe801528e6819ef7e203434d209784c7b3bea544c4b9396a5b0e7:
            return 0;
        case Types.Entities.NFT_d404b2f3e2db47a28e2d43e77bd33d471589499c4ddd1770aacc32fa472bf8ad:
            return 1;
        case Types.Entities.NFT_0d5672a0b87858af764cc1169caee403e405692265e54eb90253e22e74132085:
            return 1;
        case Types.Entities.NFT_89343e3a4053cccdab06c300954167b2f916a257042bf64a0014099faecaa260:
            return 0;
        case Types.Entities.NFT_750b4661b3dddf0d39d5c32f95e1ef8fe030a37d695c069364a6f85cd8034e67:
            return 0;
        case Types.Entities.NFT_e2bcc3eeadb9eb414845b645446739583b5b9d18a6f014c36d3bccd0eec03bdf:
            return 0;
        case Types.Entities.NFT_aa8119ad254b4a6b205e65e7dc3d5b7f75d8755362d22908ae7197313daff633:
            return 0;
        case Types.Entities.NFT_cddc6c916c0939d98ed089cfcc4ba4f894aeffc1907f881d7dabbc999f2e13db:
            return 0;
        case Types.Entities.NFT_0351abda19f8eb0279bc255a58a3577f8a9a47f352b7345d6c9f5faf34c2740d:
            return 1;
        case Types.Entities.NFT_34d456b74f6be2c43ede9cfe3fa3a491eff4a295fab61bcaec3b173e496a3983:
            return 1;
        case Types.Entities.NFT_124e174b52fcd27b1efd81ab98b27855f54e3f427baa6bc1747fe7856e44fefd:
            return 1;
        case Types.Entities.NFT_8ba174b413a393aa5a592dd55a73479225e60fc7b92f206f1c988a3d0684aa86:
            return 0;
        case Types.Entities.NFT_9dfb26ba489f21a2475390d9e4d26a81963f37724b2e1136ebed14a0aeb7952b:
            return 1;
        case Types.Entities.NFT_896dcb352109b89f48d57021fe18d05cf7a9d7b205e95418dc01f61e06b7e191:
            return 0;
        case Types.Entities.NFT_fe3851231104c5ea2261dd91a3b82695fb54f68e2903b5de968a5c33d7e74620:
            return 0;
        case Types.Entities.NFT_d7efda019835092c1a11de7f43988a5a0ad18910be7bee604cd80d61fa4ffd87:
            return 0;
        case Types.Entities.NFT_f7a0759682ac4f177604ac4788696c4c320e417d514e5aed87d0ed0ba7fe69a0:
            return 1;
        case Types.Entities.NFT_631b5588073a40a7f8174266890e2e472e191c1371e76246e3191157c83098b5:
            return 0;
        case Types.Entities.NFT_a4a8f75b0af1a2af46d27c8f1cd33dc35ef2263c1a38f3484f3b8bcac1d79449:
            return 0;
        case Types.Entities.NFT_3cd1c3cf7ad46a9acfd0c44ae4bbe65c8617b83a078f35c6b0f3120937b87f5a:
            return 0;
        case Types.Entities.NFT_19de6eeb9d8f6db153994fd95015eba2d586c724b0fc9c40c44399624edcf800:
            return 1;
        case Types.Entities.NFT_19daf22f697e7159eb9020b88e75b090f1bf48bf5602d01572bb91259700cbc4:
            return 1;
        case Types.Entities.NFT_735b5160c52a00049a236af4ec2a48dd6ed92e0c3e6f75927f45e743f94e784f:
            return 1;
        case Types.Entities.NFT_b534b341c57a0aa38d5a70363711ae76a3aed747e02dbb31f900e9a08c98ebf5:
            return 0;
        case Types.Entities.NFT_09db2741679599882e178ef134690cf7434752461a93cf7af43d1da2a06f9354:
            return 1;
        case Types.Entities.NFT_9c0cca7ed83a1148a395131534923cec2b5b998e81c9c858ab70d28492d07b41:
            return 0;
        case Types.Entities.NFT_847e4d20ed60b512d606a011fffbc89fb05ba1db8b6b2a5c44361f5c9f57c63f:
            return 0;
        case Types.Entities.NFT_0ef29e6d04e05fd501e2fdae537226800ed37e231cbcdd3df375a94bea3414ff:
            return 1;
        case Types.Entities.NFT_fa2898e0a8d45fc6bfcb5375bddc3a0e33302ed46f6d744de696a7479dde80ae:
            return 0;
        case Types.Entities.NFT_73b6fc1d863e91526ff397c395e71e073920b024ab05c4f65c94b7a627ea03e1:
            return 1;
        case Types.Entities.NFT_7794f738b23698bd26cb654b2452a5e2f9fe6a927465e35d6f5e72c7fc7b36e9:
            return 0;
        case Types.Entities.NFT_0b155c388138c2fa5244dbd0b1dbd9e8790fd3e9068eb3bad9c47ea7e2187bd0:
            return 0;
        case Types.Entities.NFT_c3d8e0fae376287818479d7df0a78827c73968ad27fc2578c2a31c1ce8a54986:
            return 0;
        case Types.Entities.NFT_8436b143a690881c0d5f89c157287a4ea53476021ae1dd15669fe0bf253e5b18:
            return 0;
        case Types.Entities.NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee:
            return 0;
        case Types.Entities.NFT_3de4d3e7aa4d280fae7b3b79832204fb5b0fbd78d3170d7f600bf12908378eb2:
            return 0;
        case Types.Entities.NFT_3a2cf0d1409f9c7ece5e43db69145926f6e1cdbb2786f30b71ea0f2757e12cee:
            return 1;
        case Types.Entities.NFT_33d866318659169f2183641e2890f7bc5ffa750f0a89bc70ee967b7b5db4eff6:
            return 1;
        case Types.Entities.NFT_31d570095756836f78e9b7ca5c3f25f2ecab74ebcc5bec80e123ce72f391d1f0:
            return 1;
        case Types.Entities.NFT_5a8af0a53dc5d3a6edddee5dc51b0da758fe4170b0d759a30f3986929488445b:
            return 0;
        case Types.Entities.NFT_9d0651b997a16797e3d8f71afa5e77006cf6bb07e5a798278626be26b41c3cd2:
            return 1;
        case Types.Entities.NFT_41e39830dd55abde84f5d735be661a5adc985e04ea1e250493c985b93eb5b2e7:
            return 0;
        case Types.Entities.NFT_91808e0ac1a46592eac31bfe026a78738fed0fdd5b05cfcda2ceecd552cade62:
            return 0;
        case Types.Entities.NFT_f767cbbd020c062ce87468dc1061cf619adcfe63242eb72912ef99b0c15a67b4:
            return 1;
        case Types.Entities.NFT_d5aa81a19e3bd8bf6f5262f61460f8f4261073ba72bfa164743bbe5c135bbd25:
            return 0;
        case Types.Entities.NFT_c8e702df5158067eac3a12c66f003c11aec6efef75cb1759e010da57433c5e0e:
            return 0;
        case Types.Entities.NFT_f192b0dc4acb97881b42ab83af4f5648d552c1d04b4a2f5463b378aaee9f8088:
            return 1;
        case Types.Entities.NFT_50b326049812ee71d7c35d8672d8d09c1c312a79449a902c9270b5a718bbb8ad:
            return 1;
        case Types.Entities.NFT_072c6ceaa62367e87160215d9cf948e2cb4e1e8c6ef90417674e8aaa01642982:
            return 0;
        case Types.Entities.NFT_97189cd910d1d8a629d03823ce273a89e20ba21d66f127a993a9230c88dacd68:
            return 0;
        case Types.Entities.NFT_500e32bf46bc7f24f3c91bb43a8d5b175803088509f609fb91ee7928c8abc202:
            return 1;
        case Types.Entities.NFT_ab5fcbec6b77b96bf8f985d9d3b2ccf02e6d573850f43444286de6d598ad4295:
            return 0;
        case Types.Entities.NFT_ff6ba455559bcda5c8c31432a26787cac0187def385b73f59a92ba7d98dab366:
            return 1;
        case Types.Entities.NFT_f7267a1c4d02d8f463c1adfe01362b2214a2f888422b32216fcf4006d7534d79:
            return 0;
        case Types.Entities.NFT_130ab907c0226dc270942b1caf7c1c61810960770afdbead91cd4e83b14fec52:
            return 0;
        case Types.Entities.NFT_6f3e97d4a638877ec87265ed37c1995427f7cff74a1f13463bfc7b7cb4e07aae:
            return 1;
        case Types.Entities.NFT_f467e9426427f20f9b663ca00ad963d4ea6a70e21f36428c59669d837ba81270:
            return 0;
        case Types.Entities.NFT_3610fdb9e538de28535d3455e22280a1f7d89cb14bc399fe8c7eafbe80866536:
            return 1;
        case Types.Entities.NFT_f75e77cd96c17c0cbd93ac9228a7e245c865c17bdd91c0da977e4c16afcd520a:
            return 0;
        case Types.Entities.NFT_ac675ef13fea49ab184f4668ed19da3b9e0b8f0e4d785bbc37c68c7fbf8b2559:
            return 1;
        case Types.Entities.NFT_bfc4ae6203a71f501d5c6f2851576b2ff5ce4e6a7f1d9695bed271dea5b9de1d:
            return 0;
        case Types.Entities.NFT_90db15a10d21eab9c715fedd003be1a732012c5dc4d75818887ab72f1d7362b5:
            return 0;
        case Types.Entities.NFT_1182b01e29cd9e91d1e6422ed4600191017df9014b3c1c46067fc787a42a3fe2:
            return 0;
        case Types.Entities.NFT_1b5a581dbea36bbf6bc4da25b2eab413a7339581ce07fad33beb5bf07df30d45:
            return 1;
        // @nextarmorrank@
        default:
            console.error("Unknown armor rank");
            return 0;
    }
};

Types.isPlayer = function(kind) {
    return kinds.getType(kind) === "player";
};

Types.isMob = function(kind) {
    return kinds.getType(kind) === "mob";
};

Types.isNpc = function(kind) {
    return kinds.getType(kind) === "npc";
};

Types.isCharacter = function(kind) {
    return Types.isMob(kind) || Types.isNpc(kind) || Types.isPlayer(kind);
};

Types.isArmor = function(kind) {
    return kinds.getType(kind) === "armor";
};

Types.isWeapon = function(kind) {
    return kinds.getType(kind) === "weapon";
};

Types.isObject = function(kind) {
    return kinds.getType(kind) === "object";
};

Types.isChest = function(kind) {
    return kind === Types.Entities.CHEST;
};

Types.isItem = function(kind) {
    return Types.isWeapon(kind) 
        || Types.isArmor(kind) 
        || (Types.isObject(kind) && !Types.isChest(kind));
};

Types.isHealingItem = function(kind) {
    return kind === Types.Entities.FLASK 
        || kind === Types.Entities.BURGER;
};

Types.isExpendableItem = function(kind) {
    return Types.isHealingItem(kind)
        || kind === Types.Entities.FIREPOTION
        || kind === Types.Entities.CAKE;
};

Types.getKindFromString = function(kind) {
    if(kind in kinds) {
        return kinds[kind][0];
    }
};

Types.getKindAsString = function(kind) {
    for(var k in kinds) {
        if(kinds[k][0] === kind) {
            return k;
        }
    }
};

Types.forEachKind = function(callback) {
    for(var k in kinds) {
        callback(kinds[k][0], k);
    }
};

Types.forEachArmor = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.forEachMobOrNpcKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isMob(kind) || Types.isNpc(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.forEachArmorKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.getOrientationAsString = function(orientation) {
    switch(orientation) {
        case Types.Orientations.LEFT: return "left"; break;
        case Types.Orientations.RIGHT: return "right"; break;
        case Types.Orientations.UP: return "up"; break;
        case Types.Orientations.DOWN: return "down"; break;
    }
};

Types.getRandomItemKind = function(item) {
    var all = _.union(this.rankedWeapons, this.rankedArmors),
        forbidden = [Types.Entities.SWORD1, Types.Entities.CLOTHARMOR],
        itemKinds = _.difference(all, forbidden),
        i = Math.floor(Math.random() * _.size(itemKinds));
    
    return itemKinds[i];
};

Types.getMessageTypeAsString = function(type) {
    var typeName;
    _.each(Types.Messages, function(value, name) {
        if(value === type) {
            typeName = name;
        }
    });
    if(!typeName) {
        typeName = "UNKNOWN";
    }
    return typeName;
};

if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}