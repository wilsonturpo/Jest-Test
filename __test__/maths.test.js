import {sumar, multiplicar, restar, dividir} from '../maths'

describe('Cálculos matemáticos', ()=>{
    test('Prueba de suma', ()=>{
        expect(sumar(1,1)).toBe(2)
    });

    test('Prueba de multiplicación',()=>{
        expect(multiplicar(2,2)).toBe(4)
    });

    test('Prueba de resta', ()=>{
        expect(restar(2,2)).toBe(0)
    });

    test('Prueba de división', ()=>{
        expect(dividir(10,5)).toBe(2)
    });
})

