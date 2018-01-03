export default {
    elements: {
        instancesListDescription: {
            selector: '//li[text()=\'This is acceptance test\']',
            locateStrategy: 'xpath'
        },
        instancesUpdatedListDescription: {
            selector: '//li[text()=\'This is acceptance test with changes\']',
            locateStrategy: 'xpath'
        },
        instancesEmptyLi: {
          selector: '//li'
        }
    }
};
