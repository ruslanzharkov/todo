export default {
  'Create todo' : (client) => {
    const mainPage = client.page.mainPage();
    const instancesPage = client.page.instancesPage();

    mainPage
      .navigate()
      .create('This is acceptance test');

    instancesPage.expect.element('@instancesListDescription').to.be.visible;

    client.end();
  }
};