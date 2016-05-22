package uk.co.grahamcox.webmud.verification.counter

import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import org.junit.Assert
import org.springframework.beans.factory.annotation.Autowired
import uk.co.grahamcox.webmud.verification.webdriver.WebDriverContext

/**
 * Cucumber steps for working with the counter
 */
class CounterSteps {
    /** Access to the web driver context */
    @Autowired
    private lateinit var webdriverContext: WebDriverContext

    /**
     * Check the current value of the counter
     */
    @Then("^the counter has a value of (.+)$")
    fun checkCounterValue(value: String) {
        Assert.assertEquals(value, webdriverContext.webappPage.counterPage.currentCount)
    }

    /**
     * Press the button to increment the counter
     */
    @When("^I increment the counter$")
    fun incrementCounter() {
        webdriverContext.webappPage.counterPage.increment()
    }

    /**
     * Press the button to decrement the counter
     */
    @When("^I decrement the counter$")
    fun decrementCounter() {
        webdriverContext.webappPage.counterPage.decrement()
    }
}