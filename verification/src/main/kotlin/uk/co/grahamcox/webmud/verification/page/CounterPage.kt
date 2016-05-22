package uk.co.grahamcox.webmud.verification.page

import org.openqa.selenium.WebElement
import org.openqa.selenium.support.FindBy
import org.openqa.selenium.support.PageFactory
import org.openqa.selenium.support.pagefactory.DefaultElementLocatorFactory

/**
 * Page Model representing the counter
 */
class CounterPage(counterElement: WebElement) {

    /** The current count */
    @FindBy(css = ".count")
    private lateinit var countElement: WebElement

    /** The increment button */
    @FindBy(css = ".increment")
    private lateinit var incrementElement: WebElement

    /** The decrement button */
    @FindBy(css = ".decrement")
    private lateinit var decrementElement: WebElement

    init {
        PageFactory.initElements(DefaultElementLocatorFactory(counterElement), this)
    }

    /** The current count */
    val currentCount: String
        get() = countElement.text

    /**
     * Press the Increment button
     */
    fun increment() {
        incrementElement.click()
    }

    /**
     * Press the Decremnt button
     */
    fun decrement() {
        decrementElement.click()
    }
}