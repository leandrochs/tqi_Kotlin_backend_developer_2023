package com.market.jumarket.model

import jakarta.annotation.Nullable
import jakarta.persistence.*
import jakarta.validation.constraints.NotBlank
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import java.math.BigDecimal

class ProductTest {
    @Test
    fun `Cria instância de Product`() {
        val product = Product(
            product_id = 1,
            name = "Produto Teste",
            unit_of_measure = "Kg",
            unit_price = 12.34,
            quantity = 10,
            category = null
        )
        assertNotNull(product)
        assertEquals(1, product.product_id)
        assertEquals("Produto Teste", product.name)
        assertEquals("Kg", product.unit_of_measure)
        assertEquals(12.34, product.unit_price)
        assertEquals(10, product.quantity)
        assertEquals(null, product.category)
    }
}
