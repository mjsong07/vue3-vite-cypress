// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
  
  it('should log in a user success', () => {
    cy.visit('/')
    cy.get('.login').click()  
    cy.get('#username').type('testuser')
    cy.get('#password').type('password123')
    cy.get('button[type="submit"]').click()
    cy.get('.msg').contains('p', '登录成功') 
  })

  it('should log in a user fail', () => {
    cy.visit('/')
    cy.get('.login').click()  
    cy.get('#username').type('1111')
    cy.get('#password').type('2222')
    cy.get('button[type="submit"]').click() 
    cy.get('.msg').contains('p', '登录失败') 
  })


  it('should log in a user empty', () => {
    cy.visit('/')
    cy.get('.login').click()   
    cy.get('button[type="submit"]').click() 
    cy.get('.msg').contains('p', '请输入') 
  })
})



