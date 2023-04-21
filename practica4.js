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
//    let temperaturaMinimaMaxima = cities[0].main.temp_min;
//    cities.forEach(ciudad => {
//        let temperaturaMinimaCiudad =  ciudad.main.temp_min;
//        if (temperaturaMinimaCiudad > temperaturaMinimaMaxima){
//            temperaturaMinimaMaxima=temperaturaMinimaCiudad;
//        }
//        
//    });
//    return temperaturaMinimaMaixma;
    let tempMinMasAlta = cities[0].main.temp_min;
    cities.forEach((ciudad)=>{
        let tempMin = ciudad.main.temp_min;
        if (tempMinMasAlta<tempMin){
            tempMinMasAlta=tempMin
        }
    })
    return tempMinMasAlta;
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

exports.average_temp = (cities) => {
    let acumuladoTemp = 0;
    for (let i=0;i<cities.length;i++){
        acumuladoTemp += cities[i].main.temp;
    }
    return (acumuladoTemp/cities.length);
    
};

exports.warmer_average_temp = (cities) => {
    let acumuladoTemp = 0;
    for (let i=0;i<cities.length;i++){
        acumuladoTemp += cities[i].main.temp;
    }
    let mediaTemp = acumuladoTemp/cities.length;

    let ciudadesMasTempQueMedia = cities.filter((ciudad)=>{
        let temperatura = ciudad.main.temp;
        return temperatura > mediaTemp;
    })
    let arrayFinal = ciudadesMasTempQueMedia.map((ciudad)=>{
        return[ciudad.name]
    });

    return arrayFinal;
};

exports.max_north = (cities) => {
    let maximoNorte = cities[0];
    for (let i=0;i<cities.length;i++){
        if(cities[i].coord.lat>maximoNorte.coord.lat){
            maximoNorte=cities[i];
        }
    };
    return maximoNorte.name;
        // cities.forEach(ciudad =>{
    //     if(cities[ciudad].coord.lon>maximoNorte){
    //         maximoNorte=cities[ciudad].coord.lon;
    //     }
    //});
    // for (let i=0;i<cities.length;i++){
        // if(maximoNorte<cities[i].coord.lon){
            // maximoNorte=cities[i].coord.lon
        // }
    // };
    // let ciudadMasNorte = cities.filter((ciudad)=>{
        // return ciudad.coord.lon == maximoNorte;
    // });
    // let ciudadMasNorte2 = ciudadMasNorte.map((ciudad)=>{
        // return[ciudad.name]
    // });
    // return ciudadMasNorte2;
};

exports.max_south = (cities) => {
    let maximoSur = cities[0];
    for (let i=0;i<cities.length;i++){
        if(cities[i].coord.lat<maximoSur.coord.lat){
            maximoSur=cities[i];
        }
    };
    return maximoSur.name;
/*     let maximoSur = cities[0].coord.lon;
    cities.forEach(ciudad =>{
        if(cities[ciudad].coord.lon<maximoSur){
            maximoNorte=cities[ciudad].coord.lon;
        }
    })
    
    let ciudadMasSur = cities.filter((ciudad)=>{
        return ciudad.coord.lon = maximoSur;
    })
    let ciudadMasSur2 = ciudadMasSur.map((ciudad)=>{
        return[ciudad.name]
    });
    return ciudadMasSur2; */
};

exports.gravity_center = (cities) => {};

exports.closest_GC = (cities) => {};
