package uk.co.grahamcox.webmud.webapp.websocket

import org.slf4j.LoggerFactory
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.TextMessage
import org.springframework.web.socket.WebSocketSession
import org.springframework.web.socket.handler.TextWebSocketHandler

/**
 * Web Socket Handler for the game
 */
class WebSocketHandler : TextWebSocketHandler() {
    companion object {
        /** The logger to use */
        private val LOG = LoggerFactory.getLogger(WebSocketHandler::class.java)
    }

    /**
     * Handle setting up any connection deatils for the connection
     * @param session The session
     *
     */
    override fun afterConnectionEstablished(session: WebSocketSession) {
        LOG.debug("Received new connection: {}", session)
    }

    /**
     * Handle receipt of a message
     * @param session The session that the message was received on
     * @param message The message
     */
    override fun handleTextMessage(session: WebSocketSession, message: TextMessage) {
        LOG.debug("Received message from connection {}: {}", session, message)
    }

    /**
     * Handle tidying up after a session is closed
     * @param session The session
     * @param status The reason the session was closed
     */
    override fun afterConnectionClosed(session: WebSocketSession, status: CloseStatus) {
        LOG.debug("Connection closed: {} / {}", session, status)
    }
}