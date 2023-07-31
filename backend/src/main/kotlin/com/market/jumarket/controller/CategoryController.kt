package com.market.jumarket.controller

import com.market.jumarket.model.Category
import com.market.jumarket.repository.CategoryRepository
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 3600)
//https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
@RestController
@RequestMapping("/api")
class CategoryController(private val categoryRepository: CategoryRepository) {

    @GetMapping("/category")
    fun getAllcategories(): List<Category> = categoryRepository.findAll()

    @PostMapping("/category")
    fun createNewCategory(@Valid @RequestBody category: Category): Category =
        categoryRepository.save(category)

    @GetMapping("/category/{id}")
    fun getCategoryById(@PathVariable(value = "id") categoryId: Long): ResponseEntity<Category> {
        return categoryRepository.findById(categoryId).map { category ->
            ResponseEntity.ok(category)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/category/{id}")
    fun updateCategoryById(@PathVariable(value = "id") categoryId: Long,
                          @Valid @RequestBody newCategory: Category): ResponseEntity<Category> {

        return categoryRepository.findById(categoryId).map { existingCategory ->
            val updatedCategory: Category = existingCategory
                .copy(name = newCategory.name)
            ResponseEntity.ok().body(categoryRepository.save(updatedCategory))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/category/{id}")
    fun deleteCategoryById(@PathVariable(value = "id") categoryId: Long): ResponseEntity<Void> {

        return categoryRepository.findById(categoryId).map { category  ->
            categoryRepository.delete(category)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }

}

//ref: https://www.callicoder.com/kotlin-spring-boot-mysql-jpa-hibernate-rest-api-tutorial/