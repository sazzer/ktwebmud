package uk.co.grahamcox.webmud.webapp

import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import uk.co.grahamcox.webmud.webapp.messageMatchers.MessageResultMatchers
import uk.co.grahamcox.webmud.webapp.messageMatchers.andExpect
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
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$").value(currentTime))
    }

    /**
     * Test using websockets to request the server time
     */
    @Test
    fun testGetServerTimeWs() {
        val currentTime = clock.instant().toString()

        webSocketClient.subscribe("/topic/api/debug/now", "0")
        webSocketClient.sendMessage("/api/debug/now", "0")

        webSocketClient.getNextMessage()
                .andExpect(MessageResultMatchers.content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MessageResultMatchers.jsonPath("$").value("Hello there"))

        webSocketClient.getNextMessage()
                .andExpect(MessageResultMatchers.content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MessageResultMatchers.jsonPath("$").value(currentTime))
    }
}