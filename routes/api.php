<?php

use Illuminate\Http\Request;

Route::apiResource('/posts', 'PostController');
Route::apiResource('/categories', 'CategoryController');
Route::get('/posts/category/{slug}', 'PostController@category');
Route::apiResource('/comments', 'CommentController');
Route::post('/users/register', 'UserController@register');
Route::post('/users/login', 'UserController@login');