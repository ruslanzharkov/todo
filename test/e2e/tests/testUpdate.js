export default {
    'Update todo' : (client) => {
        const update = client.page.updatePagePart();
        const instancesPage = client.page.instancesPage();

        update
            .navigate()
            .update(' with changes');

        instancesPage.expect.element('@instancesUpdatedListDescription').to.be.visible;

        client.end();
    }
};