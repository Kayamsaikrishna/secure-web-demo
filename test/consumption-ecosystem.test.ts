import { test, expect } from '@playwright/test';

test.describe('Consumption-Driven Ecosystem', () => {
  test('should allow users to browse marketplace offers', async ({ page }) => {
    // Navigate to marketplace
    await page.goto('/loans/marketplace');
    
    // Check that the page loads correctly
    await expect(page).toHaveTitle(/Consumption Marketplace/);
    
    // Check that offers are displayed
    const offerCards = page.locator('.bg-white.rounded-lg.shadow-md');
    await expect(offerCards).toHaveCount(2); // We have 2 test offers
    
    // Check offer details
    const firstOffer = offerCards.first();
    await expect(firstOffer).toContainText('Test University');
    await expect(firstOffer).toContainText('10.5% Interest Rate');
  });

  test('should allow users to apply for consumption loans', async ({ page }) => {
    // Navigate to marketplace
    await page.goto('/loans/marketplace');
    
    // Click on the first offer's apply button
    const applyButton = page.locator('button').getByText('Apply Now').first();
    await applyButton.click();
    
    // Should redirect to login if not authenticated
    await expect(page).toHaveURL(/login/);
  });

  test('should allow admins to manage partners', async ({ page }) => {
    // Login as admin
    await page.goto('/login');
    await page.fill('input[type="email"]', 'admin@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // Navigate to partners management
    await page.goto('/admin/partners');
    
    // Check that the page loads correctly
    await expect(page).toHaveTitle(/Partners Management/);
    
    // Check that partners are displayed
    const partnerRows = page.locator('tbody tr');
    await expect(partnerRows).toHaveCount(2); // We have 2 test partners
  });

  test('should allow admins to create new partners', async ({ page }) => {
    // Login as admin
    await page.goto('/login');
    await page.fill('input[type="email"]', 'admin@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // Navigate to partners management
    await page.goto('/admin/partners');
    
    // Click add new partner button
    const addButton = page.getByText('Add New Partner');
    await addButton.click();
    
    // Fill in partner details
    await page.fill('input[placeholder="Partner Name"]', 'Test Hospital');
    await page.selectOption('select', { label: 'Hospital' });
    await page.fill('input[placeholder="Contact Person"]', 'Dr. Smith');
    await page.fill('input[type="email"]', 'contact@testhospital.com');
    await page.fill('input[type="tel"]', '+919876543210');
    
    // Submit form
    const submitButton = page.getByText('Create Partner');
    await submitButton.click();
    
    // Check that partner was added
    await expect(page.locator('tbody tr')).toHaveCount(3);
  });
});