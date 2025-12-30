import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.locator("h1")).toContainText("Easy Biz");
    await expect(page.getByRole("link", { name: /ขอใบเสนอราคา/i })).toBeVisible();
  });

  test("should navigate to services page", async ({ page }) => {
    await page.goto("/");
    
    await page.getByRole("link", { name: "บริการ" }).click();
    await expect(page).toHaveURL("/services");
    await expect(page.locator("h1")).toContainText("บริการของเรา");
  });

  test("should navigate to pricing page", async ({ page }) => {
    await page.goto("/");
    
    await page.getByRole("link", { name: "ราคา" }).click();
    await expect(page).toHaveURL("/pricing");
  });
});

test.describe("Contact Form", () => {
  test("should display contact form", async ({ page }) => {
    await page.goto("/contact");
    
    await expect(page.locator("h1")).toContainText("ติดต่อ");
    await expect(page.getByLabel(/ชื่อ/)).toBeVisible();
    await expect(page.getByLabel(/อีเมล/)).toBeVisible();
    await expect(page.getByLabel(/โทรศัพท์/)).toBeVisible();
  });

  test("should validate required fields", async ({ page }) => {
    await page.goto("/contact");
    
    await page.getByRole("button", { name: /ส่งข้อมูล/ }).click();
    
    // Form should not submit without required fields
    await expect(page).toHaveURL("/contact");
  });
});

test.describe("Responsive Design", () => {
  test("should show mobile menu on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    // Desktop nav should be hidden
    await expect(page.getByRole("link", { name: "บริการ" }).first()).toBeHidden();
    
    // Mobile menu button should be visible
    await expect(page.getByRole("button", { name: /menu/i })).toBeVisible();
  });
});
