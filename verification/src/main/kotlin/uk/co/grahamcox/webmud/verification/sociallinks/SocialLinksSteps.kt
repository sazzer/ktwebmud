package uk.co.grahamcox.webmud.verification.sociallinks

import cucumber.api.DataTable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import org.junit.Assert
import org.springframework.beans.factory.annotation.Autowired
import uk.co.grahamcox.webmud.verification.DataTableParser
import uk.co.grahamcox.webmud.verification.webdriver.WebDriverContext

/**
 * Cucumber Steps for working with the Social Links in the footer
 */
class SocialLinksSteps {
    companion object {
        /** Mapping of the Gherkin names for social links to the code names */
        private val LINK_NAMES = mapOf(
                "Facebook" to "facebook",
                "Twitter" to "twitter",
                "Google+" to "google"
        )
    }
    /** Access to the web driver context */
    @Autowired
    private lateinit var webdriverContext: WebDriverContext

    /**
     * Seed the social links that should be configured
     */
    @Given("^the configured social links are:$")
    fun seedSocialLinks(links: DataTable) {
        // Nothing here yet
    }

    /**
     * Check the existance of a set of social links
     * @param links The links to look for
     */
    @Then("^the following social links are present:$")
    fun checkSocialLinksPresent(links: List<String>) {
        val footerPage = webdriverContext.webappPage.footerPage
        links.map { link -> LINK_NAMES.get(link) ?: throw IllegalArgumentException("Unknown link name: ${link}") }
                .forEach { footerPage.getSocialLink(it) }
    }

    /**
     * Check the details of the given social link are correct
     * @param link The name of the link to check
     * @param details The details to compare
     */
    @Then("^the social link \"(.+)\" has details:$")
    fun checkSocialLinkDetails(link: String, details: DataTable) {
        val parsedDetails = DataTableParser.parseSingleTall(details)
        val footerPage = webdriverContext.webappPage.footerPage
        val linkId = LINK_NAMES.get(link) ?: throw IllegalArgumentException("Unknown link name: ${link}")
        val link = footerPage.getSocialLink(linkId)

        parsedDetails.forEach {
            val actualValue = when (it.key) {
                "Label" -> link.label
                "URL" -> link.url
                else -> throw IllegalArgumentException("Unsupported property: ${it.key}")
            }

            Assert.assertEquals(it.value, actualValue)
        }
    }
}