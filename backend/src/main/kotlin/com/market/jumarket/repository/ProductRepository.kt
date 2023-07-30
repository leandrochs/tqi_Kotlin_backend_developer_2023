package com.market.jumarket.repository

import com.market.jumarket.model.Product
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository: JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM product WHERE category_id = ?1", nativeQuery = true)
    fun findAllProductsByCategoryId(categoryId: Long): List<Product>
}

