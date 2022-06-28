const path = require("path");
class AliasPlugin {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
  apply(resolver) {
    const target = resolver.ensureHook(this.target);
    resolver
      .getHook(this.source)
      .tapAsync("@AliasPlugin", (request, resolveContext, callback) => {
        if (request.request.indexOf("@/") > -1) {
          const lastIndex = request.path.lastIndexOf("/src");
          const obj = Object.assign({}, request, {
            request: `${request.path.substring(
              0,
              lastIndex
            )}/src/${request.request.substring(
              request.request.indexOf("@/") + 1
            )}`,
            descriptionFileData: {
              ...request.descriptionFileData,
              resolved: true,
            },
          });

          return resolver.doResolve(
            target,
            obj,
            "",
            resolveContext,
            (err, result) => {
              if (err) return callback(err);
              // Don't allow other aliasing or raw request
              if (result === undefined) return callback(null, null);
              callback(null, result);
            }
          );
        }

        // if (request.request.indexOf('@/')> -1)) {

        //   request.path

        // return	resolver.doResolve(target, request, null, resolveContext, callback);

        callback();
      });
  }
}

module.exports = AliasPlugin;
