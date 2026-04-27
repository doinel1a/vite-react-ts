import { test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto('/');
  await page.pause();
});
