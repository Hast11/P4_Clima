const fs = require('fs')

// Lectura fichero de forma asíncrona
exports.load = (file) => {
    let ficheroCiudades = JSON.parse(fs.readFileSync(file));
    return ficheroCiudades;
};

// Temperatura máxima
exports.max_temp = (cities) => {
    let temperaturaMaxima = cities[0].main.temp;
    cities.forEach(ciudad => {
        let temperaturaMaximaCiudad =  ciudad.main.temp;
        if (temperaturaMaximaCiudad > temperaturaMaxima){
            temperaturaMaxima=temperaturaMaximaCiudad;
        }
        
    });
    return temperaturaMaxima;
};

// Temperatura mínimo
exports.min_temp = (cities) => {
    let temperaturaMinima = cities[0].main.temp;
    cities.forEach(ciudad => {
        let temperaturaMinimaCiudad =  ciudad.main.temp;
        if (temperaturaMinimaCiudad < temperaturaMinima){
            temperaturaMinima=temperaturaMinimaCiudad;
        }
        
    });
    return temperaturaMinima;
};

// Máxima temperatura mínima
exports.max_temp_min = (cities) => {};

// Mínima temperatura máxima
exports.min_temp_max = (cities) => {};

// Temperatura media
exports.average_temp = (cities) => {};

// Warmer average temp
exports.warmer_average_temp = (cities) => {};

// Ciudad más al norte
exports.max_north = (cities) => {};

// Ciudad más al sur
exports.max_south = (cities) => {};

// Cálculo centro de gravedad
exports.gravity_center = (cities) => {};

// Más cercano al centro de gravedad
exports.closest_GC = (cities) => {};
