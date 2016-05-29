package uk.co.grahamcox.webmud.webapp

import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

/**
 * Test that page routing when loading the app works correctly
 */
class PageRoutingIT : SpringTestBase() {
    /**
     * Test loading the index page works correctly
     */
    @Test
    fun testIndexPage() {
        perform(MockMvcRequestBuilders.get("/"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andExpect(MockMvcResultMatchers.view().name("/static/index.html"))
    }

    /**
     * Test calling an API Path that isn't valid
     */
    @Test
    fun testBadApi() {
        perform(MockMvcRequestBuilders.get("/api/invalid"))
                .andExpect(MockMvcResultMatchers.status().isNotFound)
    }

    /**
     * Test calling an API Path that isn't valid, but where the prefix is valid
     */
    @Test
    fun testAlmostCorrectApi() {
        perform(MockMvcRequestBuilders.get("/api/debug/invalid"))
                .andExpect(MockMvcResultMatchers.status().isNotFound)
    }
}