import { test, expect } from '@playwright/test';

test('Contracts Table Data link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the Contracts Table Data link.
  await page.getByRole('link', { name: 'Contracts Table Data' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/contract/);
});

test('Services Table Data link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the Contracts Table Data link.
  await page.getByRole('link', { name: 'Services Table Data' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/service/);
});

test('Mapping Table Data link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the Contracts Table Data link.
  await page.getByRole('link', { name: 'Mapping Table Data' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/mapping/);
});
