from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        page.goto("http://localhost:3000")

        # Wait for the page to load and hero section to be visible
        expect(page.get_by_role("heading", name="Govinda Systems DAO")).to_be_visible()

        # Take a screenshot of the entire page
        page.screenshot(path="/app/verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run_verification()