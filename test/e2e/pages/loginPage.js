const loginCommands = {
  login(todoText) {
    return this
      .waitForElementVisible('@todoInput')
      .setValue('@todoInput', todoText)
      .waitForElementVisible('@createTodo')
      .click('@createTodo')
  }
};

export default {
  url: 'http://localhost:8090/',
  commands: [loginCommands],
  elements: {
    todoInput: {
      selector: 'input[type=text]'
    },
    createTodo: {
      selector: 'button[type=submit]'
    }
  }
};
