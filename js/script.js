'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count <= 30) {
            alert('Вы классический зритель');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        };
    },
    remembermyFilms: function() {
        for (let i = 0; i<2; i++) { 
            let filmName, filmRating;
            do {
                filmName = prompt('Один из последних просмотренных фильмов?', '');
                if (filmName == null) {
                    alert('Нельзя отменить!');
                } else if (filmName == '') {
                    alert('Введите название фильма!');
                } else if (filmName.length > 50) {
                    alert('Название фильма не должно быть больше 50 символов');
                } else {
                    do {
                        filmRating = prompt(`На сколько вы оцениваете фильм "${filmName}"`, '');
                        if (filmRating == null) {
                            alert('Нельзя отменить!');
                        } else if (filmRating == '') {
                            alert('Введите оценку для фильма!');
                        } else {
                            this.movies[filmName] = filmRating;
                        }
                    } while (filmRating == null || filmRating == '');
                }
            } while (filmName == null || filmName == '' || filmName.length >10);            
        }
    },
    toggleVisibleMyDB: function(hidden) {
        this.privat = !hidden;
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        } else {
            console.log('Это приватный контент!');
        }
    },
    writeYourGenres: function(genres) {
        for(let i = 0; i<3; i++) {
            let  genre;
            do {
                genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
                if(genre == null) {
                    alert('Нельзя отменить!');
                } else if(genre == '') {
                    alert(`Введите жанр фильма ${i+1}!`);
                } else {
                    genres[i] = genre;
                }
            } while(genre == null || genre == '');
        };

        this.genres.forEach((item, index, array) => {
            console.log(`Любимый жанр #${index+1} - это ${item}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.remembermyFilms();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);


// Functions

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     };
// }
// function remembermyFilms() {
//     for (let i = 0; i<2; i++) { 

//         // let filmName = prompt('Один из последних просмотренных фильмов?', ''),
//         //     filmRating = prompt('На сколько оцените его', '');
        
//         // if (filmName != null && filmRating != null && filmName != '' && filmRating != '' && filmName.length <10) {
//         //     personalMovieDB.movies[filmName] = filmRating;
//         // } else {
//         //     alert('Ошибка');
//         //     --i;
//         // }

//         let filmName, filmRating;
//         do {
//             filmName = prompt('Один из последних просмотренных фильмов?', '');
//             if (filmName == null) {
//                 alert('Нельзя отменить!');
//             } else if (filmName == '') {
//                 alert('Введите название фильма!');
//             } else if (filmName.length > 10) {
//                 alert('Название фильма не должно быть больше 50 символов');
//             } else {
//                 do {
//                     filmRating = prompt(`На сколько вы оцениваете фильм "${filmName}"`, '');
//                     if (filmRating == null) {
//                         alert('Нельзя отменить!');
//                     } else if (filmRating == '') {
//                         alert('Введите оценку для фильма!');
//                     } else {
//                         personalMovieDB.movies[filmName] = filmRating;
//                     }
//                 } while (filmRating == null || filmRating == '');
//             }
//         } while (filmName == null || filmName == '' || filmName.length >10);
        
//         //personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько оцените его?', '');
//     }
// }
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Это приватный контент!');
//     }
// }
// function writeYourGenres(genres) {
//     for(let i = 0; i<3; i++) {
//         let  genre;
//         do {
//             genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
//             if(genre == null) {
//                 alert('Нельзя отменить!');
//             } else if(genre == '') {
//                 alert(`Введите жанр фильма ${i+1}!`);
//             } else {
//                 genres[i] = genre;
//             }
//         } while(genre == null || genre == '');
//     }
// }