const createCommands = {
    update(todoText) {
        return this
            .waitForElementVisible('@todoInput')
            .waitForElementVisible('@createTodo')
            .waitForElementVisible('@liItem')
            .waitForElementVisible('@spanUpdate')
            .click('@spanUpdate')
            .waitForElementVisible('@mainDiv')
            .waitForElementVisible('@updateInput')
            .waitForElementVisible('@createTodo')
            .setValue('@updateInput', todoText)
            .click('@updateTodo')
    }
};

export default {
    url: 'http://localhost:8090/',
    commands: [createCommands],
    elements: {
        spanUpdate: {
            selector: '.icon-update'
        },
        liItem: {
            selector: 'li'
        },
        mainDiv: {
          selector: '.modal-content'
        },
        todoInput: {
            selector: 'input[type=text]'
        },
        updateInput: {
            selector: '.text-update'
        },
        createTodo: {
            selector: 'button[type=submit]'
        },
        updateTodo: {
            selector: '.btn.btn-success'
        }
    }
};
