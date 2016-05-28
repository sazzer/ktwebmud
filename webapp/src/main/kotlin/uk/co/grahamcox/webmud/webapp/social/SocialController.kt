package uk.co.grahamcox.webmud.webapp.social

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.net.URI

/**
 * Controller for getting the details of the social sites that are connected
 */
@RestController
@RequestMapping("/api/social")
class SocialController {
    /**
     * Get the details of the social sites that are connected
     * @return a map of social site name to the URL that links to that site
     */
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun getSocialDetails() : Map<String, URI> = mapOf(
            "facebook" to URI("http://www.facebook.com"),
            "twitter" to URI("http://www.twitter.com"),
            "google" to URI("http://plus.google.com")
    )
}