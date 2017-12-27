const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
}
// Identity  Monad



const Id = value => ({
    map: f => Id.of(f(value)),

    chain: f => f(value),

    toString: () => `Id(${value})`
})

Id.of = Id

const compose = (f, g) => x => f(g(x))

const x = 20;

const arr = [x]

// const g = n => n +1;
// const f = n => n * 2;


// trace('map compose')([
//     arr.map(g).map(f),
//     arr.map(compose(f, g))
// ])


// const composeMap = (...ms) => {
//     ms.reduce((f,g) => x => g(x).map(f))
// }

// const composePromises = (...ms) => {
//     return ms.reduce((f, g) => x => g(x).then(f))
// }

const composeM = method => (...ms) => (
    ms.reduce((f, g) => x => g(x)[method](f))
)


const composeMap = composeM('map')
const composePromises = composeM('then')
const composeFlatMap = composeM('flatMap')


const label = 'promise composition';

// const g = n => Promise.resolve(n + 1);

// const f = n => Promise.resolve(n * 2);

// const h = composePromises(f , g)

// h(20).then(trace(label))

const g = n => Id(n + 1);
const f = n => Id(n * 2);



// Three laws of Monad
/**
 * Left Identity: unit(x).chain(f) === f(x)
 * Right Identity: m.chain(unit) === m
 * Associativity m.chain(f).chain(g) ==== m.chain(x => f(x).chain(g))
**/

// A monad is a functor. A functor is a morphism between categories, A -> B




// Left Identity
// unit(x).chain(f) === f(x)

trace('id monad left identity')(
    [
        Id(x).chain(f),
        f(x)
    ]
)

// Right Identity
// m.chain(unit) === m

trace('Id monad right identity')(
    [
        Id(x).chain(Id.of),
        Id(x)
    ]
)

// Associativity

trace('Id monad associativity')([
    Id(x).chain(g).chain(f),
    Id(x).chain(x => g(x).chain(f))
]);

