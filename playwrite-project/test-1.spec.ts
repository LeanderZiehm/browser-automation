import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('hello');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('jon');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('sdf');
  await page.getByRole('button', { name: 'Register' }).click();
});