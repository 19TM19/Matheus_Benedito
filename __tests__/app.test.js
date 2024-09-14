/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { insert, clean, back, calcular } = require('../calc.js');
beforeEach(() => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, '../calc.html'), 'utf8');
});
describe('Calculadora', () => {
    test('Deve inserir um número no display', () => {
        const display = document.getElementById('RESULTADO');
        insert('9');
        expect(display.innerHTML).toBe('9');
    });
    test('Deve inserir uma sequência de números no display', () => {
        const display = document.getElementById('RESULTADO');
        insert('1');
        insert('2');
        insert('3');
        expect(display.innerHTML).toBe('123');
    });
    test('Deve inserir operadores corretamente', () => {
        const display = document.getElementById('RESULTADO');
        insert('7');
        insert('+');
        insert('3');
        expect(display.innerHTML).toBe('7+3');
    });
    test('Deve limpar o display ao pressionar "C"', () => {
        const display = document.getElementById('RESULTADO');
        insert('5');
        clean();
        expect(display.innerHTML).toBe('');
    });
    test('Deve apagar o último caractere ao pressionar "<-"', () => {
        const display = document.getElementById('RESULTADO');
        clean();
        insert('9');
        console.log('Display após inserir 9:', display.innerHTML);
        back();
        console.log('Display após pressionar "<-"', display.innerHTML);
        expect(display.innerHTML).toBe('');
    }); 
    test('Deve calcular a expressão corretamente', () => {
        const display = document.getElementById('RESULTADO');
        insert('4');
        insert('*');
        insert('5');
        calcular();
        expect(display.innerHTML).toBe('20');
    });
    test('Deve exibir "0" se o cálculo for inválido', () => {
        const display = document.getElementById('RESULTADO');
        calcular();
        expect(display.innerHTML).toBe('0');
    });
});
