package uk.co.grahamcox.webmud.verification.page

import org.openqa.selenium.WebElement
import org.openqa.selenium.support.FindBy
import org.openqa.selenium.support.PageFactory
import org.openqa.selenium.support.pagefactory.DefaultElementLocatorFactory

/**
 * The central page model representing the webapp as a whole
 * @property bodyElement the web element representing the body of the page
 */
class WebappPage(bodyElement: WebElement) {
    /** The element containing the counter */
    @FindBy(css = ".counter")
    private lateinit var counterElement: WebElement

    /** The Page Model for the Counter */
    val counterPage: CounterPage
        get() = CounterPage(counterElement)

    init {
        PageFactory.initElements(DefaultElementLocatorFactory(bodyElement), this)
    }
}