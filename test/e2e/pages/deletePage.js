const checkCommands = {
    delete() {
        return this
            .waitForElementVisible('@todoInput')
            .waitForElementVisible('@createTodo')
            .waitForElementVisible('@liItem')
            .waitForElementVisible('@spanDelete')
            .click('@spanDelete')
    }
};

export default {
    url: 'http://localhost:8090/',
    commands: [checkCommands],
    elements: {
        spanDelete: {
            selector: '.icon-delete'
        },
        liItem: {
            selector: 'li'
        },
        todoInput: {
            selector: 'input[type=text]'
        },
        createTodo: {
            selector: 'button[type=submit]'
        }
    }
};
