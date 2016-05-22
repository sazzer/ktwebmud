package uk.co.grahamcox.webmud.verification.steps

import cucumber.api.java.en.Given
import org.springframework.beans.factory.annotation.Autowired
import uk.co.grahamcox.webmud.verification.webdriver.WebDriverContext

/**
 * Cucumber steps for working with the Selenium interface
 */
class SeleniumSteps {
    /** The WebDriver Context */
    @Autowired
    private lateinit var webDriverContext: WebDriverContext

    /**
     * Load the home page
     */
    @Given("^I load the home page$")
    fun loadHomePage() {
        webDriverContext.openPage("/")
    }
}