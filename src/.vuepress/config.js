const longTitle = '學生計算機年會 | Students\' Information Technology Conference'
const shortTitle = '學生計算機年會'
const description = '以學生為本、由學生自發舉辦，SITCON 學生計算機年會不只是學生「學以致用、教學相長」的實際展現，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發。'
const url = 'https://sitcon.org'

module.exports = {
  title: longTitle,
  description: description,
  dest: 'dist',
  head: [
    ['meta', {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    }],
    ['meta', {
      property: 'og:title',
      content: shortTitle
    }],
    ['meta', {
      property: 'og:type',
      content: 'website'
    }],
    ['meta', {
      property: 'og:url',
      content: url
    }],
    // ['meta', {
    //   property: 'og:image',
    //   content: 'https://sitcon.org/2017/cfp/landing-page.png'
    // }],
    // ['meta', {
    //   property: 'og:image:width',
    //   content: '1024'
    // }],
    // ['meta', {
    //   property: 'og:image:height',
    //   content: '639'
    // }],
    ['meta', {
      property: 'og:site_name',
      content: shortTitle
    }],
    ['meta', {
      property: 'og:description',
      content: description
    }],
    ['meta', {
      property: 'twitter:title',
      content: shortTitle
    }],
    ['meta', {
      property: 'twitter:description',
      content: description
    }],
  ]
}
