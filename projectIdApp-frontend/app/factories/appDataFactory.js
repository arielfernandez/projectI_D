/**
 * Created by arielfernandez on 3/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .factory('appDataFactory', function () {

    var data = {};

    data.usersData = [
      {
        "id": 1,
        "name": 'Leonardo',
        "surname": 'DiCaprio',
        "address": 'Lincoln Road 1000',
        "country": 'USA',
        "phone": "1010101001",
        "mobile": "11010010101",
        "email": 'leodicaprio@gmail.com',
        "img": 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'
      },
      {
        "id": 2,
        "name": 'Jonnhy',
        "surname": 'Depp',
        "address": 'Collins Ave 1000',
        "country": 'USA',
        "phone": "2020202",
        "mobile": "2020202020",
        "email": 'jdepp@gmail.com',
        "img": 'http://sto.depplus.vn/NewsMedia/assets/image_20140211/42150_20140211115138.jpg'
      },
      {
        "id": 3,
        "name": 'Kate',
        "surname": 'Mara',
        "address": '19th Street 1000',
        "country": 'USA',
        "phone": "3030030",
        "mobile": "330030330",
        "email": 'katemara@gmail.com',
        "img": 'http://vignette3.wikia.nocookie.net/doblaje/images/2/27/Kate-Mara-Hair.jpg/revision/latest?cb=20160307223909&path-prefix=es'
      },
      {
        "id": 4,
        "name": 'Jennifer',
        "surname": 'Aniston',
        "address": '20th Street 1000',
        "country": 'USA',
        "phone": "444040404",
        "mobile": "4040404004",
        "email": 'janiston@gmail.com',
        "img": 'http://img2.timeinc.net/people/i/2010/specials/goldenglobes/predict-a-gown/jennifer-aniston.jpg'
      },
      {
        "id": 5,
        "name": 'Scarlett',
        "surname": 'Johansson',
        "address": '10th Road 1000',
        "country": 'USA',
        "phone": "505050505",
        "mobile": "505050505050",
        "email": 'sj_10@gmail.com',
        "img": 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY1200_CR180,0,630,1200_AL_.jpg'
      },
      {
        "id": 6,
        "name": 'Angelina',
        "surname": 'Jolie',
        "address": '50th Road 1000',
        "country": 'USA',
        "phone": "606060606",
        "mobile": "60606060",
        "email": 'ange_jolie@gmail.com',
        "img": 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY1200_CR173,0,630,1200_AL_.jpg'

      },
      {
        "id": 7,
        "name": 'Cameron',
        "surname": 'Diaz',
        "address": 'One Road 1000',
        "country": 'USA',
        "phone": "707070707",
        "mobile": "770707070707",
        "email": 'diaz_cameron@gmail.com',
        "img": 'http://heightandweights.com/wp-content/uploads/2014/10/Cameron-Diaz-bra-size.jpg'
      },
      {
        "id": 8,
        "name": 'Brad',
        "surname": 'Pitt',
        "address": 'June Road 1000',
        "country": 'USA',
        "phone": "8080808",
        "mobile": "808080080808",
        "email": 'pitt65@gmail.com',
        "img": 'http://img.usmagazine.com/article-leads-vertical-300/1250530894_brad_pitt_290x402.jpg'
      },
      {
        "id": 9,
        "name": 'Tom',
        "surname": 'Cruice',
        "address": '30th Road 1000',
        "country": 'USA',
        "phone": "9099090909",
        "mobile": "90099009090909",
        "email": '¡tomcruise@gmail.com',
        "img": 'https://lh6.googleusercontent.com/-8Qb06t7dSb8/AAAAAAAAAAI/AAAAAAAAK74/JIhZ9Z-dCDc/s0-c-k-no-ns/photo.jpg'
      }
    ];

    return data;

  });


