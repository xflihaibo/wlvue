const fs = require('fs');

module.exports = function (source) {
  // this.cacheable();
  const query = this.resourceQuery.substring(1);
  if (query) {
    return source
  }

  const bootDir = `${[`${process.cwd()}/src/pages/transit`,`${process.cwd()}/src/pages/journey`, `${process.cwd()}/src/pages/chargermap`].find(p => `${this.context}`.startsWith(p))}/boot`

  return `import { createApp } from 'vue'
    import App, { router } from '${this.resource}?source=true'
    const app = createApp(App);
    const start = async () => {
      ${fs.existsSync(bootDir) ? `
      const boots = require.context('${bootDir}', false, /.ts$/);
      boots.keys().forEach((key)=> {
        boots(key).default({app})
      })
      ` : ''}
    }
    start();
    app.use(router).mount('#app')
  `
  // this.callback(null, source)
};