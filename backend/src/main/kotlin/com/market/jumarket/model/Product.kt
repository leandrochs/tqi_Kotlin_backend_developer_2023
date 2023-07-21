package com.market.jumarket.model

import jakarta.annotation.Nullable
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.validation.constraints.NotBlank
import java.math.BigDecimal

@Entity
data class Product(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val product_id: Long = 0,

    @get: NotBlank
    val name: String = "",

    @get: NotBlank
    val unit_of_measure: String = "",

    @get: Nullable
    val unit_price: Double = 1.11,

    @get: Nullable
    val quantity: Long? = 0,

    @ManyToOne
    @JoinColumn(name = "category_id")
    val category: Category? = null
)
