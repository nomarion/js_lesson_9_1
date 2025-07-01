let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
    }
}

const handler = (object) => {
    let result = 0;
    const run = (object) => {
        if (Array.isArray(object)) {
            for (const item of object) {
                result += item.salary ?? 0;
            }
        } else {
            for (const key in object) {
                run(object[key]);
            }
        }
    }
    run(object);
    return result;
}

console.log(handler(company));

