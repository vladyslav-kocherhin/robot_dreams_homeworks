import { Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';

export class CustomWorld extends World {
    public page!: Page;
}

setWorldConstructor(CustomWorld);
