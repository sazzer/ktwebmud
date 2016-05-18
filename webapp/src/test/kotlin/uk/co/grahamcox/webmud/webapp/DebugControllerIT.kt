package uk.co.grahamcox.webmud.webapp

import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import java.time.Clock

/**
 * Integration tests for the Debug Controller
 */
class DebugControllerIT : SpringTestBase() {
    /** The clock to get the time from */
    @Autowired
    lateinit var clock: Clock

    /**
     * Test requesting the server time
     */
    @Test
    fun testGetServerTime() {
        val currentTime = clock.instant().toString()

        perform(get("/api/debug/now"))
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").value("${currentTime}"))
    }
}