package uk.co.grahamcox.worldbuilder.webapp

import org.slf4j.LoggerFactory
import org.springframework.web.WebApplicationInitializer
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext
import org.springframework.web.context.support.XmlWebApplicationContext
import org.springframework.web.servlet.DispatcherServlet
import javax.servlet.ServletContext

/**
 * Application Initializer for the webapp
 */
open class AppInitializer : WebApplicationInitializer {
    /** The logger to use */
    private val LOG = LoggerFactory.getLogger(AppInitializer::class.java);

    /**
     * Handle all of the Startup functionality of the webapp
     * @param servletContext The Servlet Context to configure
     */
    override fun onStartup(servletContext : ServletContext) {
        LOG.info("Configuring the application")

        val coreContext = XmlWebApplicationContext()
        coreContext.setConfigLocation("classpath:/uk/co/grahamcox/webmud/spring/coreContext.xml")
        coreContext.refresh()

        val webappContext = XmlWebApplicationContext()
        webappContext.parent = coreContext
        webappContext.setConfigLocation("classpath:/uk/co/grahamcox/webmud/webapp/spring/webappContext.xml")

        val servlet = servletContext.addServlet("dispatcher", DispatcherServlet(webappContext))
        servlet.addMapping("/")
        servlet.setLoadOnStartup(1)
    }
}
