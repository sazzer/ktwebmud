package uk.co.grahamcox.webmud.verification.page.footer

import org.openqa.selenium.WebElement

/**
 * Representation of a single Social Link from the page footer
 */
class SocialLink(private val element: WebElement) {
    /** Get the label of the link */
    val label: String = element.text

    /** Get the URL of the link */
    val url: String = element.getAttribute("href")
}