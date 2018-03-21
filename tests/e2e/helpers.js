module.exports = {
  selectMusician: (browser, process, musician) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#select-musician', 5000)
      .click(`#select-${musician.code}`)
      .click('#next-page');
  },
};