export default {
  'Create todo' : (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    loginPage
      .navigate()
      .login('This is acceptance test');

    instancesPage.expect.element('@instancesListDescription').to.be.visible;

    client.end();
  }
};