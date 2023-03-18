/*
 * @Author: liujuan
 * @Date: 2023-03-08 22:21:11
 * @LastEditors: liujuan
 * @LastEditTime: 2023-03-14 22:20:05
 * @Description: 
 */
const path = require('path')
const Creator = require('./Creator')

module.exports = async (projectName) => {
  // 命令运行时的目录
  const cwd = process.cwd()
  // 目录拼接项目名
  const targetDir = path.resolve(cwd, projectName || '.')
  // 实例化
  const creator = new Creator(projectName, targetDir)
  // 调用
  await creator.create()
}