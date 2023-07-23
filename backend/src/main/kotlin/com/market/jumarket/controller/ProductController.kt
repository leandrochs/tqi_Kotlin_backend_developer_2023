package com.market.jumarket.controller

import com.market.jumarket.model.Product
import com.market.jumarket.repository.ProductRepository
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class ProductController(private val productRepository: ProductRepository) {

    @GetMapping("/product")
    fun getAllproducts(): List<Product> = productRepository.findAll()

    @PostMapping("/product")
    fun createNewProduct(@Valid @RequestBody product: Product): Product = productRepository.save(product)

    @GetMapping("/product/{id}")
    fun getProductById(@PathVariable(value = "id") productId: Long): ResponseEntity<Product> {
        return productRepository.findById(productId).map { product ->
            ResponseEntity.ok(product)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/product/{id}")
    fun updateProductById(
        @PathVariable(value = "id") productId: Long,
        @Valid @RequestBody newProduct: Product
    ): ResponseEntity<Product> {

        return productRepository.findById(productId).map { existingProduct ->
            val updatedProduct: Product = existingProduct.copy(
                name = newProduct.name,
                unit_of_measure = newProduct.unit_of_measure,
                unit_price = newProduct.unit_price,
                quantity = newProduct.quantity,
                category = newProduct.category
            )
            ResponseEntity.ok().body(productRepository.save(updatedProduct))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/product/{id}")
    fun deleteProductById(@PathVariable(value = "id") productId: Long): ResponseEntity<Void> {

        return productRepository.findById(productId).map { product  ->
            productRepository.delete(product)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }

}

//ref: https://www.callicoder.com/kotlin-spring-boot-mysql-jpa-hibernate-rest-api-tutorial/