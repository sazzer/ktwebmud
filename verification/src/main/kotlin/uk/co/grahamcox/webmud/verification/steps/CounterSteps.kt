package uk.co.grahamcox.webmud.verification.steps

import cucumber.api.java.en.Then
import cucumber.api.java.en.When

/**
 * Cucumber steps for working with the counter
 */
class CounterSteps {
    /**
     * Check the current value of the counter
     */
    @Then("^the counter has a value of (.+)$")
    fun checkCounterValue(value: String) {

    }

    /**
     * Press the button to increment the counter
     */
    @When("^I increment the counter$")
    fun incrementCounter() {

    }

    /**
     * Press the button to decrement the counter
     */
    @When("^I decrement the counter$")
    fun decrementCounter() {

    }
}