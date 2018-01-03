export default {
    'Check todo' : (client) => {
        const checkPage = client.page.checkPage();
        const instancesPage = client.page.instancesPage();

        checkPage
            .navigate()
            .check();

        instancesPage.expect.element('@instancesListDescription').to.be.visible;

        client.end();
    }
};