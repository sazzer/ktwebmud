package uk.co.grahamcox.ktwebmud.webapp.swagger.annotations

/**
 * Annotation providing the tags to apply to a handler
 */
@Target(AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.CLASS)
@Retention(AnnotationRetention.RUNTIME)
annotation class SwaggerTags(val value: Array<String>)
