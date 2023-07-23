package com.market.jumarket.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.market.jumarket.model.Category
import com.market.jumarket.repository.CategoryRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito.`when`
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import java.util.*


@ExtendWith(SpringExtension::class)
@WebMvcTest(CategoryController::class)
@AutoConfigureMockMvc
class CategoryControllerTest {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Autowired
    private lateinit var objectMapper: ObjectMapper

    @MockBean
    private lateinit var categoryRepository: CategoryRepository

    private lateinit var categoryList: MutableList<Category>

    @BeforeEach
    fun setup() {
        categoryList = mutableListOf(
            Category(1L, "Category 1"),
            Category(2L, "Category 2"),
            Category(3L, "Category 3")
        )
    }

    @Test
    fun testGetAllCategories() {
        `when`(categoryRepository.findAll()).thenReturn(categoryList)

        mockMvc.perform(get("/api/category"))
            .andExpect(status().isOk)
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$[0].name").value("Category 1"))
            .andExpect(jsonPath("$[1].name").value("Category 2"))
            .andExpect(jsonPath("$[2].name").value("Category 3"))
    }

    @Test
    fun testGetCategoryById() {
        val categoryId = 1L
        val category = categoryList[0]

        `when`(categoryRepository.findById(categoryId)).thenReturn(Optional.of(category))

        mockMvc.perform(get("/api/category/$categoryId"))
            .andExpect(status().isOk)
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.name").value("Category 1"))
    }

    @Test
    fun testGetCategoryById_NotFound() {
        val categoryId = 100L

        `when`(categoryRepository.findById(categoryId)).thenReturn(Optional.empty())

        mockMvc.perform(get("/api/category/$categoryId"))
            .andExpect(status().isNotFound)
    }

    @Test
    fun testPostCategory() {
        val categoryId = 1L
        val categoryName = "Churrasco"
        val category = Category(name = categoryName)
        val res = Category(categoryId, name = categoryName)

        `when`(categoryRepository.save(category)).thenReturn(res)

        mockMvc.perform(
            post("/api/category")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(category))
        )
            .andExpect(status().isOk)
            .andExpect(jsonPath("$.name").value(categoryName))
            .andExpect(jsonPath("$.category_id").value(categoryId))
    }

    @Test
    fun testPutCategory() {
        val categoryId = 1L
        val categoryName = "Churrasco"
        val category = Category(categoryId, name = categoryName)

        `when`(categoryRepository.findById(categoryId)).thenReturn(Optional.of(category))
        `when`(categoryRepository.save(category)).thenReturn(category)

        mockMvc.perform(
            put("/api/category/{id}", categoryId)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(category))
        )
            .andExpect(status().isOk)
            .andExpect(jsonPath("$.name").value(categoryName))
            .andExpect(jsonPath("$.category_id").value(categoryId))
    }

    @Test
    fun testDeleteCategory() {
        val categoryId = 1L
        val category = Category(categoryId, name = "Churrasco")

        `when`(categoryRepository.findById(categoryId)).thenReturn(Optional.of(category))

        mockMvc.perform(
            delete("/api/category/{id}", categoryId)
                .contentType(MediaType.APPLICATION_JSON)
        )
            .andExpect(status().isOk)
    }

    @Test
    fun testDeleteCategory_NotFound() {
        val categoryId = 1L

        `when`(categoryRepository.findById(categoryId)).thenReturn(Optional.empty())

        mockMvc.perform(
            delete("/api/category/{id}", categoryId)
                .contentType(MediaType.APPLICATION_JSON)
        )
            .andExpect(status().isNotFound)
    }

}
