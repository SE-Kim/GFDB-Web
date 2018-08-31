const base = require('./translation.json')

module.exports = {
  ...base,
  'name': 'ko-kr',
  'Hello text': '你好 欢迎来到少前攻略站',
  'menus': [
    { label: '敌方数据', path: '/maps' },
    { label: '后勤列表', path: '/quest' },
  ],
}