package com.market.jumarket.controller

import com.market.jumarket.model.Category
import com.market.jumarket.repository.CategoryRepository
import org.assertj.core.api.BDDAssumptions.given
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.test.web.servlet.MockMvc

@WebMvcTest(CategoryController::class)
class CategoryControllerTest(@Autowired private val mockMvc: MockMvc) {

    @MockBean
    private lateinit var categoryRepository: CategoryRepository

    @Autowired
    private lateinit var categoryController: CategoryController

    @Test
    fun `Testa getAllcategories (findAll)`() {
        val categories = listOf(Category(1, "Categoria 1"), Category(2, "Categoria 2"))
        `when`(categoryRepository.findAll()).thenReturn(categories)
        assertEquals(categories, categoryController.getAllcategories())
    }
}