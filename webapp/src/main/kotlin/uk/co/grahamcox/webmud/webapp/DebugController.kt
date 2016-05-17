package uk.co.grahamcox.webmud.webapp

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.Clock

@RestController
@RequestMapping("/api/debug")
class DebugController(private val clock: Clock) {
    /**
     * Get the current server time
     * @return the current server time
     */
    @RequestMapping("/now")
    fun now() = clock.instant()
}