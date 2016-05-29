package uk.co.grahamcox.webmud.webapp.messageMatchers

import org.junit.Assert
import org.springframework.messaging.Message
import org.springframework.test.util.JsonPathExpectationsHelper

/**
 * Message Matcher to match on the payload, treating it as JSON
 * @param path The path to match against
 */
class JsonPathMessageMatcher(path: String) {
    /** The JSON Path Helper to use */
    private val jsonPathHelper = JsonPathExpectationsHelper(path)

    /**
     * Match the value of the JSON Payload at this path matches the given value
     * @param value The value to look for
     * @return this, for chaining
     */
    fun value(value: Any) : MessageMatchers {
        return object : MessageMatchers {
            override fun match(message: Message<*>) {
                val payload = message.payload
                Assert.assertNotNull("Message had no payload", payload)
                val payloadAsString = when (payload) {
                    is String -> payload
                    is ByteArray -> String(payload)
                    else -> throw AssertionError("Message payload is of unsupported type: ${payload.javaClass}")
                }

                jsonPathHelper.assertValue(payloadAsString, value)
            }
        }
    }
}