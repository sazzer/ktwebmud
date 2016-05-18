package uk.co.grahamcox.webmud.webapp

import org.springframework.beans.factory.config.AbstractFactoryBean
import java.time.Clock
import java.time.ZonedDateTime

/**
 * Factory bean to create a clock with a fixed time
 * @property time the time to use
 */
class FixedClockFactoryBean(private val time: String) : AbstractFactoryBean<Clock>() {
    /** The parsed zoned date time */
    private val zonedDateTime = ZonedDateTime.parse(time)

    /**
     * Create the clock
     * @return the clock
     */
    override fun createInstance() = Clock.fixed(zonedDateTime.toInstant(), zonedDateTime.zone)

    /**
     * The type of object we're going to create
     * @return the class repressenting the clock
     */
    override fun getObjectType() = Clock::class.java
}