import Memory from './memory/web';
import Web from './page_object/web';
import Hybrid from './page_object/hybrid';

export const web = {
    paths: ['features/web/**/*.feature'],
    require: [
        'node_modules/@qavajs/playwright/index.js',
        'step_definition/*.ts',
        'step_definition/web/*.ts',

    ],
    memory: new Memory(),
    pageObject: Web,
}

export const electron = {
    paths: ['features/electron/**/*.feature'],
    require: [
        'node_modules/@qavajs/playwright/index.js',
        'step_definition/*.ts',
        'step_definition/electron/*.ts'
    ],
    memory: new Memory(),
    pageObject: Hybrid,
}