package uk.co.grahamcox.webmud.webapp.social

import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import uk.co.grahamcox.webmud.webapp.SpringTestBase

/**
 * Integration tests for the Social Links controller
 */
class SocialControllerIT : SpringTestBase() {
    /**
     * Test getting the social links
     */
    @Test
    fun getSocialLinks() {
        perform(MockMvcRequestBuilders.get("/api/social"))
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value("facebook"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].link").value("http://www.facebook.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value("twitter"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].link").value("http://www.twitter.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[2].id").value("google"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[2].link").value("http://plus.google.com"))
    }
}