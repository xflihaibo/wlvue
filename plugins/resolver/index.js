

const AliasPlugin = require('./alias')
class ResolverPlugin {
  apply(compiler) {
    const plugins = compiler.options.resolve.plugins || []
    plugins.push(new AliasPlugin('described-resolve', 'resolve'));
    Object.assign(compiler.options.resolve, { plugins })
  }
}
module.exports = ResolverPlugin