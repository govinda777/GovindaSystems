import re
from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Navigate to the home page
        page.goto("http://localhost:3000")

        # The original error was a critical rendering failure.
        # A successful verification is simply the page loading without crashing.
        # We'll wait for the main content area to be visible.
        # Using a generous timeout to allow for the dev server to compile.
        main_element = page.locator("main").first
        expect(main_element).to_be_visible(timeout=30000)

        # Take a screenshot to visually confirm the page has rendered.
        page.screenshot(path="jules-scratch/verification/verification.png")

        print("Verification successful: Application homepage rendered correctly.")

    except Exception as e:
        print(f"An error occurred during verification: {e}")
        # Take a screenshot even on failure to help with debugging.
        page.screenshot(path="jules-scratch/verification/verification_error.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)