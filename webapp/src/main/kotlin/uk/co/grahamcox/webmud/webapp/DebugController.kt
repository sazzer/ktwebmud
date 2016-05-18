package uk.co.grahamcox.webmud.webapp

import org.slf4j.LoggerFactory
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.Clock
import java.time.Instant

/**
 * Controller to get some debug information out of the server
 */
@RestController
@RequestMapping("/api/debug")
@MessageMapping("/api/debug")
class DebugController(private val clock: Clock) {
    companion object {
        /** The logger to use */
        private val LOG = LoggerFactory.getLogger(DebugController::class.java)
    }

    /**
     * Get the current server time
     * @return the current server time
     */
    @RequestMapping("/now")
    @MessageMapping("/now")
    fun now(): Instant {
        LOG.debug("Client requested current server time")
        return clock.instant()
    }
}