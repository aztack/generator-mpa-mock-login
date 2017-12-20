const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    this.fs.copy(
      this.templatePath('login.js'),
      this.destinationPath('mock/login.js')
    )
    this.fs.copy(
      this.templatePath('_user.api.js'),
      this.destinationPath('src/js/api/_user.api.js')
    )
  }
}