package uk.co.grahamcox.webmud.verification.webdriver

import org.openqa.selenium.WebDriver
import org.slf4j.LoggerFactory

/**
 * Context used to manage the webdriver for the tests
 * @property webDriverFactory The web driver factory to use
 * @property urlBase The URL Base to use
 */
class WebDriverContext(private val webDriverFactory: WebDriverFactory,
                       private val urlBase: String) {
    companion object {
        /** The logger to use */
        private val LOG = LoggerFactory.getLogger(WebDriverContext::class.java)
    }
    /** The webdriver we are using */
    private var webdriver: WebDriver? = null

    /**
     * Open the WebDriver onto the given URL, creating it if needed
     */
    fun openPage(url: String) : WebDriver {
        if (webdriver == null) {
            webdriver = webDriverFactory.createWebDriver()
        }

        val wd = webdriver!!
        LOG.debug("Loading page: ${urlBase + url}")
        wd.get(urlBase + url)
        return wd
    }

    /**
     * Close the webdriver afterwards
     */
    fun close() {
        webdriver?.apply {
            LOG.debug("Closing WebDriver")
            close()
        }
    }
}