package uk.co.grahamcox.webmud.verification.webdriver

import org.openqa.selenium.WebDriver
import org.slf4j.LoggerFactory

/**
 * Mechanism to create a webdriver
 * @property driverClasses The list of driver classes we can use
 * @property defaultName The default webdriver name to use
 */
class WebDriverFactory(private val driverClasses: Map<String, Class<WebDriver>>,
                       private val defaultName: String) {
    companion object {
        /** The logger to use */
        private val LOG = LoggerFactory.getLogger(WebDriverFactory::class.java)
    }

    /**
     * Create the requested web driver
     * @param name The name of the webdriver to create
     * @return the webdriver
     */
    fun createWebDriver(name: String) : WebDriver {
        LOG.debug("Requested to create webdriver ${name}")
        val cls = driverClasses.get(name) ?: throw IllegalArgumentException("Unsupported webdriver requested: ${name}")
        val webDriver = cls.newInstance()
        LOG.debug("Created webdriver: ${webDriver}")

        return webDriver
    }

    /**
     * Create a webdriver using the default name
     * @return the webdriver
     */
    fun createWebDriver() = createWebDriver(defaultName)
}