const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter:'mochawesome',
    reporterOptions: {// chave vai trazer as opções como diretorio, 
      reportDir: 'cypress/results',
      overwrite: false,// nao vai sobreescrever
      html: true,// pode gerar o arquivo em html
      json: false,// nao vai gerar o arquivo json
      timestamp: "mmddyyyy_HHMMss" }// formato da data
  },
});

