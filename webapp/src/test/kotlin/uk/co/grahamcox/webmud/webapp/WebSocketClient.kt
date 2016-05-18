package uk.co.grahamcox.webmud.webapp

import org.slf4j.LoggerFactory
import org.springframework.beans.factory.InitializingBean
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.Message
import org.springframework.messaging.MessageChannel
import org.springframework.messaging.simp.SimpMessageType
import org.springframework.messaging.simp.stomp.StompCommand
import org.springframework.messaging.simp.stomp.StompHeaderAccessor
import org.springframework.messaging.support.AbstractSubscribableChannel
import org.springframework.messaging.support.ChannelInterceptorAdapter
import org.springframework.messaging.support.MessageBuilder
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.TimeUnit

/**
 * Mechanism by which we can communicate with the WebSockets in our integration tests
 */
class WebSocketClient : InitializingBean {
    companion object {
        /** The logger to use */
        private val LOG = LoggerFactory.getLogger(WebSocketClient::class.java)
    }

    /** The Inbound Channel */
    @Autowired
    private lateinit var clientInboundChannel: AbstractSubscribableChannel

    /** The Outbound channel */
    @Autowired
    private lateinit var clientOutboundChannel: AbstractSubscribableChannel

    /** The Broker channel */
    @Autowired
    private lateinit var brokerChannel: AbstractSubscribableChannel

    /** The list of destinations to capture messages from */
    private val destinationsToCapture = mutableSetOf<String>()

    /** The messages that we've captured */
    private val capturedMessages = ArrayBlockingQueue<Message<*>>(100)

    /**
     * Configure the channels so that we can easily test with them
     */
    override fun afterPropertiesSet() {
        clientOutboundChannel.addInterceptor(object : ChannelInterceptorAdapter() {
            override fun preSend(message: Message<*>, channel: MessageChannel): Message<*> {
                val headers = StompHeaderAccessor.wrap(message)
                if (destinationsToCapture.isEmpty()
                        || (headers.destination != null && destinationsToCapture.contains(headers.destination))) {
                    LOG.debug("Received message {}", message)
                    capturedMessages.add(message)
                }
                return super.preSend(message, channel)
            }
        })
    }

    /**
     * Reset the client before the next test
     */
    fun reset() {
        destinationsToCapture.clear()
    }

    /**
     * Add a new destination to capture from. If we've not added any destinations for this test then all will be captured
     * @param destination The destinations to capture
     */
    fun addDestinationsToCapture(vararg destination: String) {
        destinationsToCapture.addAll(destination)
    }

    /**
     * Get the next captured message, waiting for it to turn up if needed
     * @param timeout The time to wait
     * @param unit The unit of time to wait
     * @return the next message
     */
    fun getNextMessage(timeout: Long = 1, unit: TimeUnit = TimeUnit.SECONDS) = capturedMessages.poll(timeout, unit)

    /**
     * Subscribe to a named topic or queue
     * @param destination The destination to subscribe to
     * @param sessionId The session ID to use
     */
    fun subscribe(destination: String, sessionId: String) {
        LOG.debug("Sending subscription to {} for session {}", destination, sessionId)

        val subscribeHeaders = StompHeaderAccessor.create(SimpMessageType.SUBSCRIBE)
        subscribeHeaders.subscriptionId = "0"
        subscribeHeaders.destination = destination
        subscribeHeaders.sessionId = sessionId
        subscribeHeaders.sessionAttributes = mapOf()

        clientInboundChannel.send(MessageBuilder.createMessage("".toByteArray(), subscribeHeaders.messageHeaders))
    }

    /**
     * Send a message to the server
     * @param destination The destination to send the message to
     * @param sessionId The session ID to send the message as
     * @param message the message to send
     */
    fun sendMessage(destination: String, sessionId: String, message: ByteArray = "".toByteArray()) {
        LOG.debug("Sending message to {} for session {}", destination, sessionId)

        val headers = StompHeaderAccessor.create(StompCommand.SEND)
        headers.destination = destination
        headers.sessionId = sessionId
        headers.sessionAttributes = mapOf()

        clientInboundChannel.send(MessageBuilder.createMessage(message, headers.messageHeaders))

    }
}