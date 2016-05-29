package uk.co.grahamcox.webmud.webapp.social

import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import uk.co.grahamcox.webmud.webapp.SpringTestBase

/**
 * Integration tests for the External Authenticaiton controller
 */
class ExternalAuthenticationControllerIT : SpringTestBase() {
    /**
     * Test getting the external authentication providers
     */
    @Test
    fun getProviders() {
        perform(MockMvcRequestBuilders.get("/api/authentication/external"))
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("[0]").value("facebook"))
                .andExpect(MockMvcResultMatchers.jsonPath("[1]").value("twitter"))
                .andExpect(MockMvcResultMatchers.jsonPath("[2]").value("google"))
    }
}