package com.market.jumarket.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.validation.constraints.NotBlank

@Entity
data class Category(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val category_id: Long = 0,

    @get: NotBlank
    val name: String = ""
)

/**
 * A classe Entity é tão pequena e concisa, certo? Isso porque uma classe Kotlin não precisa de getters e setters como Java.
 * Além disso, usou-se uma classe de dados aqui. Uma classe de dados gera automaticamente
 * métodos equals(), hashcode(), toString() e copy() .
 *
 * Atribuiu-se um valor padrão para todos os campos da classe Article. Isso é necessário porque o Hibernate requer
 * que uma entidade tenha um construtor sem argumentos.
 *
 * Atribuir valores padrão a todos os campos de membro permitirá que o hibernate instancie um Article sem passar nenhum argumento.
 * Funciona porque o Kotlin oferece suporte a argumentos padrão :).
 *
 * https://www.callicoder.com/kotlin-spring-boot-mysql-jpa-hibernate-rest-api-tutorial/
 * **/