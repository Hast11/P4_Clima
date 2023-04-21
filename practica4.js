const fs = require('fs')

exports.load = (file) => {
    let ficheroCiudades = JSON.parse(fs.readFileSync(file));
    return ficheroCiudades;
};

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

exports.max_temp_min = (cities) => {
    let temperaturaMinimaMaxima = cities[0].main.temp_min;
    cities.forEach(ciudad => {
        let temperaturaMinimaCiudad =  ciudad.main.temp_min;
        if (temperaturaMinimaCiudad > temperaturaMinimaMaxima){
            temperaturaMinimaMaxima=temperaturaMinimaCiudad;
        }
        
    });
    return temperaturaMinimaMaixma;
};

exports.min_temp_max = (cities) => {
    let tempMaxMin = cities[0].main.temp_max;
    cities.forEach(ciudad => {
        if(tempMaxMin>ciudad.main.temp_max){
            tempMaxMin=ciudad.main.temp_max;
        }
    })
    return tempMaxMin;
};

exports.average_temp = (cities) => {};

exports.warmer_average_temp = (cities) => {};

exports.max_north = (cities) => {};

exports.max_south = (cities) => {};

exports.gravity_center = (cities) => {};

exports.closest_GC = (cities) => {};
