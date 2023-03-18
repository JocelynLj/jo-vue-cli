/*
 * @Author: liujuan
 * @Date: 2023-03-15 11:48:37
 * @LastEditors: liujuan
 * @LastEditTime: 2023-03-15 11:48:49
 * @Description: 
 */
function getPromptModules() {
  return [
    'babel',
    'router',
  ].map(file => require(`../promptModules/${file}`))
}

module.exports = {
  getPromptModules
}