<?php

use Dingo\Api\Routing\Router;

/** @var Router $api */
$api = app(Router::class);

$api->version('v1', function (Router $api) {
    $api->group(['prefix' => 'auth'], function(Router $api) {
        $api->post('signup', 'App\\Api\\V1\\Controllers\\SignUpController@signUp');
        $api->post('login', 'App\\Api\\V1\\Controllers\\LoginController@login');
    });

    $api->group(['middleware' => 'jwt.auth'], function(Router $api) {
        $api->resource('artists', 'App\\Api\\V1\\Controllers\\ArtistController');

        $api->resource('albums', 'App\\Api\\V1\\Controllers\\AlbumController');
    });
});
