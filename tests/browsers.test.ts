import { expect, test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('/');
});
