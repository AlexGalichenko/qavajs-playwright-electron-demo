import { setWorldConstructor } from '@cucumber/cucumber';
import { QavajsPlaywrightElectronWorld } from '@qavajs/playwright/QavajsPlaywrightElectronWorld';

setWorldConstructor(QavajsPlaywrightElectronWorld);