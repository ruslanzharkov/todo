export default {
    'Delete todo' : (client) => {
        const checkPage = client.page.deletePage();
        const instancesPage = client.page.instancesPage();

        checkPage
            .navigate()
            .delete();



        client.end();
    }
};