package com.market.jumarket.model

import jakarta.validation.ConstraintViolationException
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

class CategoryTest {
    @Test
    fun `Cria instância de Category`() {
        val category = Category(category_id = 1, name = "Categoria Teste")
        assertNotNull(category)
        assertEquals(1, category.category_id)
        assertEquals("Categoria Teste", category.name)
    }

}