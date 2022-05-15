'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products',
    [
      {
        id: 1,
        nome: 'SAMSUNG LS27',
        preco: '215',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_82120812/fee_786_587_png',
        pontos: '10'
      },
      {
        id: 2,
        nome: 'ACER VG24',
        preco: '144',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79253445/fee_786_587_png',
        pontos: '5'
      },
      {
        id: 3,
        nome: 'SAMSUNG LS24',
        preco: '289',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93618804/fee_786_587_png',
        pontos: '15'
      },
      {
        id: 4,
        nome: 'SAMSUNG LS24BM',
        preco: '269',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93606799/fee_786_587_png',
        pontos: '15'
      },
      {
        id: 5,
        nome: 'ACER EK220',
        preco: '119',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75780876/fee_786_587_png',
        pontos: '2'
      },
      {
        id: 6,
        nome: 'SAMSUNG LC24F3',
        preco: '143',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-79402359/fee_786_587_png',
        pontos: '5'
      },
      {
        id: 7,
        nome: 'LG 29WP500',
        preco: '197',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_84305010/fee_786_587_png',
        pontos: '30'
      },
      {
        id: 8,
        nome: 'HUAWEI GT27',
        preco: '329',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93367162/fee_786_587_png',
        pontos: '40'
      },
      {
        id: 9,
        nome: 'ACER NITRO VG22',
        preco: '149',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77355681/fee_786_587_png',
        pontos: '10'
      },
      {
        id: 10,
        nome: 'ACER NITRO VG22',
        preco: '149',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77355681/fee_786_587_png',
        pontos: '10'
      },
      {
        id: 11,
        nome: 'SAMSUNG LS32',
        preco: '300',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93268386/fee_786_587_png',
        pontos: '25'
      },
      {
        id: 12,
        nome: 'LG ULTRAGEAR 24',
        preco: '199',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_90057037/fee_786_587_png',
        pontos: '20'
      },
      {
        id: 13,
        nome: 'HP OMEN 27',
        preco: '480',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75576002/fee_786_587_png',
        pontos: '50'
      },
      {
        id: 14,
        nome: 'SAMSUNG Odyssey G5',
        preco: '500',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_82933900/fee_786_587_png',
        pontos: '55'
      },
      {
        id: 15,
        nome: 'LG ULTRAFINE 32',
        preco: '659',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88357453/fee_786_587_png',
        pontos: '60'
      },
      {
        id: 16,
        nome: 'XTREMEGAMER 24',
        preco: '169',
        imagem: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89726653/fee_786_587_png',
        pontos: '2'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};