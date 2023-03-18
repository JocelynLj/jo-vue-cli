/*
 * @Author: liujuan
 * @Date: 2023-03-15 11:27:46
 * @LastEditors: liujuan
 * @LastEditTime: 2023-03-15 11:27:49
 * @Description: 
 */
module.exports = pmInstance => {
  pmInstance.injectFeature({
    name: 'Babel',
    value: 'babel',
    short: 'Babel',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://babeljs.io/',
    checked: true
  })
}