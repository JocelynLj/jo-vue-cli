/*
 * @Author: liujuan
 * @Date: 2023-03-17 15:02:59
 * @LastEditors: liujuan
 * @LastEditTime: 2023-03-17 15:03:07
 * @Description: 
 */
const { semver, execa } = require('@vue/cli-shared-utils')
const { executeCommand } = require('./util/executeCommand')

const PACKAGE_MANAGER_CONFIG = {
  npm: {
    install: ['install', '--loglevel', 'error']
  }
}

class PackageManager {
  constructor({ context } = {}) {
    this.context = context || process.cwd()
    this.bin = 'npm'
    this._registries = {}

    // npm 版本处理
    const MIN_SUPPORTED_NPM_VERSION = '6.9.0'
    const npmVersion = execa.sync('npm', ['--version']).stdout

    if (semver.lt(npmVersion, MIN_SUPPORTED_NPM_VERSION)) {
      throw new Error('NPM 版本太低啦，请升级')
    }

    if (semver.gte(npmVersion, '7.0.0')) {
      this.needsPeerDepsFix = true
    }
  }

  // 安装
  async install() {
    const args = []

    // npm 版本大于7
    if (this.needsPeerDepsFix) {
      args.push('--legacy-peer-deps')
    }

    return await this.runCommand('install', args)
  }

  async runCommand(command, args) {
    await executeCommand(
      this.bin,
      [
        ...PACKAGE_MANAGER_CONFIG[this.bin][command],
        ...(args || [])
      ],
      this.context
    )
  }
}

module.exports = PackageManager;