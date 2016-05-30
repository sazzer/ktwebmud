package uk.co.grahamcox.webmud.webapp.social

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import uk.co.grahamcox.ktwebmud.webapp.schemas.SocialLinkModel
import java.net.URI

/**
 * Controller for getting the details of the social sites that are connected
 */
@RestController
@RequestMapping("/api/social")
class SocialController {
    /**
     * Get the details of the social sites that are connected
     * @return a collection of social site name and the URL that links to that site
     */
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun getSocialDetails() : List<SocialLinkModel> = listOf(
            SocialLinkModel().withId("facebook").withLink("http://www.facebook.com"),
            SocialLinkModel().withId("twitter").withLink("http://www.twitter.com"),
            SocialLinkModel().withId("google").withLink("http://plus.google.com")
    )
}