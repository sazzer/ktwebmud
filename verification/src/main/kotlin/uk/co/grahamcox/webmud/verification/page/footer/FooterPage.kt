package uk.co.grahamcox.webmud.verification.page.footer

import org.openqa.selenium.By
import org.openqa.selenium.WebElement
import org.openqa.selenium.support.FindBy
import org.openqa.selenium.support.PageFactory
import org.openqa.selenium.support.pagefactory.DefaultElementLocatorFactory
import org.openqa.selenium.support.ui.FluentWait
import java.util.concurrent.TimeUnit

/**
 * Page Model for the footer of the page
 * @param container The container of the footer
 *
 */
class FooterPage(container: WebElement) {
    /** The element containing the social links */
    @FindBy(css = ".socialLinks")
    private lateinit var socialLinksElement: WebElement

    init {
        PageFactory.initElements(DefaultElementLocatorFactory(container), this)
    }

    /**
     * Get the Social Link for the given name
     * @param name The name of the social link to look up
     * @return the social link
     */
    fun getSocialLink(name: String) : SocialLink {
        val cssSelector = By.cssSelector(".social-link-${name}")

        FluentWait<WebElement>(socialLinksElement)
            .withTimeout(500, TimeUnit.MILLISECONDS)
            .pollingEvery(100, TimeUnit.MILLISECONDS)
            .until { container -> container!!.findElements(cssSelector).isNotEmpty() }

        val socialLinkElement = socialLinksElement.findElement(cssSelector)
        return SocialLink(socialLinkElement)
    }
}