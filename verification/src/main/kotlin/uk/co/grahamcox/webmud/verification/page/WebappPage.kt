package uk.co.grahamcox.webmud.verification.page

import org.openqa.selenium.WebElement
import org.openqa.selenium.support.FindBy
import org.openqa.selenium.support.PageFactory
import org.openqa.selenium.support.pagefactory.DefaultElementLocatorFactory
import uk.co.grahamcox.webmud.verification.page.footer.FooterPage

/**
 * The central page model representing the webapp as a whole
 * @property bodyElement the web element representing the body of the page
 */
class WebappPage(bodyElement: WebElement) {
    /** The element containing the page footer */
    @FindBy(css = ".footer")
    private lateinit var footerElement: WebElement

    /** The page model for the page footer */
    val footerPage: FooterPage
        get() = FooterPage(footerElement)

    init {
        PageFactory.initElements(DefaultElementLocatorFactory(bodyElement), this)
    }
}