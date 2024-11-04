import { locator } from '@qavajs/playwright/po';

export default class Hybrid {
    OpenNewWindowElectronButton = locator('#electronButton');
    CloseCurrentWindowElectronButton = locator('#closeCurrentWindow');
}