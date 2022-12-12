import { Test, TestingModule } from '@nestjs/testing';
import { FactoryService } from './factory.service';
import { AppModule } from '../app.module';
import { Tezos } from '../web3Provider/tezos';

describe('providers', () => {
  let factoryService: FactoryService;
  let tezos: Tezos;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    factoryService = module.get(FactoryService);
    await factoryService.onModuleInit();
    tezos = module.get(Tezos);
  });

  describe('aurora', () => {
    it('aurigami block: 80260740', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'aurigami',
        chain: 'aurora',
        query: { block: '80260740', date: '0' },
      });
      expect(balances).toEqual({
        '0xb12bfca5a55806aaf64e99521918a4bf0fc40802': '1701698217203',
        '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb': '620827366841303074624',
        '0xf4eb217ba2454613b15dbdea6e5f22276410e89e': '3284141927',
        '0x4988a896b1227218e4a686fde5eabdcabd91571f': '753680071250',
        '0xe3520349f477a5f6eb06107066048508498a291b': '34013113796702948047',
        '0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d':
          '249149075596122393035185496636',
        '0x07f9f7f963c5cd2bbffd30ccfb964be114332e30':
          '529358015478955817355719685377',
        '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79': '27934052027757833749135',
        '0xfa94348467f64d5a457f75f8bc40495d33c65abb':
          '1080246373909790689993847',
        '0x09c9d464b58d96837f8d8b6f4d9fe4ad408d3a4f':
          '199562890296646164300264174',
        '0x5183e1b1091804bc2602586919e6880ac1cf2896': '1462156878911252687019',
      });
    });
    it('auroraplus block: 80186813', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'auroraplus',
        chain: 'aurora',
        query: { block: '80186813', date: '0' },
      });
      expect(balances).toEqual({
        '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79':
          '23420161023997237558857267',
      });
    });
  });

  describe('avalanche', () => {
    it('aave block: 23370388', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'aave',
        chain: 'avalanche',
        query: { block: '23370388', date: '0' },
      });
      expect(balances).toEqual({
        '0xd586e7f844cea2f87f50152665bcbc2c279d8d70':
          '22887875998341266141081534',
        '0x5947bb275c521040051d82396192181b413227a3':
          '239219843948396511112293',
        '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e': '129310978686978',
        '0x50b7545627a5162f82a992c33b87adc75187b218': '173883535077',
        '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab': '38794039440157693102819',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7': '25443493581760',
        '0x63a72806098bd3d9520cc43356dd78afe5d386d9': '10537123225877654783815',
        '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7':
          '1846310368905406256734431',
        '0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be':
          '771998421105064576392043',
        '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64': '10536620294232566847866',
        '0x5c49b268c9841aff1cc3b0a418ff5c3442ee3f3b': '184730952176462766373',
        '0x152b9d0fdc40c096757f570a51e494bd4b943e50': '216396114063',
        '0xc7198437980c041c805a1edcba50c1ce5db95118': '1356781757156',
        '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664': '7029438939564',
      });
    });
    it('alpha block: 23412552', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'alpha',
        chain: 'avalanche',
        query: { block: '23412552', date: '0' },
      });
      expect(balances).toEqual({
        '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7':
          '491517113005861091258220.24912874985350448278',
        '0xc7198437980c041c805a1edcba50c1ce5db95118':
          '927139836190.41396629439721491318',
        '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e':
          '2290085929341.33322517788873781183',
        '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664':
          '3316858740786.88081896728776697492',
        '0xd586e7f844cea2f87f50152665bcbc2c279d8d70':
          '268323443352563677638794.58116093092566013331',
        '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab':
          '194473835346371495135.20525047278698269334',
        '0x50b7545627a5162f82a992c33b87adc75187b218':
          '3237443153.23076668620242061535',
        '0x130966628846bfd36ff31a822705796e8cb8c18d':
          '129817403602815847011493.3068010407111510088',
        '0x2147efff675e4a4ee1c2f918d181cdbd7a8e208f':
          '430683032386342546712885.4351087884646536134',
        '0x5947bb275c521040051d82396192181b413227a3':
          '17755245397120712312.94424092575760948836',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7':
          '786303274996.32347392054715894187',
        '0xb599c3590f42f8f995ecfa0f85d2980b76862fc1':
          '487262830.3255116774057032308',
      });
    });
  });

  describe('celo', () => {
    it('immortal block: 16584054', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'immortal',
        chain: 'celo',
        query: { block: '16584054', date: '0' },
      });
      expect(balances).toEqual({
        '0x918146359264c492bd6934071c6bd31c854edbc3':
          '77415191059008427734358.11573153686061103281',
        '0xe685d21b7b0fc7a248a6a8e03b8db22d013aa2ee':
          '748561656261812.13521365750601670909',
      });
    });
    it('impactmarket block: 16584079', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'impactmarket',
        chain: 'celo',
        query: { block: '16584079', date: '0' },
      });
      expect(balances).toEqual({
        '0x46c9757c5497c5b1f2eb73ae79b6b67d119b0b58':
          '2000000000000000000000000000',
      });
    });
  });

  describe('ethereum', () => {
    it('yearn block: 16145650', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'yearn',
        chain: 'ethereum',
        query: { block: '16145650', date: '0' },
      });
      const responseKeys = Object.keys(balances);
      expect(responseKeys).toContain(
        '0x0000000000085d4780b73119b644ae5ecd22b376',
      );
      expect(responseKeys.length).toBeGreaterThan(0);
    });
    it('wing block: 16145650', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'wing',
        chain: 'ethereum',
        query: { block: '16145650', date: '0' },
      });
      const responseKeys = Object.keys(balances);
      expect(responseKeys).toContain(
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      );
      expect(responseKeys.length).toBeGreaterThan(0);
    });
  });

  describe('fantom', () => {
    it('beefyfinance block: 52154943', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'beefyfinance',
        chain: 'fantom',
        query: { block: '52154943', date: '0' },
      });
      expect(balances).toEqual({
        '0xd6070ae98b8069de6b494332d1a1a81b6179d960':
          '8639794427812386765049.90589242363206881073',
        '0x7381ed41f6de418dde5e84b55590422a57917886':
          '11361043000738151989829108.03339451295996392947',
        '0x04068da6c83afcfa0e13ba15a6696662335d5b75':
          '2593247323618.29182630944992389628',
        '0xde1e704dae0b4051e80dabb26ab6ad6c12262da0':
          '181890942088272151630111.90350117426631141982',
        '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83':
          '14625514289457835808319772.29237143495176390304',
        '0xde5ed76e7c05ec5e4572cfc88d1acea165109e44':
          '230927714044007009434.31831303587479806244',
        '0xfb98b335551a418cd0737375a2ea0ded62ea213b':
          '421124212710718350527785.07691830159977467828',
        '0x049d68029688eabf473097a2fc38ef61633a3c7a':
          '1426883753216.57730676981686065792',
        '0x4e415957aa4fd703ad701e43ee5335d1d7891d83':
          '177324329455230213824580',
        '0xae45a827625116d6c0c40b5d7359ecf68f8e9afd':
          '85098872135389452414.80623989089633175486',
        '0xd7028092c830b5c8fce061af2e593413ebbc1fc1':
          '246652443737803233949184.39883482832201576646',
        '0x74b23882a30290451a17c44f4f05243b6b58c76d':
          '1292909705157658476054.60646095246943433162',
        '0xc931f61b1534eb21d8c11b24f3f5ab2471d4ab50':
          '32313364709866856415467.92709189361424744976',
        '0x70f9fd19f857411b089977e7916c05a0fc477ac9':
          '244175846979082531512.62495648529113182726',
        '0x2ad402655243203fcfa7dcb62f8a08cc2ba88ae0':
          '111197048608186574647666.11121235300066619368',
        '0x82f0b8b456c1a451378467398982d4834b6829c1':
          '422456486505280232827235.57460827541484959449',
        '0xb67fa6defce4042070eb1ae1511dcd6dcc6a532e':
          '1549098730619863468264.41922065348555648852',
        '0x321162cd933e2be498cd2267a90534a804051b11':
          '11242731831.94631669870835948176',
        '0xdc301622e621166bd8e82f2ca0a26c13ad0be355':
          '996122120623637443148121.06224849228415845625',
        '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e':
          '372477926347240463611359.88655090711046460475',
        '0x5cc61a78f164885776aa610fb0fe1257df78e59b':
          '1313123717192177696782947.57925942146670999005',
        '0x44e314190d9e4ce6d4c0903459204f8e21ff940a':
          '29863782194410265310258294.47686480434186449368',
        '0x888ef71766ca594ded1f0fa3ae64ed2941740a20':
          '640713136921913657949.26504196578838703855',
        '0xf7554d17d1c3f09899dcc8b404becae6dfa584fa':
          '685775953296311032749.02248708688028717276',
        '0x501ace9c35e60f03a2af4d484f49f9b1efde9f40': '39160752478607834524602',
        '0x65411827ef78f08f6559acf91de3a4f5a26d785c': '3430917994655474086601',
        '0x2bea17ede5d83ad19ae112b8592aadaa2b015de7': '66964955580502143606291',
        '0x65bf2d53bd1d7050d22873f6b9bb59edb0ca0b20': '15592706776932952625137',
        '0x07e6332dd090d287d3489245038daf987955dcfb':
          '764595079339885538576286.5521216906102894423',
        '0xe578c856933d8e1082740bf7661e379aa2a30b26':
          '747008378475.25006395555711470813',
        '0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5':
          '876353144879.9797779675450353995',
        '0xf3a602d30dcb723a74a0198313a7551feaca7dac': '6046143526179501489214',
        '0x3129662808bec728a27ab6a6b9afd3cbaca8a43c':
          '229051016986342224281484.29236262006208300753',
        '0x2c580c6f08044d6dfaca8976a66c8fadddbd9901': '62147305716974356644812',
        '0xfc092f85125907ffcb0f9012e6e40b3f37c4de60': '9473257409600062951492',
        '0x2975035545008935152fdf48ca13406cc5d4e475': '2860633369052623675247',
        '0x72c0eb973dc95e2d185563f58fc26626cc2e8034': '229925938331374670129',
        '0xa07de66aef84e2c01d88a48d57d1463377ee602b': '216677814256864807993',
        '0x22b30b00e6796daf710fbe5cafbfc9cdd1377f2a': '31921023417284381696',
        '0xd163415bd34ef06f57c58d2aed5a5478afb464cc': '6328984175261447782458',
        '0xcde5a11a4acb4ee4c805352cec57e236bdbc3837':
          '1443184194468215965668736',
        '0xd47d2791d3b46f9452709fa41855a045304d6f9d': '527780595147314410161',
        '0xcdf68a4d525ba2e90fe959c74330430a5a6b8226':
          '168850268257173544465305',
        '0xddc0385169797937066bbd8ef409b5b3c0dfeb52':
          '276627069587418711.88506270209638339632',
        '0xd8321aa83fb0a4ecd6348d4577431310a6e0814d':
          '3306723792269270837627161.67871891656257191145',
        '0x468003b688943977e6130f4f68f23aad939a1040':
          '62724117448385873160456624.05957722576296217542',
        '0x1e4f97b9f9f913c46f1632781732927b9019c68b':
          '255480425395397088598589.08384821845103600217',
        '0x6c021ae822bea943b2e66552bde1d2696a53fbb7':
          '6154314594997759837245372.0414941365018948469',
        '0xc60d7067dfbc6f2caf30523a064f416a5af52963':
          '438635676483024821906894.28718603414805457497',
        '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8':
          '38950175319629231058795.76380142366811468135',
        '0x841fad6eae12c286d1fd18d1d525dffa75c7effe':
          '310212612065582497944565.81157882704409016296',
        '0xe0654c8e6fd4d733349ac7e09f6f23da256bf475':
          '47844448469584041357210.81135725270508230304',
        '0x29b0da86e484e1c0029b56e817912d778ac0ec69':
          '3241503930920777927.57039305592585826662',
        '0xdbf31df14b66535af65aac99c32e9ea844e14501':
          '543355342.20009748543133261952',
        '0xf16e81dce15b08f326220742020379b855b87df9':
          '24255042504309199690998.2652387445839145585',
        '0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc':
          '6089686721409480187939.29474398414572871883',
        '0xddcb3ffd12750b45d32e084887fdf1aabab34239':
          '350141178023699821722.91582552385409737484',
        '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454':
          '240407991064869150744.49100245610412348684',
        '0xb01e8419d842beebf1b70a7b5f7142abbaf7159d':
          '20035078506122590.48383703591206319535',
        '0x9f47f313acfd4bdc52f4373b493eae7d5ac5b765':
          '21345366378049486614136.70974545531105429941',
        '0x5e65474c8400d0bb76edbbe066b2d2e7b0b6e7fb': '335908219320870854472',
        '0x9879abdea01a879644185341f7af7d8343556b7a':
          '1079720547544546299810480.31817694375977545988',
        '0x41870439b607a29293d48f7c9da10e6714217624': '9490341269123318315309',
        '0x9d8f97a3c2f9f397b6d46cbe2d39cc1d8cf19010':
          '21223661058487034487807.7738786780530687741',
        '0x94ccf60f700146bea8ef7832820800e2dfa92eda':
          '122869963772855172596.06678170908224899704',
        '0x3dc57b391262e3aae37a08d91241f9ba9d58b570':
          '13556078293890715207241.2591576703490071756',
        '0x7c10108d4b7f4bd659ee57a53b30df928244b354':
          '1643973718339255147884231.36784484083912803431',
        '0x3a3841f5fa9f2c283ea567d5aeea3af022dd2262':
          '5880959366894127311.68430596921148854614',
        '0xa0828ee559110b041dedbf10ae0cf42274251de1': '2237597',
        '0x05848b832e872d9edd84ac5718d58f21fd9c9649':
          '1657967949003280062.57644822443071692416',
        '0x27e611fd27b276acbd5ffd632e5eaebec9761e40':
          '3745148049631489730756767.93491842503203755745',
        '0xd0660cd418a64a1d44e9214ad8e459324d8157f1':
          '12662444944958487.929433945426891654',
        '0x511d35c52a3c244e7b8bd92c0c297755fbd89212':
          '5396915062519743409332.52781409107262017732',
        '0x6626c47c00f1d87902fc13eecfac3ed06d5e8d8a':
          '109500127875341206278301.9138761498141684747',
        '0x03c6b3f09d2504606936b1a4decefad204687890': '1766914171940780677',
        '0x09e145a1d53c0045f41aeef25d8ff982ae74dd56':
          '603950.07759973869140516707',
        '0x56ee926bd8c72b2d5fa1af4d9e4cbb515a1e3adc':
          '54003724641652400641.92298883624346872936',
        '0x40df1ae6074c35047bff66675488aa2f9f6384f3':
          '64539258367627170942116.21247783797455272384',
        '0xecaa1cbd28459d34b766f9195413cb20122fb942':
          '213156065920100937725122',
        '0xd57cda2caebb9b64bb88905c4de0f0da217a77d7': '12524971722810959846964',
        '0xc042ef6ca08576bdfb57d3055a7654344fd153e4': '90314248030626420996',
        '0xd41bf724b6e31311db582c5388af6b316e812fe4': '991094936433929642',
        '0x85dec8c4b2680793661bca91a8f129607571863d':
          '425143928392474899286280.35232774644153518688',
        '0xf24bcf4d1e507740041c9cfd2dddb29585adce1e':
          '376473398094676767227005.3320325126546507744',
        '0xbb29d2a58d880af8aa5859e30470134deaf84f2b':
          '151871367327785614189066.35755768034934495145',
        '0xd97f9674e2597e7a252de4875985f4385b9608fb':
          '1668718862794166318652.1854340508968105998',
        '0x91fa20244fb509e8289ca630e5db3e9166233fdc':
          '290816172462209796.2225268658527547845',
        '0x37c045be4641328dfeb625f1dde610d061613497':
          '20799462614552601.81815312714760146032',
        '0x112df7e3b4b7ab424f07319d4e92f41e6608c48b':
          '2367947756907221934525292.5173243383985658003',
        '0x8a41f13a4fae75ca88b1ee726ee9d52b148b0498':
          '50392001529519028950939.41131560220192776921',
        '0xe3d17c7e840ec140a7a51aca351a482231760824': '26718866276476132304',
        '0xa48d959ae2e88f1daa7d5f611e01908106de7598': '48477559064834687859',
        '0xc165d941481e68696f43ee6e99bfb2b23e0e3114':
          '618473074726834791323283.32967162901377113733',
        '0x8f9bccb6dd999148da1808ac290f2274b13d7994':
          '28512670310416213143738.46162755654447524193',
        '0xde12c7959e1a72bbe8a5f7a1dc8f8eef9ab011b3':
          '20901101114547516460436.38399098399386698967',
        '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3':
          '6684246698630361876390.35389562251877281578',
        '0x53d831e1db0947c74e8a52618f662209ec5de0ce':
          '155730946236134293863707.81584155892212728774',
        '0x3d8f1accee8e263f837138829b6c4517473d0688':
          '209043241717333627449629.19575858898484890145',
        '0x181f3f22c9a751e2ce673498a03e1fdfc0ebbfb6':
          '231713874290157516088452.39375694669330212109',
        '0xa92d41ab8efee617d80a829cd9f5683c5f793ada':
          '11247634379159603122275731.9267828921168376537',
        '0x65def5029a0e7591e46b38742bfedd1fb7b24436':
          '140623662827756411045.86178563074779552535',
        '0xe992beab6659bff447893641a378fbbf031c5bd6':
          '32554463255954961220047745.51831808425880337574',
        '0x8d7d3409881b51466b483b11ea1b8a03cded89ae':
          '506098122816066361500947.61763423304608742682',
        '0x49c290ff692149a4e16611c694fded42c954ab7a':
          '2222396978175286076439.51589554642954038981',
        '0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2':
          '4226371631410.49482708664698249206',
        '0x10010078a54396f62c96df8532dc2b4847d47ed3':
          '18126862126549127418094.96159741677848157376',
        '0x846e4d51d7e2043c1a87e0ab7490b93fb940357b':
          '201021566890.64200156180954558558',
        '0xa1c5698a042638b6220e336ed9cfafb499560c20': '149373747032152186432',
        '0x627524d78b4fc840c887ffec90563c7a42b671fd':
          '9074137743872911953.13161891577047747824',
        '0x248cb87dda803028dfead98101c9465a2fbda0d4':
          '7410481809899732549889400.1808164068476975462',
        '0xfbc3c04845162f067a0b6f8934383e63899c3524':
          '288018634055601170596331.74531032635240216536',
        '0xbb4607bede4610e80d35c15692efcb7807a2d0a6': '3081676687163507787',
        '0x2d72a97a31dc920db03330780d30074626e39c8a':
          '2741968565539756092003.43405211918682298809',
        '0xbbc4a8d076f4b1888fec42581b6fc58d242cf2d5':
          '15199869169630170694765.39972292548213088058',
        '0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37':
          '202538785777662750191.57898530090740079453',
        '0x12edea9cd262006cc3c4e77c90d2cd2dd4b1eb97': '711545483805',
        '0x3bd4c3d1f6f40d77b2e9d0007d6f76e4f183a46d':
          '350589489770251568619238',
        '0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae':
          '781806748086794593813827.75697695789700574628',
        '0xc54a1684fd1bef1f077a336e6be4bd9a3096a6ca':
          '1023377982590647963315.67904087081814347416',
        '0x4a89338a2079a01edbf5027330eac10b615024e5':
          '480659546665214463654.0596743014718770093',
        '0xd02a30d33153877bc20e5721ee53dedee0422b2f':
          '2642873015828873412983.4821097768309322359',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee':
          '2413569877089707229582.91840450895766953798',
        '0xc0d9784fdba39746919bbf236eb73bc015fd351d':
          '286346859108885543057.03725154961381230762',
        '0x713ee620a7702b79ea5413096a90702244fe4532': '961953684853628040512',
        '0xfa901cadcaf38cd533e8b1f693d090fc7005658e': '311822758462024423293',
        '0xf0e2c47d4c9fbbbc2f2e19acdaa3c773a3ecd221': '3798510867427521230783',
        '0x6d12d3fe16dd83115254a32b273b05ac5444c349': '2024034521751602960504',
        '0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b':
          '10031832009409480827.80764148277320273848',
        '0x0e8e7307e43301cf28c5d21d5fd3ef0876217d41': '4490541324359938009',
        '0xf7bf0f161d3240488807ffa23894452246049916': '13038531030595576298',
        '0x8bb1839393359895836688165f7c5878f8c81c5e': '150230169275696008878',
        '0xf3f0970bca8ce7e9672d17a301b54d1485d93807': '11345315791325136523379',
        '0x6fdc8415b654b0f60475944a0b9421dc36ee1363': '1829885439996744817',
        '0xd5e946b5619fff054c40d38c976f1d06c1e2fa82': '1018745321820277525',
        '0xfb66e49e303a186a4c57414ceeed651a7a78161a':
          '2252015679215.12236341307847129731',
        '0x152888854378201e173490956085c711f1ded565':
          '1238593371500810538569.1008096409335815629',
        '0xb66b5d38e183de42f21e92abcaf3c712dd5d6286':
          '1614801550102017603.20190804940859157429',
        '0xc758295cd1a564cdb020a78a681a838cf8e0627d':
          '325466843035723281080355.27327482657650795587',
        '0x2126be94443334fd71428dba3c638fb722d1838e':
          '74888572303595522906.01027005234679139302',
        '0x89346b51a54263cf2e92da79b1863759efa68692':
          '8543268301026868123.89561985382982050944',
        '0x63386ef152e1ddef96c065636d6cc0165ff33291': '7856221016349223880936',
        '0x5bb2dee206c2bcc5768b9b2865ea971bd9c0ff19': '52289131299398085014196',
        '0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e':
          '5127275883570842221501445.94959049844489755374',
        '0x8b858eaf095a7337de6f9bc212993338773ca34e': '23416076943865122171839',
        '0x2fbb1ef03c02f9bb2bd6f8c8c24f8de347979d9e': '19044041080797832802836',
        '0x66bcb58cf9754f421c268990b280e4462e10aac8': '17143372932514095031426',
        '0x9af1f0e9ac9c844a4a4439d446c1437807183075': '7099101507531511122103',
        '0x593ae1d34c8bd7587c11d539e4f42bff242c82af':
          '69559303055.90583777681785058556',
        '0xb37528da6b4d378305d000a66ad91bd88e626761':
          '716639101092073.4498033357866568512',
      });
    });
    it('beethovenx block: 52155010', async () => {
      const { balances } = await factoryService.getTvl({
        provider: 'beethovenx',
        chain: 'fantom',
        query: { block: '52155010', date: '2022-12-11' },
      });
      expect(balances).toEqual({
        '0x04068da6c83afcfa0e13ba15a6696662335d5b75': '8785734571489',
        '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9':
          '601960531395960951884673',
        '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83':
          '22900571283739808568175355',
        '0x44f7237df00e386af8e79b817d05ed9f6fe0f296': '5723219354895521368647',
        '0x511d35c52a3c244e7b8bd92c0c297755fbd89212': '3850728303946308005142',
        '0x82f0b8b456c1a451378467398982d4834b6829c1':
          '143916659615561622849060',
        '0x95dd59343a893637be1c3228060ee6afbf6f0730': '26504519770346',
        '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3': '2498851417095931103443',
        '0x74b23882a30290451a17c44f4f05243b6b58c76d': '1179858306430795329696',
        '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e':
          '1706602717210885351378799',
        '0xc5a9848b9d145965d821aaec8fa32aaee026492d': '115468531942998760657',
        '0x30a9eb3ec69ed8e68c147b47b9c2e826380024a3': '64735167222595',
        '0x7893ae094dec343cd8080e78ee73ea1930d19abe': '232281774353816800',
        '0x98010a39f41e2ef41c4943936bd852a1843c9574': '68445412117',
        '0xc653c5128c8d135ff8ad796353128aff872ff1ba': '353073488219658415',
        '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee': '10173006146792321854',
        '0x21ada0d2ac28c3a5fa3cd2ee30882da8812279b6':
          '10257585271982712437636594',
        '0xf24bcf4d1e507740041c9cfd2dddb29585adce1e':
          '105124508904012060888028573',
        '0xfcef8a994209d6916eb2c86cdd2afd60aa6f54b1':
          '363188294916318608678260',
        '0xa882ceac81b22fc2bef8e1a82e823e3e9603310b':
          '1876481203753554957984266',
        '0x814c66594a22404e101fecfecac1012d8d75c156': '61835640824987034890840',
        '0x9049198f6b21acf1e050cfcf36a6879a07b0bbe4': '372139129977359407',
        '0xfb66e49e303a186a4c57414ceeed651a7a78161a': '6',
        '0xf16e81dce15b08f326220742020379b855b87df9':
          '134526270759178727122781',
        '0x87a5c9b60a3aaf1064006fe64285018e50e0d020': '24758811757776935',
        '0xc8ca9026ad0882133ef126824f6852567c571a4e': '243085516125476',
        '0x7d59cdad5332efc72d7ee902c52873446e436b57': '689747372522510088',
        '0xe2d27f06f63d98b8e11b38b5b08a75d0c8dd62b9': '49512259870',
        '0xde5ed76e7c05ec5e4572cfc88d1acea165109e44': '121534380799335681565',
        '0x321162cd933e2be498cd2267a90534a804051b11': '8399479347',
        '0x6c021ae822bea943b2e66552bde1d2696a53fbb7': '9823507473052984654824',
        '0x841fad6eae12c286d1fd18d1d525dffa75c7effe': '83813130042005879161489',
        '0xa48d959ae2e88f1daa7d5f611e01908106de7598': '27040017714128945567561',
        '0xbf07093ccd6adfc3deb259c557b61e94c1f66945': '5545109502090578037',
        '0x0e249130b3545a2a287de9f27d805cab95f03db9':
          '346445500391065152818666',
        '0x95395f78eadf46d3893f4c1dd2c2bb27d169c6c2': '1681109',
        '0xe409e86058bac20128bff16fd0df6bb6f11404f0': '6411954',
        '0xe4ab52c6daad02ac62d9deffa51e7aa96b29e04b': '31001995',
        '0x1e4f97b9f9f913c46f1632781732927b9019c68b': '76283106670847172635845',
        '0x5cc61a78f164885776aa610fb0fe1257df78e59b':
          '25756053777012174966025636',
        '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8': '11657330863282949117740',
        '0xe0654c8e6fd4d733349ac7e09f6f23da256bf475': '2799772848865620096606',
        '0x05848b832e872d9edd84ac5718d58f21fd9c9649': '14254271929381580515',
        '0x9879abdea01a879644185341f7af7d8343556b7a': '4512270998693739051548',
        '0x38ce1fbc9b1eb4c2ed19268153a4280e522f0e6f': '42428101240',
        '0xd7028092c830b5c8fce061af2e593413ebbc1fc1':
          '13808292296046246227451439',
        '0xb6def0b5f584344a694c1af50f9cf23dd742f061':
          '9930491904173593584412352',
        '0xc6abcbc1d27c9586de063a2e2aec6cebec504646':
          '1007032596234975451332017',
        '0x593ae1d34c8bd7587c11d539e4f42bff242c82af': '9190425910633',
        '0x4b4491679440e6bdf98f664aa59441b82fb530ea': '200000000000000000',
        '0x645c0f570693388c8405556e6798e8ba72f5221a': '420000000000000000',
        '0x2d7117a92faade862305670e818d8ef30f32ba1a': '69940692057903',
        '0x846e4d51d7e2043c1a87e0ab7490b93fb940357b': '754343326141',
        '0x16dbd24713c1e6209142bcfeed8c170d83f84924': '70584645512256521614162',
        '0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7': '4516841157899',
        '0xe992c5abddb05d86095b18a158251834d616f0d1': '325592374601735182583',
        '0xc5713b6a0f26bf0fdc1c52b90cd184d950be515c':
          '39174720396955485315222682',
        '0x3028b4395f98777123c7da327010c40f3c7cc4ef': '4112476',
        '0xce2fc0bdc18bd6a4d9a725791a3dee33f3a23bb7': '22292431354749566631',
        '0x049d68029688eabf473097a2fc38ef61633a3c7a': '55805510473',
        '0xaf319e5789945197e365e7f7fbfc56b130523b33': '135261',
        '0xc931f61b1534eb21d8c11b24f3f5ab2471d4ab50': '797774',
        '0xe3a486c1903ea794eed5d5fa0c9473c7d7708f40': '1887914733696337162',
        '0x29b0da86e484e1c0029b56e817912d778ac0ec69': '42226331509361552',
        '0xd6070ae98b8069de6b494332d1a1a81b6179d960': '3995856233356874331',
        '0xd8321aa83fb0a4ecd6348d4577431310a6e0814d': '6970787496574696112970',
        '0x07e6332dd090d287d3489245038daf987955dcfb': '65358007354265645',
        '0x25c130b2624cf12a4ea30143ef50c5d68cefa22f': '17993621395846',
        '0x39b3bd37208cbade74d0fcbdbb12d606295b430a': '82268859618331853',
        '0x688d5c6b26462e42c56b4ec1d1165ccade418f5d': '792691968198775',
        '0x582423c10c9e83387a96d00a69ba3d11ee47b7b5':
          '1442597876227878636681821',
        '0x888ef71766ca594ded1f0fa3ae64ed2941740a20': '95743045480563774445873',
        '0xa71353bb71dda105d383b02fc2dd172c4d39ef8b': '210418',
        '0xd31fcd1f7ba190dbc75354046f6024a9b86014d7': '827883914193052050007',
        '0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37': '1190994588678646307',
        '0xaa621d2002b5a6275ef62d7a065a865167914801': '33041',
        '0xfbd2945d3601f21540ddd85c29c5c3caf108b96f': '593327',
        '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454': '632057437624101686062',
        '0x7d016eec9c25232b01f23ef992d98ca97fc2af5a': '65396291868301593308',
        '0x412a13c109ac30f0db80ad3bd1defd5d0a6c0ac6': '564137071158362373968',
        '0xdc301622e621166bd8e82f2ca0a26c13ad0be355': '78692089174340731908',
        '0x117db78176c8ede4f12fcd29d85cd96b91a4cbbb':
          '8001113215430689076554337',
        '0x77128dfdd0ac859b33f44050c6fa272f34872b5e': '94410143378731034693933',
        '0xddc0385169797937066bbd8ef409b5b3c0dfeb52': '270541607567758135',
        '0x8de250c65636ef02a75e4999890c91cecd38d03d': '569975686',
        '0x8e2549225e21b1da105563d419d5689b80343e01': '9360396',
        '0xb5e4d17ffd9d0dce46d290750dad5f9437b5a16b': '1259591226426716503550',
        '0xd41bf724b6e31311db582c5388af6b316e812fe4': '4950000000000000000',
        '0x60e6afeb3ac2fbc82a8d312bea3b47dc6b4848d2': '517396',
        '0x85dec8c4b2680793661bca91a8f129607571863d':
          '2015390808034418420201977',
        '0xc5e2b037d30a390e62180970b3aa4e91868764cd':
          '2453030501548218117323038',
        '0xe55e19fb4f2d85af758950957714292dac1e25b2': '9253943',
        '0x40df1ae6074c35047bff66675488aa2f9f6384f3':
          '137958387191748954617858',
        '0xde12c7959e1a72bbe8a5f7a1dc8f8eef9ab011b3':
          '690314585216448349255347',
        '0xb37528da6b4d378305d000a66ad91bd88e626761': '369042',
        '0x468003b688943977e6130f4f68f23aad939a1040':
          '29815432666527857725731861',
        '0x7f620d7d0b3479b1655cefb1b0bc67fb0ef4e443': '19883771841132670850',
        '0xbb29d2a58d880af8aa5859e30470134deaf84f2b': '4687677828993684594854',
        '0x2b9d3f168905067d88d93f094c938bacee02b0cb': '27740971384',
        '0xfb98b335551a418cd0737375a2ea0ded62ea213b':
          '448163967982794334748024',
        '0x681a02302213c09171ddd45232cc5652e95ccc83': '1642500000000000000000',
        '0xd802df71f737f9c687c5d389fd6ac421d0666f10': '1642500000000000000000',
        '0x953cd009a490176fceb3a26b9753e6f01645ff28': '1701062530347887827',
        '0x471762a7017a5b1a3e931f1a97aa03ef1e7f4a73':
          '262695924702924818936969',
        '0x42538ce99111ea34dc2987b141bd6e9b594752d6':
          '5192296858534827617454897596120032',
        '0x44165fad0b7ea0d54d8856765d936d7026f9e2f2':
          '5192296858534827624578326040874783',
        '0x5ddb92a5340fd0ead3987d3661afcd6104c3b757':
          '5192296857490771937644059334046037',
        '0xc3bf643799237588b7a6b407b3fc028dd4e037d2':
          '5192296858532994387936749782831979',
        '0xa147268f35db4ae3932eabe42af16c36a8b89690':
          '1311959603209899390732659',
        '0x425ccc1390bed338d98daff91ff0f03738b534ef': '4214900482337972878',
        '0xa14310c69c7b069bb176d8a411dbab28918da758': '1978320615382204052834',
        '0x5602df4a94eb6c680190accfa2a475621e0ddbdc': '7249062',
        '0x7082ca5058c358997063400ad78306b16a5c30d9': '150000000000000',
        '0xe4517100ae62cbeefc363e59d0f8df5754dc7e40': '300000000000000',
        '0xe52a9eb2505a072324984c818c0f49c19c8b6abb': '150000000000000',
        '0x68aa691a8819b07988b18923f712f3f4c8d36346':
          '189781400369782531569434',
        '0xddcb3ffd12750b45d32e084887fdf1aabab34239': '1891291965868578005299',
        '0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc': '4368249433373092182326',
        '0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2': '99183367199072600496',
        '0x10010078a54396f62c96df8532dc2b4847d47ed3':
          '4845885903221723534780622',
        '0x2d72a97a31dc920db03330780d30074626e39c8a': '646060',
      });
    });
  });

  describe('tezos', () => {
    it('alien block: 2955365', async () => {
      await tezos.onModuleInit();
      const { balances } = await factoryService.getTvl({
        provider: 'alien',
        chain: 'tezos',
        query: { block: '2955365', date: '0' },
      });
      expect(balances).toEqual({
        KT19DUSZw7mfeEATrbWVPHRrWNVbNnmfFAE6:
          '249715664088144.12718220767259870011',
        KT1H5KJDxuM9DURSfttepebb6Cn7GbvAAT45:
          '165878849369.74953586084234066502',
        KT1XPFjZqCULSnqfKaaYy8hJjeY63UNSGwXg_0: '497068053.1162191356759715904',
        KT193D4vozYnhGJQVtw7CoxxqphqUEEwK6Vb_0:
          '241078174.13193946425867717656',
      });
    }, 1000000);
    it('plenty block: 2955365', async () => {
      await tezos.onModuleInit();
      const { balances } = await factoryService.getTvl({
        provider: 'wrapprotocol',
        chain: 'tezos',
        query: { block: '2955365', date: '0' },
      });
      expect(balances).toEqual({
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_0: '36043709917618147490',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_1: '289868031771383495604700',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_2: '4020041',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_3: '7798299202315263415',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_4: '11089733753413',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_5: '104173410141251221065552',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_6: '30009667729248861709',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_7: '59699467914408847249',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_8: '248321066328',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_9: '228191800012206869815',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_10: '14203355884512846375162',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11: '101859295633637265101693',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_12: '855327737194690250',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_13: '42615976704141157740',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_14: '2866084783658307381347',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_15: '396484842089866656148',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_16: '1003579566448386701175',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_17: '967101803925',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_18: '120852313751',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_19: '5979654498',
        KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_20: '258851288718572944362',
        KT1LRboPna9yQY9BrjtQYDS1DVxhKESK4VVd: '201825249886635',
      });
    }, 1000000);
  });
});
