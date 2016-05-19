package uk.co.grahamcox.webmud.webapp.messageMatchers

import org.springframework.messaging.Message

/**
 * Interface for Message Matchers to extend
 */
interface MessageMatchers {
    /**
     * Actually match the message provided
     * @param message The message to match
     */
    fun match(message: Message<*>)
}

/**
 * Collection of helper functions to create result matchers
 */
object MessageResultMatchers {
    /**
     * Create a Message Matcher to match on the content metadata
     * @return the matcher
     */
    fun content() = ContentMessageMatcher()
    /**
     * Create a Message Matcher to match on the JSON Payload
     * @param path The Json Path to match
     * @return the matcher
     */
    fun jsonPath(path: String) = JsonPathMessageMatcher(path)
}

/**
 * Extension function on the Message class to perform fluent assertions of the message object
 *
 */
fun <T> Message<T>.andExpect(matcher: MessageMatchers) : Message<T> {
    matcher.match(this)
    return this
}