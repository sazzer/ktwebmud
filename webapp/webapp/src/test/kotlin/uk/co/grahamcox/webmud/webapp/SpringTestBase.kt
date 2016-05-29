package uk.co.grahamcox.webmud.webapp

import org.junit.Before
import org.junit.ClassRule
import org.junit.Rule
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.support.AbstractSubscribableChannel
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.junit4.rules.SpringClassRule
import org.springframework.test.context.junit4.rules.SpringMethodRule
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext

/**
 * Base class from which Spring Integration Tests can inherit
 */
@WebAppConfiguration
@ActiveProfiles("test")
@ContextConfiguration("classpath:/uk/co/grahamcox/webmud/webapp/test-context.xml")
open class SpringTestBase {
    companion object {
        /** Class based rule for Spring Runner */
        @ClassRule
        @JvmField
        val SCR = SpringClassRule()
    }

    /** Method based rule for Spring Runner */
    @Rule
    @JvmField
    val springMethodRule = SpringMethodRule()

    /** The Web Application Context, used to access the webapp during tests */
    @Autowired
    private lateinit var webAppContext: WebApplicationContext

    /** The Mock MVC Wrapper */
    private lateinit var mockMvc: MockMvc

    /** The WebSocket Client to use */
    @Autowired
    lateinit var webSocketClient: WebSocketClient

    /**
     * Ensure that we have a Mock MVC Wrapper before the tests run
     */
    @Before
    fun setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webAppContext)
                .build()

        webSocketClient.reset()
    }


    /**
     * Actually perform the request provided
     * @param request The request to perform
     * @return the result of performing the request
     */
    fun perform(request: MockHttpServletRequestBuilder) = mockMvc.perform(request)
}