const checkCommands = {
    check() {
        return this
            .waitForElementVisible('@todoInput')
            .waitForElementVisible('@createTodo')
            .waitForElementVisible('@liItem')
            .waitForElementVisible('@spanCheck')
            .click('@spanCheck')
    }
};

export default {
    url: 'http://localhost:8090/',
    commands: [checkCommands],
    elements: {
        spanCheck: {
            selector: '.icon-check'
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
