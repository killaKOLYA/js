'use strict';

// 1.1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 1.2 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
};

// 1.3; 2.1
for (let i = 0; i<2; i++) { 

    let filmName = prompt('Один из последних просмотренных фильмов?', ''),
        filmRating = prompt('На сколько оцените его', '');
    
    if (filmName != null && filmRating != null && filmName != '' && filmRating != '' && filmName.length <10) {
        personalMovieDB.movies[filmName] = filmRating;
    } else {
        alert('Ошибка');
        --i;
    }
    // let filmName, filmRating;
    // do {
    //     filmName = prompt('Один из последних просмотренных фильмов?', '');
    //     if (filmName == null) {
    //         alert('Нельзя отменить!');
    //     } else if (filmName == '') {
    //         alert('Введите название фильма!');
    //     } else if (filmName.length > 10) {
    //         alert('Название фильма не должно быть больше 50 символов');
    //     } else {
    //         do {
    //             filmRating = prompt(`На сколько вы оцениваете фильм "${filmName}"`, '');
    //             if (filmRating == null) {
    //                 alert('Нельзя отменить!');
    //             } else if (filmRating == '') {
    //                 alert('Введите оценку для фильма!');
    //             } else {
    //                 personalMovieDB.movies[filmName] = filmRating;
    //             }
    //         } while (filmRating == null || filmRating == '');
    //     }
    // } while (filmName == null || filmName == '' || filmName.length >10);
    
    //personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько оцените его?', '');
}

console.log(personalMovieDB);
