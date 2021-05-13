describe('Comparadores comunes',()=>{
    const user ={
        name:"Wilson",
        lastName: "Turpo"
    }

    const user2 = {
        name:"Wilson",
        lastName:"Turpo"
    }

    test('Igualdad de elementos',()=>{
        expect(user).toEqual(user2)
    });

    test('Objetos no son iguales', ()=>{
        expect(user).not.toEqual(user2)
    });

    
})