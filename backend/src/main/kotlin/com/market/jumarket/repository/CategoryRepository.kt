package com.market.jumarket.repository

import com.market.jumarket.model.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository: JpaRepository<Category, Long>

/**
 * Isso é tudo que precisamos fazer aqui. Como estendemos CategoryRepository da JpaRepository interface, todos os
 * métodos CRUD na Category entidade estão prontamente disponíveis para nós. Spring boot conecta automaticamente
 * uma implementação padrão de JpaRepository chamada SimpleJpaRepository em tempo de execução.
 *
 * https://www.callicoder.com/kotlin-spring-boot-mysql-jpa-hibernate-rest-api-tutorial/
 * **/