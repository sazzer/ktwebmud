package uk.co.grahamcox.webmud.webapp

import org.junit.Assert
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
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

    /**
     * Test using websockets to request the server time
     */
    @Test
    fun testGetServerTimeWs() {
        webSocketClient.subscribe("/topic/api/debug/now", "0")
        webSocketClient.sendMessage("/api/debug/now", "0")

        Assert.assertNotNull(webSocketClient.getNextMessage())
        Assert.assertNotNull(webSocketClient.getNextMessage())
        Assert.assertNull(webSocketClient.getNextMessage())
    }
}