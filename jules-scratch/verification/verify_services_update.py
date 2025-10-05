from playwright.sync_api import sync_playwright, Page, expect

def verify_services_update(page: Page):
    """
    This script verifies that the "Soluções AI" section on the homepage
    has been updated correctly.
    """
    # 1. Navigate to the homepage.
    page.goto("http://localhost:3000", timeout=60000)

    # 2. Find the "Soluções AI" heading.
    heading = page.get_by_role("heading", name="Soluções AI")
    expect(heading).to_be_visible()

    # 3. Find the parent section of the heading to screenshot the whole component
    services_section = heading.locator('xpath=./ancestor::section')
    expect(services_section).to_be_visible()

    # 4. Take a screenshot of the services section.
    services_section.screenshot(path="jules-scratch/verification/verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            page = browser.new_page()
            verify_services_update(page)
        finally:
            browser.close()