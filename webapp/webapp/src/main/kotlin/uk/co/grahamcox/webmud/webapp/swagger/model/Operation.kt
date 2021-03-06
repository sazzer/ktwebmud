package uk.co.grahamcox.ktwebmud.webapp.swagger.model

import com.fasterxml.jackson.annotation.JsonInclude

/**
 * Details of a single operation. This maps onto a single controller method
 * @property tags The tags of the operation
 * @property summary The summary description of the operation
 * @property responses The descriptions of the responses
 * @property parameters The parameters of the operation
 * @property produces The mime-types that the operation produces
 * @property consumes The mime-types that the operation consumed
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
data class Operation(val tags: Array<String>? = null,
                     val summary: String = "",
                     val parameters: Array<Parameter> = arrayOf(),
                     val produces: Array<String> = arrayOf(),
                     val consumes: Array<String> = arrayOf(),
                     val responses: Map<String, Response> = mapOf())
