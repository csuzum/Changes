module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_base.normalize.scss";
          @import "@/styles/_components.content.scss";
          @import "@/styles/_settings.responsive.scss";
          @import "@/styles/_settings.variables.scss";
          `
      }
    }
  }
};