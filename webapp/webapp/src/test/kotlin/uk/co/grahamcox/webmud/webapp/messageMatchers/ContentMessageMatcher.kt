package uk.co.grahamcox.webmud.webapp.messageMatchers

import org.junit.Assert
import org.springframework.http.MediaType
import org.springframework.messaging.Message
import org.springframework.messaging.simp.stomp.StompHeaderAccessor

/**
 * Message Matcher to match on the details of the message content
 * Note that this does *not* match on the actual payload of the message, just the metadata
 */
class ContentMessageMatcher {
    /**
     * Check that the media type of the message is compatible with the one provided
     * @param mediaType The media type to check for
     * @return this, for chaining
     */
    fun contentTypeCompatibleWith(mediaType: MediaType): MessageMatchers {
        return object : MessageMatchers {
            override fun match(message: Message<*>) {
                val actual = StompHeaderAccessor.wrap(message).contentType
                Assert.assertNotNull("Content Type is not set", actual)
                Assert.assertTrue("Content type [${actual}] is not compatible with [${mediaType}]",
                        actual.isCompatibleWith(mediaType))
            }
        }
    }
}