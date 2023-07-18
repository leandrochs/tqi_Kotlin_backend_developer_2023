package com.market.jumarket.controller

import com.market.jumarket.model.Category
import com.market.jumarket.repository.CategoryRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class CategoryController(private val categoryRepository: CategoryRepository) {

    @GetMapping("/category")
    fun getAllcategories(): List<Category> = categoryRepository.findAll()



}