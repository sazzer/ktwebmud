package uk.co.grahamcox.webmud.webapp

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

/**
 * Controller to work with external authentication providers
 */
@RestController
@RequestMapping("/api/authentication/external")
class ExternalAuthenticationController {
    /**
     * Get the list of all active providers
     * @return the list of providers
     */
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun getAllProviders() : List<String> = listOf(
            "facebook",
            "twitter",
            "google"
    )
}